<template>
  <el-dialog
    v-model="dialogVisible"
    title="选择模板"
    width="60%"
    :before-close="handleClose"
  >
    <div class="noticeTemplateSelect">
      <el-card shadow="hover" class="template-item" @click="selectTemplate('')"><el-icon><Plus /></el-icon></el-card>
      <el-card shadow="hover" class="template-item" v-for="(item, index) in templateList" :key="index" @click="selectTemplate(item.id)">{{ item.name }}</el-card>
    </div>
    <el-pagination
    class="list-pagination"
    v-model:current-page="pageParams.page"
    v-model:page-size="pageParams.size"
    :page-sizes="[10, 20, 50]"
    :small="true"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    />
  </el-dialog>
</template>

<script lang="ts">
    import { ref, reactive, toRefs, onMounted, defineComponent } from 'vue'
    import http from '@/utils/http.ts'
    import util from '@/utils/util.ts'

    export default defineComponent({
        emits: ['cancel', 'selectTemplate'],
        components: {  },
        props:{
            detailContent:{
                type:String,
                default:""
            }
        },
        setup(props, { emit }) {

            let templateList = reactive([])
            const dialogVisible = ref(true)
            const {} = toRefs(props)
            const total = ref(0)
            const pageParams = reactive({
                page: 1,
                size: 10
            })

            onMounted(() => {
                search()
            })

            const search = () => {
                http({
                    url: '/notice/selectAllTemplate',
                    method: 'get',
                    params: pageParams
                }).then((res:any) => {
                    total.value = res.total
                    util.assignmentList(templateList, res.data)
                })
            }

            const selectTemplate = (id: number) => {
                emit('selectTemplate', id)
            }

            const handleSizeChange = (val: number) => {
                pageParams.size = val
                search()
            }
            const handleCurrentChange = (val: number) => {
                pageParams.page = val
                search()
            }

            const cancel = () => {
                // console.log('cancel')
                emit('cancel')
            }
            const handleClose = (done: () => void) => {
                emit('cancel')
                done()
            }
            return {
                templateList,
                dialogVisible,
                pageParams,
                total,
                selectTemplate,
                cancel,
                handleClose,
                handleSizeChange,
                handleCurrentChange
            };            
        }

    })
</script>

<style lang="scss" scoped>
.noticeTemplateSelect {
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    .template-item {
        margin-right: 10px;
        margin-bottom: 10px;
    }
    :last-child {
        margin-right: 0;
    }
}
.list-pagination {
    margin-top: 20px;
    display: flex;
    justify-content: right;
}
</style>
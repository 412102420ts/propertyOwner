<template>
  <el-dialog
    v-model="dialogVisible"
    :title="typeName + '模板'"
    width="60%"
    :before-close="handleClose"
  >
    <div class="noticeTemplateEdit">
      <el-form :model="form" ref="ruleFormRef" :rules="rules" label-width="120px">
          <el-form-item label="模板名称" prop="name">
              <el-input v-model="form.name" class="t_name" maxlength="20" size="small" />
          </el-form-item>
          <el-form-item label="模板内容">
              <Editor
              v-if="isShowEditor"
              v-model:detailContent="form.context"
              @changeContent="passHtml"
            ></Editor>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" size="small" @click="onSubmit(ruleFormRef)">{{ typeName }}</el-button>
              <el-button size="small" @click="cancel">取消</el-button>
          </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>

<script lang="ts">
  export default {
    name: 'noticeTemplateEdit'
  }
</script>

<script setup lang="ts">
    import { ref, reactive, toRefs, onMounted } from 'vue'
    import Editor from '@/utils/editor.vue';
    import { ElMessage, ElMessageBox } from 'element-plus'
    import http from "@/utils/http.ts";
    import util from "@/utils/util.ts";
    import type { FormInstance, FormRules } from 'element-plus'

    // 接收自定义属性
    const props = defineProps({
      id: { type: String, default: '' },
      type: { type: Number, default: 1 },
      statusType: { type: Number, default: 1 }
    })
    const emit = defineEmits(['cancel', 'submit'])
    const {id, type, statusType} = toRefs(props)
    const ruleFormRef = ref<FormInstance>()

    // 数据
    let form = reactive({name: '', context: ''})
    const currentPage4 = ref(4)
    const pageSize4 = ref(100)    
    const isClear = ref(true)
    const isShowEditor = ref(false)
    const dialogVisible = ref(true)
    const typeName = ref('新建')
    let typeList = reactive([ 
      {value: 0, label: "通知"}, 
      {value: 1, label: "活动"}, 
      {value: 2, label: "取消活动"}, 
      {value: 3, label: "广告"}])
    const rules = reactive<FormRules>({
      name: [
        {required: true, message: '请输入名称', trigger: 'blur'}
      ]
    })

    onMounted(() => {
      if(statusType.value !== 1) {
        typeName.value = '编辑'
        getNoticeData()
      } else {
        isShowEditor.value = true
      }

    })

    const getNoticeData = () => {
      if(id.value) {
        http({
            url: '/notice' + (type.value === 1 ? '/selectById' : '/selectTemplateById'),
            method: 'get',
            params: {id: id.value}
        }).then((res: any) => {
          res.data.context = decodeURI(res.data.context)
          util.assignmentObj(form, res.data)
          isShowEditor.value = true
        })
      } else {
        isShowEditor.value = true
      }
    }

    const onSubmit = (formEl: FormInstance | undefined) => {
      if (!formEl) return
      formEl.validate((valid, fields) => {
        if (valid) {
          form.context = encodeURI(form.context)
          http({
              url: '/notice' + (statusType.value === 1 ? '/createNoticeTemplate' : '/updataNoticeTemplate'),
              method: 'post',
              data: form
          }).then((res: any) => {
            ElMessage({
              type: res.data ? 'success' : 'error',
              message: (statusType.value === 1 ? '新增' : '编辑') + (res.data ? '成功' : '失败'),
            })
            emit('submit')
          })
        }
      })
    }

    const passHtml = (val:string) => {
      form.context = val
    }

    const cancel = () => {
      emit('cancel')
    }
    const handleClose = (done: () => void) => {
      emit('cancel')
      done()
    }

</script>

<style lang="scss" scoped>
@import './index.scss'
</style>

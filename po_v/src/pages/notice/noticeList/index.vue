<template>
  <div class="noticeList">
      <div class="search-box">
        <el-form-item label="公告标题">
          <el-input v-model="form.title" size="small" placeholder="请输入" />
        </el-form-item>
        <el-form-item label="公告类型">
          <el-select v-model="form.type" size="small" placeholder="请选择">
            <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-date-picker
            v-model="form.createtime"
            value-format="x"
            type="daterange"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            size="small"
          />
        </el-form-item>
        <div class="btn-box">
          <el-button type="primary" size="small" @click="search">查询</el-button>
          <el-button size="small" @click="reset">重置</el-button>
        </div>
      </div>
      <div class="container">
        <el-button type="primary" size="small" @click="addNotice">新建</el-button>
      </div>
      <el-table :data="noticeList" border style="width: 100%">
        <el-table-column type="index" label="序号" width="70" />
        <el-table-column prop="title" label="标题" width="200" />
        <el-table-column prop="type" label="类型" width="100">
          <template #default="scope">
            <div>
              {{ typeList[scope.row.type + 1].label }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="createtime" label="发布时间" >
          <template #default="scope">
            <div>
              {{ util.filterCreatetime(scope.row.createtime) }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row.id)"
              >编辑</el-button
            >
            <!-- <el-button size="small" type="danger" @click="handleRevocation(scope.row.id)"
              >撤销</el-button
            > -->
            <el-button size="small" type="danger" @click="handleDelete(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="list-pagination"
        v-model:current-page="pageParams.page"
        v-model:page-size="pageParams.size"
        :page-sizes="[10, 20, 50, 100]"
        :small="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />

      <noticeTemplateSelect v-if="isShowSelect" @selectTemplate="selectTemplate" @cancel="cancel" />
      <noticeEdit v-if="isEdit" :id="nid" :type="1" :statusType="statusType" @submit="submit" @cancel="cancel" />
  </div>
</template>

<script setup lang="ts">
  import noticeTemplateSelect from '@/components/noticeTemplateSelect.vue'
  import noticeEdit from '../noticeEdit/index.vue'
  import { ref, reactive, onMounted, getCurrentInstance } from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import http from "@/utils/http.ts";
  import util from "@/utils/util.ts";

const config = getCurrentInstance();
  let form = reactive({title: '', type: '', createtime: []})
  let typeList = reactive([
    {value: '', label: "全部"}, 
    {value: 0, label: "通知"}, 
    {value: 1, label: "活动"}, 
    {value: 2, label: "取消活动"}, 
    {value: 3, label: "广告"}])
  let noticeList = reactive([])
  const pageParams = reactive({
    size: 10,
    page: 1
  })  
  const statusType = ref(1)
  const isShowSelect = ref(false)
  const isEdit = ref(false)
  const nid = ref(0)
  const total = ref(0)

  onMounted(() => {
    search()
  })

  const search = () => {
    let obj = {...pageParams, ...form, createtime: form.createtime.join()}
    http({
        url: '/notice/getDataPage',
        method: 'get',
        params: obj
    }).then((res: any) => {
      total.value = res.total
      util.assignmentList(noticeList, res.data)
    })
  }

  const addNotice = () => {
    isShowSelect.value = true
  }

  const handleEdit = (id: number) => {
    statusType.value = 2
    isEdit.value = true
    nid.value = id
  }

  const submit = () => {
    isEdit.value = false
    search()
  }

  const cancel = () => {
    isShowSelect.value = false
    isEdit.value = false
  }

  const selectTemplate = (id:number) => {
    isShowSelect.value = false
    statusType.value = 1
    isEdit.value = true
    nid.value = id
  }

  const handleDelete = (id:number) => {
    ElMessageBox.confirm('确认删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        http({
            url: '/notice/deletetById/' + id,
            method: 'post'
        }).then((res: any) => {
          ElMessage({
            type: res.data ? 'success' : "error",
            message: res.data ? '已删除' : '删除失败',
          })
          search()
        })
        
      })
  }

  const reset = () => {
    form.createtime.length = 0
    form.title = ''
    form.type = ''
  }

  const handleSizeChange = (val: number) => {
    pageParams.size = val
    search()
  }
  const handleCurrentChange = (val: number) => {
    pageParams.page = val
    search()
  }
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>

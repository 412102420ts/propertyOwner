<template>
  <div class="affairList">
      <div class="search-box">
        <!-- <el-form :model="form" label-width="120px"> -->
          <el-form-item label="事务区域">
            <el-cascader v-model="form.region" size="small" :options="regionOptions" placeholder="请选择" @change="handleChange" />
          </el-form-item>
          <el-form-item label="事务状态">
            <el-select v-model="form.type" size="small" placeholder="请选择">
              <el-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
          <el-form-item label="发布时间">
            <el-date-picker
              v-model="form.dateTime"
              type="daterange"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              size="small"
            />
          </el-form-item>
          <div class="btn-box">
            <el-button type="primary" size="small" @click="search">查询</el-button>
            <el-button size="small">重置</el-button>
          </div>
        <!-- </el-form> -->
      </div>
      <div class="container">
        <!-- <el-button type="primary" size="small" @click="addNotice">新建</el-button> -->
      </div>
      <el-table :data="affairList" border style="width: 100%">
        <el-table-column type="index" label="序号" width="70" />
        <el-table-column prop="region" label="区域" width="180" />
        <el-table-column prop="type" label="状态" width="130">
          <template #default="scope">
            <div>
              {{ typeList[scope.row.type].label }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述" width="180" />
        <el-table-column prop="time" label="发布时间" />
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button size="small" @click="complete(scope.row.id)"
              >完成</el-button
            >
            <el-button size="small" type="danger" @click="endAffair(scope.row.id)"
              >取消</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="list-pagination"
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[100, 200, 300, 400]"
        :small="true"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />

  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'

  let form = reactive({title: '', region: '', dateTime: []})
  let typeList = reactive([
    {value: 0, label: "待处理"}, 
    {value: 1, label: "已处理"}, 
    {value: 2, label: "已取消"},
    ])
  let affairList = reactive([
    {region: '南门', description: "测试通知1-0", type: 0, time: "2029-06-14 12:56", id: 0},
    {region: '四栋17层', description: "测试取消活动1-2", type: 2, time: "2029-06-14 12:56", id: 1},
    {region: '一栋天台', description: "测试活动1-1", type: 1, time: "2029-06-14 12:56", id: 2},
    {region: '会所门口', description: "测试广告1-4", type: 1, time: "2029-06-14 12:56", id: 3},
  ])
  const currentPage4 = ref(4)
  const pageSize4 = ref(100)    
  const statusType = ref(1)
  const isShowSelect = ref(false)
  const isEdit = ref(false)
  const nid = ref('')

  const search = () => {
    console.log(form)
  }

  const complete = (id:string) => {
    console.log(555, id)
    isShowSelect.value = false
    isEdit.value = true
    nid.value = id
  }

  const endAffair = (id:string) => {
    ElMessageBox.confirm('确认结束？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
          ElMessage({
            type: 'info',
            message: `已结束`,
          })          
      })
  }

  const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
  }
  const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
  }
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>

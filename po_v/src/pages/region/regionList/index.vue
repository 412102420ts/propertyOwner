<template>
  <div class="regionList">
    <el-button type="primary" size="small" class="create-add" @click="addNotice">新建</el-button>

    <el-input v-model="filterText" placeholder="请输入区域名称" />

    <el-tree
      ref="treeRef"
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
    >
      <template #default="{ node }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <a @click="edit(node.id)"> 编辑 </a>
            <a style="margin-left: 8px" @click="remove(node.id)"> 删除 </a>
          </span>
        </span>
      </template>
    </el-tree>

    <regionEdit v-if="isShowEdit" :rid="rid" :type="type" @submit="submit" @cancel="cancel" />
  </div>
</template>

<script setup lang="ts">
  import regionEdit from '../regionEdit/index.vue'
  import { ref, reactive, watch } from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { ElTree } from 'element-plus'

  interface Tree {
    id: number
    label: string
    children?: Tree[]
  }

  const filterText = ref('')
  const treeRef = ref<InstanceType<typeof ElTree>>()
  const isShowEdit = ref(false)
  const rid = ref(0)
  const data: Tree[] = [
    {
      id: 1,
      label: '北门',
      children: [
        {
          id: 4,
          label: '门口',
          children: [
            {
              id: 9,
              label: '广场',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: '会所',
      children: [
        {
          id: 5,
          label: '大厅',
        },
        {
          id: 6,
          label: '健身房',
        },
      ],
    },
    {
      id: 3,
      label: '五栋',
      children: [
        {
          id: 7,
          label: '大堂',
        },
        {
          id: 8,
          label: '天台',
        },
        {
          id: 8,
          label: '二层',
        },
        {
          id: 8,
          label: '三层',
        },
      ],
    },
  ]

  const defaultProps = {
    children: 'children',
    label: 'label',
  }

  watch(filterText, (val) => {
    treeRef.value!.filter(val)
  })

  const filterNode = (value: string, data: Tree) => {
    if (!value) return true
    return data.label.includes(value)
  }

  const addNotice = () => {
    isShowEdit.value = true
  }

  const edit = (id:number) => {
    console.log(id, 'edit')
    rid.value = id
    isShowEdit.value = true
  }

  const remove = (id:number) => {
    console.log(id, 'remove')
    ElMessageBox.confirm('确认删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
          ElMessage({
            type: 'info',
            message: `已删除`,
          })          
      })
  }

  const submit = () => {
    isShowEdit.value = false
  }

  const cancel = () => {
    isShowEdit.value = false
  }

</script>

<style lang="scss" scoped>
@import './index.scss'
</style>

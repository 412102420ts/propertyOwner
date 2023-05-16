<template>
  <el-dialog
    v-model="dialogVisible"
    :title="typeName + '区域'"
    width="40%"
    :before-close="handleClose"
  >
    <div class="regionEdit">
      <el-form :model="form" label-width="120px">
          <el-form-item label="区域名称">
              <el-input v-model="form.name" class="t_name" maxlength="20" size="small" />
          </el-form-item>
          <el-form-item label="上层分类">
            <el-cascader v-model="form.class" :options="options" @change="handleChange" />
          </el-form-item>
          <el-form-item>
              <el-button type="primary" size="small" @click="onSubmit">{{ typeName }}</el-button>
              <el-button size="small" @click="cancel">取消</el-button>
          </el-form-item>
      </el-form>
    </div>
  </el-dialog>
</template>

<script lang="ts">
  export default {
    name: 'regionEdit'
  }
</script>

<script setup lang="ts">
    import { ref, reactive, toRefs, onMounted } from 'vue'

    // 接收自定义属性
    const props = defineProps({
      id: { type: String, default: '' },
      type: { type: Number, default: 1 }
    })
    const emit = defineEmits(['cancel', 'submit'])
    const {id, type} = toRefs(props)

    // 数据
    let form = reactive({name: '', class: ''})
    const dialogVisible = ref(true)
    const options = [{
        value: '1',
        label: '9栋',
        children: [
          {
            value: '2',
            label: '大堂',
            children: [
              {
                value: '3',
                label: '电梯',
              },
              {
                value: '4',
                label: '一层',
              },
              {
                value: '5',
                label: '六层',
              },
              {
                value: '6',
                label: '顶层',
              },
            ],
          },
        ]
      }]
    const typeName = ref('新建')

    onMounted(() => {
      console.log('6666')
      console.log(id.value)
      if(type.value !== 1) {
        typeName.value = '编辑'
      }
    })

    const onSubmit = () => {
      console.log(form)
      console.log(JSON.stringify(form))
      emit('submit')
    }

    const cancel = () => {
      // console.log('cancel')
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

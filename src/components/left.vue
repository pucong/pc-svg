<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="数据库" name="1">

    </el-collapse-item>
    <el-collapse-item title="图形" name="2">
      <pcCircle inner-color="rgba(53, 109, 222, 0.54)"></pcCircle>
    </el-collapse-item>
    <el-collapse-item title="箭头" name="3">
      <div>简化流程：设计简洁直观的</div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
  import pcCircle from '@/components/circle/pc-circle'
  export default {
    name: 'left',
    data () {
      return {
        activeNames: ['1', '2', '3']
      }
    },
    components: {
      pcCircle
    }
  }
</script>

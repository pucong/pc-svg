<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="数据库" name="1">
      <el-card :body-style="{ padding: '0px' }">
        <pcCircle></pcCircle>
      </el-card>
    </el-collapse-item>
    <el-collapse-item title="图形" name="2">
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    </el-collapse-item>
    <el-collapse-item title="箭头" name="3">
      <div>简化流程：设计简洁直观的操作流程；</div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
  import pcCircle from '@/components/circle/pc-circle'
  export default {
    name: 'left',
    data () {
      return {
        activeNames: ['1']
      }
    },
    components: {
      pcCircle
    }
  }
</script>

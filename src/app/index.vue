<template>
  <el-container style="height: 100%;">
    <el-header style="height: auto">
      <pcHeader></pcHeader>
    </el-header>
    <svgIndex :svg-list="svgList"></svgIndex>
    <el-footer style="height: 5%;background-color: #545c64"></el-footer>
  </el-container>
</template>
<script>
  import pcLeft from '@/components/left'
  import pcHeader from '@/components/header'
  import svgIndex from '@/components/svgIndex'

  export default {
    name: 'index',
    data () {
      return {
        svgList: [] // 所有显示的图形
      }
    },
    components: {
      pcLeft,
      svgIndex,
      pcHeader
    }
  }
</script>
<style lang="css">
  @import '../assets/index.css'
</style>

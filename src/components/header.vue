<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-menu-item index="2">处理中心</el-menu-item>
    <el-menu-item index="3">处理中心</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'pcHeader',
    data () {
      return {
        activeIndex: '1'
      }
    }
  }
</script>
<style>
  .el-header {
    padding: 0px;
  }
</style>

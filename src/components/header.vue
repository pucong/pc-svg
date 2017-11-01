<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    background-color="#fff"
    text-color="#545c64"
    active-text-color="#ffd04b">
    <el-menu-item index="1">隐藏左侧栏</el-menu-item>
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

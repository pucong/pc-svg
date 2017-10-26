<template>
  <el-container>
    <el-header>
      <pcHeader></pcHeader>
    </el-header>
    <el-container style="height: 600px; border: 1px solid #eee">
      <el-aside width="20%">
        <left></left>
      </el-aside>
      <el-main style="background-color: aqua">Main</el-main>
    </el-container>
    <el-footer style="background-color: blanchedalmond">Footer</el-footer>
  </el-container>
</template>
<script>
  import left from '@/components/left'
  import pcHeader from '@/components/header'
export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      left,
      pcHeader
    }
}
</script>
<style lang="css">
  @import '../assets/index.css'
</style>

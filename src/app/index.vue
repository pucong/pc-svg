<template>
  <el-container>
    <el-header>
      <pcHeader></pcHeader>
    </el-header>
    <el-container style="height: 600px; border: 1px solid #eee">
      <el-aside width="20%" style="border-right: 5px solid rgba(53, 109, 222, 0.54);">
        <pcleft></pcleft>
      </el-aside>
      <el-main style="background-color: rgba(243, 243, 235, 0.4);">
        <pcMain></pcMain>
      </el-main>
    </el-container>
    <el-footer style="background-color: #545c64">

    </el-footer>
  </el-container>
</template>
<script>
  import pcleft from '@/components/left'
  import pcMain from '@/components/main'
  import pcHeader from '@/components/header'

export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      pcMain,
      pcleft,
      pcHeader
    }
}
</script>
<style lang="css">
  @import '../assets/index.css'
</style>

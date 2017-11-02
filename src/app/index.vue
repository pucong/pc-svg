<template>
  <el-container style="height: 100%;">
    <el-header style="height: auto">
      <pcHeader></pcHeader>
    </el-header>
    <el-container style="height: 85%; border: 1px solid #eee">
      <el-aside width="15%" style="border-right: 2px solid rgba(53, 109, 222, 0.54);position: relative;">
        <pcleft></pcleft>
      </el-aside>
      <el-main style="padding: 0;">
        <pcMain></pcMain>
      </el-main>
      <!--点击出现的图片-->
      <pcSvg type="parallelogram" inner-color="rgba(53, 109, 222, 0.3)"></pcSvg>
    </el-container>
    <el-footer style="height: 5%;background-color: #545c64">

    </el-footer>

  </el-container>
</template>
<script>
  import pcleft from '@/components/left'
  import pcMain from '@/components/main'
  import pcHeader from '@/components/header'
  import pcSvg from '@/components/common/pc-svg'

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
      pcSvg,
      pcHeader
    }
}
</script>
<style lang="css">
  @import '../assets/index.css'
</style>

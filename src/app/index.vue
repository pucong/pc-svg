<template>
  <el-container style="height: 100%;">
    <el-header style="height: auto">
      <pcHeader></pcHeader>
    </el-header>
    <el-container style="height: 85%; border: 1px solid #eee;position: relative;" class="pcScgMainContainer">
      <el-aside width="15%" style="border-right: 2px solid rgba(53, 109, 222, 0.54);position: relative;">
        <pcLeft @clickSvg="clickSvg"></pcLeft>
      </el-aside>
      <el-main style="padding: 0;">
        <pcMain class="pcMain"></pcMain>
      </el-main>
      <!--点击出现的图片-->
      <pcSvg :type="mouseOption.showClickSvgType" v-if="mouseOption.showClickSvg" :svg-type="1"
             position="absolute" inner-color="rgba(53, 109, 222, 0.3)" :left="mouseOption.xx" :top="mouseOption.yy"></pcSvg>
    </el-container>
    <el-footer style="height: 5%;background-color: #545c64">

    </el-footer>

  </el-container>
</template>
<script>
  import pcLeft from '@/components/left'
  import pcMain from '@/components/main'
  import pcHeader from '@/components/header'
  import pcSvg from '@/components/common/pc-svg'
  import $ from 'jquery'

  export default {
    name: 'index',
    data () {
      return {
        mouseOption: { // 鼠标参数
          showClickSvgType: 'parallelogram', //  点击出现的图形
          showClickSvg: false, //  是否显示点击出现的图形
          xx: 10,
          yy: 10
        }
      }
    },
    components: {
      pcMain,
      pcLeft,
      pcSvg,
      pcHeader
    },
    methods: {
      clickSvg: function (svgType) { // 点击图形事件，产生一个图形
        this.mouseOption.showClickSvg = true
        this.mouseOption.showClickSvgType = svgType
        $('.pcScgMainContainer').mousemove(e => {
          if (this.mouseOption.showClickSvg) {
            var xx = e.originalEvent.x || e.originalEvent.layerX || 0
            var yy = e.originalEvent.y || e.originalEvent.layerY || 0
            this.mouseOption.xx = xx
            this.mouseOption.yy = yy
          }
        })
      }
    }
  }
</script>
<style lang="css">
  @import '../assets/index.css'
</style>

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
        <pcMain class="pcMain" :svg-list="svgList"></pcMain>
      </el-main>
      <!--点击出现的图片-->
      <pcSvg :type="mouseOption.showClickSvgType" ref="pcSvgOut" v-if="mouseOption.showClickSvg" :svg-type="1"
             :pc-scg-main-container-opt="pcScgMainContainerOpt" :show-click-svg='mouseOption.showClickSvg'
             position="absolute" inner-color="rgba(53, 109, 222, 0.3)" :pc-width="100" :pc-height="100"
             @showSvgClick="showSvgClick"
      ></pcSvg>
    </el-container>
    <el-footer style="height: 5%;background-color: #545c64"></el-footer>
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
          showClickSvg: false //  是否显示点击出现的图形
        },
        pcScgMainContainerOpt: { // 显示栏相对top和left
          top: 1,
          left: 1
        },
        svgList: [] // 所有显示的图形
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
      },
      showSvgClick: function () {
        this.mouseOption.showClickSvg = false
        var positon = this.$refs.pcSvgOut.getPosition()
        const xx = parseInt(positon.left)
        const yy = parseInt(positon.top)
        console.log(xx, yy)
      }
    },
    mounted: function () {
//      var _this = this
      // 计算显示栏相对高度
      const top = $('.pcScgMainContainer').position().top
      const left = $('.pcScgMainContainer').position().left
      this.pcScgMainContainerOpt.top = top
      this.pcScgMainContainerOpt.left = left
    }
  }
</script>
<style lang="css">
  @import '../assets/index.css'
</style>

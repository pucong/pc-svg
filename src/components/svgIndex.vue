<template>
    <el-container class="pcScgMainContainer">
      <el-aside width="15%" style="border-right: 2px solid rgba(53, 109, 222, 0.54);position: relative;">
        <pcLeft @clickSvg="clickSvg"></pcLeft>
      </el-aside>
      <el-main style="padding: 0;">
        <pcMain class="pcMain" :svg-list="svgList"></pcMain>
      </el-main>
      <!--点击左侧出现的图形-->
      <pcSvg :type="mouseOption.showClickSvgType" ref="pcSvgOut" v-if="mouseOption.showClickSvg" :svg-type="1"
             :pc-scg-main-container-opt="pcScgMainContainerOpt" :show-click-svg='mouseOption.showClickSvg'
             position="absolute" inner-color="rgba(53, 109, 222, 0.3)" :pc-width="100" :pc-height="100"
             @showSvgClick="showSvgClick"
      ></pcSvg>
    </el-container>
</template>
<script>
  import pcLeft from '@/components/left'
  import pcMain from '@/components/main'
  import pcSvg from '@/components/common/pc-svg'
  import $ from 'jquery'

  export default {
    name: 'index',
    props: {
      svgList: { // 是否显示点击出现的图形
        type: Array,
        default: function () {
          return []
        }
      }
    },
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
        svg: {  // 图形参数默认值
          type: 'circle',
          innerColor: 'rgba(53, 109, 222, 0.3)',
          left: 100,
          top: 100,
          pcWidth: 100,
          pcHeight: 100,
          inputFont: 'pcSvg'
        }
      }
    },
    components: {
      pcMain,
      pcLeft,
      pcSvg
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
      // 计算显示栏相对高度
      const top = $('.pcScgMainContainer').position().top
      const left = $('.pcScgMainContainer').position().left
      this.pcScgMainContainerOpt.top = top
      this.pcScgMainContainerOpt.left = left
    }
  }
</script>
<style scoped>
  .pcScgMainContainer{
    height: 85%;
    border: 1px solid #eee;
    position: relative;
  }
</style>

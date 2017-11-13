<template>
    <el-container class="pcSvgMainContainer">
      <el-aside width="15%" style="border-right: 2px solid rgba(53, 109, 222, 0.54);position: relative;">
        <pcLeft @clickSvg="clickSvg"></pcLeft>
      </el-aside>
      <el-main style="padding: 0;">
        <pcMain class="pcMain" :svg-list="pcSvgList"></pcMain>
      </el-main>
      <!--点击左侧出现的图形-->
      <pcSvg :type="mouseOption.showClickSvgType" ref="pcSvgOut" v-if="mouseOption.showClickSvg" :svg-type="1"
             :show-click-svg='mouseOption.showClickSvg'
             position="absolute" inner-color="rgba(53, 109, 222, 0.3)" :pc-width="100" :pc-height="100"
             :top="clickSvgPosition.yy" :left="clickSvgPosition.xx"
             @showSvgClick="showSvgClick"
      ></pcSvg>
    </el-container>
</template>
<script>
  import pcLeft from '@/components/left'
  import pcMain from '@/components/main'
  import pcSvg from '@/components/common/pc-svg'
  import util from '@/util.js'
  import $ from 'jquery'

  export default {
    name: 'pcSvgIndex',
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
        pcSvgMainContainerOpt: { // 显示栏相对top和left
          top: 1,
          left: 1
        },
        pcSvgList: [],
        svg: {  // 图形参数默认值
          type: 'circle',
          innerColor: 'rgba(53, 109, 222, 0.3)',
          left: 100,
          top: 100,
          pcWidth: 100,
          pcHeight: 100,
          position: 'absolute',
          shwFootFont: false,
          footerFont: 'pcSvg',
          inputFont: 'pcSvg',
          options: { // 其他参数

          }
        },
        clickSvgPosition: {
          xx: 1,
          yy: 1
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
        // 获取鼠标当前位置
        const point = util.getMousePosition()
        // 设置初始位置
        this.clickSvgPosition.xx = (point.xx - parseInt(this.pcSvgMainContainerOpt.left)) / 2
        this.clickSvgPosition.yy = (point.yy - parseInt(this.pcSvgMainContainerOpt.top))
      },
      showSvgClick: function (type) {
        this.mouseOption.showClickSvg = false
        var position = this.$refs.pcSvgOut.getPosition()
        const xx = parseInt(position.left)
        const yy = parseInt(position.top)
        const top = $('.pcMain').position().top
        const left = $('.pcMain').position().left
        var svg = {
          type: type,
          cardId: util.getUuid('card'),
          left: xx - parseInt(left),
          top: yy - parseInt(top)
        }
        svg = $.extend({}, this.svg, svg)
        this.pcSvgList.push(svg)
      }
    },
    mounted: function () {
      // 计算显示栏相对高度
      const top = $('.pcSvgMainContainer').position().top
      const left = $('.pcSvgMainContainer').position().left
      this.pcSvgMainContainerOpt.top = top
      this.pcSvgMainContainerOpt.left = left
      // 保存到store
      this.$store.commit({
        type: 'pcSvgStore/UP_PCSVG_MAIN_CONTAINER_OPT',
        val: this.pcSvgMainContainerOpt
      })
      var svgList = this.svgList
      for (var i in svgList) {
        svgList[i].cardId = util.getUuid('card') // 赋值card id
        // 合并默认值
        var svg = svgList[i]
        svg = $.extend({}, this.svg, svg)
        this.pcSvgList.push(svg)
      }
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

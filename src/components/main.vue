<template>
  <div v-bind:style="pcMainSvgClass" class="pcMainSvgClass">
    <pcScroller @pcScroller="onMouseWheel" >
      <pcRelation type="arrow" :xx-one="100" :yy-one="100" :pc-width="500" :pc-height="500" :xx-two="300" :yy-two="300"
                  inner-color="rgba(53, 109, 222, 0.3)" :arrow-type="2"></pcRelation>

      <pcSvg v-for="(svg, index) in svgList" :key="svg.cardId"
             :type="svg.type"
             :card-id="svg.cardId"
             :inner-color="svg.innerColor"
             :left="svg.left"
             :top="svg.top"
             :pc-width="svg.pcWidth"
             :pc-height="svg.pcHeight"
             :shw-foot-font="svg.shwFootFont"
             :footer-font="svg.footerFont"
             :input-font="svg.inputFont"
             :options="svg.options"
             :position="svg.position">
      </pcSvg>
    </pcScroller>
  </div>
</template>
<script>
  import pcSvg from '@/components/common/pc-svg'
  import pcRelation from '@/components/common/pc-relation'
  import pcScroller from '@/components/other/pcScoller'
  import $ from 'jquery'

  export default {
    name: 'main',
    props: {
      svgList: { // 是否显示点击出现的图形
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data: function () {
      return {
        pcMainSvgClass: {
          transform: 'scale(1, 1)',
          '-ms-transform': 'scale(1,1)', /* IE 9 */
          '-webkit-transform': 'scale(1,1)', /* Safari and Chrome */
          zoom: 1
        },
        scaleNum: 1,
        pcSvgMainOpt: { // 右侧显示栏相对top和left
          top: 1,
          left: 1
        }
      }
    },
    components: {
      pcRelation,
      pcScroller,
      pcSvg
    },
    methods: {
      onMouseWheel: function (type) {
        if (!type) {
          this.scaleNum += 0.1
        } else {
          this.scaleNum -= 0.1
        }
        this.pcMainSvgClass.zoom = this.scaleNum
        this.pcMainSvgClass.transform = 'scale(' + this.scaleNum + ',' + this.scaleNum + ')'
        this.pcMainSvgClass['-ms-transform'] = 'scale(' + this.scaleNum + ',' + this.scaleNum + ')'
        this.pcMainSvgClass['-webkit-transform'] = 'scale(' + this.scaleNum + ',' + this.scaleNum + ')'
        // 保存到store
        this.$store.commit({
          type: 'pcSvgStore/UP_ZOOM_RATE',
          val: this.scaleNum
        })
      }
    },
    mounted: function () {
      // 计算显示栏相对高度
      const topPcMain = $('.pcMain').position().top
      const leftPcMain = $('.pcMain').position().left
      this.pcSvgMainOpt.top = topPcMain
      this.pcSvgMainOpt.left = leftPcMain
      // 保存到store
      this.$store.commit({
        type: 'pcSvgStore/UP_PCSVG_MAIN_OPT',
        val: this.pcSvgMainOpt
      })
    }
  }
</script>
<style scoped>
  .pcMainSvgClass {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: url('../assets/bg.png') #fff;
  }
</style>

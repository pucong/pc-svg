<template>
  <div>
    <!--<pcSvg type="circle"    inner-color="rgba(53, 109, 222, 0.3)" :left="400" :top="150" :pc-width="100" :pc-height="100" input-font="pcSvg1" position="absolute"></pcSvg>-->
    <!--<pcSvg type="rect"      inner-color="rgba(53, 109, 222, 0.3)" :left="400" :top="150" :pc-width="200" :pc-height="200" footer-font="pcSvg" input-font="pcSvg" position="absolute"></pcSvg>-->
    <!--<pcSvg type="triangle"  inner-color="rgba(53, 109, 222, 0.3)" :left="400" :top="150" :pc-width="100" :pc-height="100" footer-font="pcSvg" input-font="pcSvg" position="absolute"></pcSvg>-->
    <!--<pcSvg type="dTriangle" inner-color="rgba(53, 109, 222, 0.3)" :left="400" :top="150" :pc-width="100" :pc-height="100" footer-font="pcSvg" input-font="pcSvg" position="absolute"></pcSvg>-->
    <!--<pcSvg type="lTriangle" inner-color="rgba(53, 109, 222, 0.3)" :left="400" :top="150" :pc-width="100" :pc-height="100" footer-font="pcSvg" input-font="pcSvg" position="absolute"></pcSvg>-->
    <!--<pcSvg type="rTriangle" inner-color="rgba(53, 109, 222, 0.3)" :left="400" :top="150" :pc-width="100" :pc-height="100" footer-font="pcSvg" input-font="pcSvg" position="absolute"></pcSvg>-->
    <!--<pcSvg type="diamond"   inner-color="rgba(53, 109, 222, 0.3)" :left="200" :top="150" :pc-width="100" :pc-height="100" footer-font="pcSvg" input-font="pcSvg" position="absolute"></pcSvg>-->
    <!--<pcSvg type="trapezium" inner-color="rgba(53, 109, 222, 0.3)" :left="200" :top="150" :pc-width="100" :pc-height="100" footer-font="pcSvg" input-font="pcSvg" position="absolute"></pcSvg>-->
    <!--<pcSvg type="parallelogram" inner-color="rgba(53, 109, 222, 0.3)" :left="200" :top="250" :pc-width="160" :pc-height="100" footer-font="pcSvg" input-font="pcSvg" position="absolute"></pcSvg>-->

    <pcSvg v-for="(svg, index) in svgList" :key="svg.cardId"
           :type="svg.type"
           :card-id="svg.cardId"
           :inner-color="svg.innerColor"
           :left="svg.left"
           :top="svg.top"
           :pc-width="svg.pcWidth"
           :pc-height="svg.pcHeight"
           :footer-font="svg.footerFont"
           :input-font="svg.inputFont"
           :position="svg.position">
    </pcSvg>
  </div>
</template>
<script>
  import pcSvg from '@/components/common/pc-svg'

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
    data () {
      return {

      }
    },
    components: {
      pcSvg
    }
  }
</script>
<style scoped>
  .pcMain{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: url('../assets/bg.png') #fff;
  }
</style>

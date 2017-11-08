<template>
  <el-container style="height: 100%;">
    <el-header style="height: auto">
      <pcHeader></pcHeader>
    </el-header>
    <svgIndex :svg-list="svgList"></svgIndex>
    <el-footer style="height: 5%;background-color: #545c64"></el-footer>
  </el-container>
</template>
<script>
  import pcLeft from '@/components/left'
  import pcHeader from '@/components/header'
  import svgIndex from '@/components/svgIndex'

  export default {
    name: 'index',
    data () {
      return {
        svgList: [{ // 所有显示的图形
          type: 'circle',
          innerColor: 'rgba(53, 109, 222, 0.3)',
          left: 100,
          top: 100,
          pcWidth: 100,
          pcHeight: 100,
          footerFont: 'pcSvg',
          inputFont: 'pcSvg',
          shwFootFont: true,
          position: 'absolute'
        }, {
          type: 'rect',
          innerColor: 'rgba(53, 109, 222, 0.3)',
          left: 100,
          top: 100,
          pcWidth: 100,
          pcHeight: 100,
          footerFont: 'pcSvg',
          inputFont: 'pcSvg',
          position: 'absolute'
        }, {
          type: 'triangle',
          innerColor: 'rgba(53, 109, 222, 0.3)',
          left: 100,
          top: 100,
          pcWidth: 100,
          pcHeight: 100,
          footerFont: 'pcSvg',
          position: 'absolute',
          inputFont: 'pcSvg'
        }, {
          type: 'lTriangle',
          innerColor: 'rgba(53, 109, 222, 0.3)',
          left: 100,
          top: 100,
          pcWidth: 100,
          pcHeight: 100,
          footerFont: 'pcSvg',
          position: 'absolute',
          inputFont: 'pcSvg'
        }, {
          type: 'rTriangle',
          innerColor: 'rgba(53, 109, 222, 0.3)',
          left: 100,
          top: 100,
          pcWidth: 100,
          pcHeight: 100,
          footerFont: 'pcSvg',
          position: 'absolute',
          inputFont: 'pcSvg'
        }, {
          type: 'diamond',
          innerColor: 'rgba(53, 109, 222, 0.3)',
          left: 100,
          top: 100,
          pcWidth: 100,
          pcHeight: 100,
          footerFont: 'pcSvg',
          position: 'absolute',
          inputFont: 'pcSvg'
        }, {
          type: 'trapezium',
          innerColor: 'rgba(53, 109, 222, 0.3)',
          left: 100,
          top: 100,
          pcWidth: 100,
          pcHeight: 100,
          footerFont: 'pcSvg',
          position: 'absolute',
          inputFont: 'pcSvg'
        }, {
          type: 'parallelogram',
          innerColor: 'rgba(53, 109, 222, 0.3)',
          left: 100,
          top: 100,
          pcWidth: 200,
          pcHeight: 100,
          footerFont: 'pcSvg',
          position: 'absolute',
          inputFont: 'pcSvg'
        }],
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
      pcLeft,
      svgIndex,
      pcHeader
    }
  }
</script>
<style lang="css">
  @import '../assets/index.css'
</style>

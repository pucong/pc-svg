<!--这是关系图形-->
<template>
  <div v-bind:style="outerStyle">
    <arrow :xx-one="xxOne" :yy-one="yyOne" :xx-two="xxTwo" :yy-two="yyTwo" :polyline-color="polylineColor" :line-font="lineFont" :line-color="lineColor" v-if="type=='arrow'"></arrow>
  </div>
</template>
<script>
  import util from '@/util.js'
  import arrow from '@/components/svg/arrow'

  export default {
    name: 'pc-arrow',
    props: {
      pcWidth: { // 宽度
        type: Number,
        default: 20
      },
      pcHeight: { // 高度
        type: Number,
        default: 20
      },
      xxOne: {
        type: Number,
        default: 10
      },
      yyOne: {
        type: Number,
        default: 10
      },
      xxTwo: {
        type: Number,
        default: 300
      },
      yyTwo: {
        type: Number,
        default: 300
      },
      lineFont: { // 文字
        type: String,
        default: '这是一段随着路径绘制的文字'
      },
      lineColor: { // 直线颜色
        type: String,
        default: 'rgb(99,99,99)'
      },
      polylineColor: { // 头部颜色
        type: String,
        default: 'rgb(99,99,99)'
      },
      relationType: { // 属性 2 左侧图形
        type: Number,
        default: 2
      },
      type: { // 图形样式 arrow 直线等
        type: String,
        default: 'arrow'
      }
    },
    components: {
      arrow
    },
    data () {
      return {
        outerStyle: {
          width: this.pcWidth + 'px',
          height: this.pcHeight + 'px'
        },
        pathId: util.getUuid('path')
      }
    }
  }
</script>

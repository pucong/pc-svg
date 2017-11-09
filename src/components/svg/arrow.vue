<!--这是方向箭头-->
<template>
  <svg width="100%" height="100%" version="1.1"
       xmlns="http://www.w3.org/2000/svg">
    <!--直线-->
    <line :x1="xxOne" :y1="yyOne" :x2="xxTwo" :y2="yyTwo"
          v-bind:style="lineStyle"/>
    <!--方向头部-->
    <polyline :points="polyline"
              v-bind:style="polylineStyle"/>

    <!--开始点-->
    <circle :cx="xxOne" :cy="yyOne" r="2" :stroke="lineColor"
            stroke-width="2" :fill="lineColor"/>

    <!--结束点-->
    <circle :cx="xxTwo" :cy="yyTwo" r="2" :stroke="polylineColor"
            stroke-width="2" :fill="polylineColor"/>

    <!--文字部分-->
    <div v-if="relationType == 3">
      <defs>
        <path :id="pathId" :d="fontPath" fill="none" stroke="#333"></path>
      </defs>
      <text class="textCircle" fill="yellowgreen">
        <textPath xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#' + pathId">{{ lineFont }}</textPath>
      </text>
    </div>
  </svg>
</template>
<script>
  import util from '@/util.js'

  export default {
    name: 'arrow',
    props: {
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
      }
    },
    data () {
      return {
        // 直线样式
        lineStyle: {
          stroke: this.lineColor,
          'stroke-width': 2
        },
        // 头部样式
        polylineStyle: {
          fill: 'rgba(255, 255, 255, 0.01)',
          stroke: this.polylineColor,
          'stroke-width': 2
        },
        // 箭头位置
        polyline: '280,300 300,300 300,280',
        // 文字位置
        fontPath: 'M 30 20 L 260 250 z',
        pathId: util.getUuid('path')
      }
    },
    methods: {
      getWidth: function () { // 获取直线长度
        let one = this.xxTwo - this.xxOne
        let two = this.yyTwo - this.yyOne
        one = Math.pow(one, 2)
        two = Math.pow(two, 2)
        const width = Math.sqrt(one + two)
        return Math.ceil(width)
      },
      computerLinePath: function () { // 计算直线路径
        let str = this.xxTwo - 20 + ','
        str += this.yyTwo + ' '
        str += this.xxTwo + ','
        str += this.yyTwo + ' '
        str += this.xxTwo + ','
        str += this.xxTwo - 20 + ' '
        this.polyline = str
      },
      computerFontPath: function () {  // 计算文字路径
        let str = ' M '
        str += this.xxOne + 30 + ' '
        str += this.yyOne + 20 + ' '
        str += ' L '
        str += this.xxTwo + 30 + ' '
        str += this.yyTwo + 20 + ' '
        this.fontPath = str
      }
    },
    mounted: function () {
      // 计算直线路径
      this.computerLinePath()
      // 计算文字路径
      this.computerFontPath()
    }
  }
</script>
<style scoped>
  .circle-word {
    position: absolute;
    width: 400px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .textCircle{
    font-size:20px;
    letter-spacing:4px;
  }
</style>

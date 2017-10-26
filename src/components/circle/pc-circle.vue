<template>
  <el-card :body-style="cardBodyStyle" v-bind:style="cardStyleObject">
    <div align="center" v-bind:style="centerStyleObject">
      <div v-bind:style="circleOutStyleObject" class="svgHover">
        <!--<outSvg :width="pcRadii*2" :height="pcRadii*2">-->
          <!--<circle :cx="pcX" :cy="pcY" :r="pcRadii" stroke="black" class="svgHover"-->
                  <!--stroke-width="1" :fill="innerColor" stroke-opacity="0.2"/>-->
        <!--</outSvg>-->
        <div v-bind:style="circleInnerStyleObject" class="svgHover"></div>
      </div>
      <footerFont font="圆" :font-size="fontSize" style="background-color: rgba(250, 250, 250, 0);"></footerFont>
    </div>
  </el-card>
</template>
<script>
  import outSvg from '@/components/common/outSvg'
  import footerFont from '@/components/common/footerFont'

  export default {
    name: 'pc-circle',
    props: {
      left: { // x坐标
        type: Number,
        default: 10
      },
      top: { // y坐标
        type: Number,
        default: 10
      },
      pcWidth: { // 圆宽度
        type: Number,
        default: 20
      },
      pcHeight: { // 圆高度
        type: Number,
        default: 20
      },
      innerColor: { // 圆的颜色
        type: String,
        default: 'red'
      },
      absolute: { // 位置模式
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        cardStyleObject: {  // card位置的样式
          width: this.pcWidth + 10 + 'px',
          height: this.pcHeight + 30 + 'px',
          margin: '5px',
          float: 'left',
          position: this.absolute ? 'absolute' : 'unset',
          top: this.top + 'px',
          left: this.left + 'px',
          'z-index': '50',
          'background-color': 'rgba(243, 243, 235, 0.09)'
        },
        cardBodyStyle: {
          padding: '0px'
        },
        centerStyleObject: { // 使其居中的样式
          'align-content': 'center',
          padding: '2px auto'
        },
        circleOutStyleObject: { // 圆外层样式
          border: '0px dotted black',
          'line-height': '23px',
          'margin-top': '5px',
          'padding-top': '2px',
          'z-index': '100',
          opacity: '1'
        },
        circleInnerStyleObject: { // 圆的内部样式
          width: this.pcWidth + 'px',
          height: this.pcHeight + 'px',
          opacity: '0.2',
          'background-color': this.innerColor,
          'border-radius': '50%',
          '-moz-border-radius': '50%',
          '-webkit-border-radius': '50%'
        },
        fontSize: 5
      }
    },
    components: {
      outSvg,
      footerFont
    }
  }
</script>

<style scoped>
  .el-card {
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.0);
    webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.0);
    border: 0px;
  }
</style>

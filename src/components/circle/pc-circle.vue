<template>
  <el-card :body-style="{ padding: '0px'}" v-bind:style="cardStyleObject">
    <div align="center" v-bind:style="centerStyleObject">
      <div v-bind:style="circleStyleObject">
        <outSvg :width="pcR*2" :height="pcR*2">
          <circle :cx="pcX" :cy="pcY" :r="pcR" stroke="black"
                  stroke-width="1" :fill="innerColor" stroke-opacity="0.2"/>
        </outSvg>
      </div>
      <footerFont font="圆"></footerFont>
    </div>
  </el-card>
</template>
<script>
  import outSvg from '@/components/common/outSvg'
  import footerFont from '@/components/common/footerFont'

  export default {
    name: 'pc-circle',
    props: {
      pcX: { // 圆心的x坐标
        type: Number,
        default: 10
      },
      pcY: { // 圆心的y坐标
        type: Number,
        default: 10
      },
      pcR: { // 圆半径
        type: Number,
        default: 10
      },
      innerColor: { // 圆的颜色
        type: String,
        default: 'red'
      }
    },
    data () {
      return {
        centerStyleObject: { // 使其居中的样式
          'align-content': 'center',
          padding: '2px auto'
        },
        cardStyleObject: {  // card位置的样式
          width: '30px',
          height: '50px',
          margin: '5px',
          float: 'left'
        },
        circleStyleObject: { // 使其居中的样式
          border: '0px dotted black',
          'line-height': '15px',
          'margin-top': '5px',
          'padding-top': '2px'
        }
      }
    },
    components: {
      outSvg,
      footerFont
    }
  }
</script>

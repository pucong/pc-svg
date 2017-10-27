<template>
  <pcOuter :left='left' :top='top' :pc-width='pcWidth' :pc-height='pcHeight' :circle-id='circleId'
           :footer-font='footerFont' input-font='inputFont' :absolute='absolute' :z-index="zIndex"
           :inner-color='innerColor'>
    <innerTriangle :circle-id='circleId'
                 :inner-color='innerColor'
                 :left='left'
                 :top='top'
                 :absolute='absolute'
                 :pc-width='pcWidth'
                 :footer-font='footerFont'
                 :input-font='inputFont'
                 :pc-height='pcHeight'
    ></innerTriangle>
  </pcOuter>
</template>
<script>
  import innerTriangle from '@/components/triangle/innerTriangle'
  import pcOuter from '@/components/common/outer'
  import util from '@/util.js'

  export default {
    name: 'pc-triangle',
    props: {
      zIndex: { // card优先级
        type: Number,
        default: 50
      },
      left: { // x坐标
        type: Number,
        default: 10
      },
      top: { // y坐标
        type: Number,
        default: 10
      },
      pcWidth: { // 宽度
        type: Number,
        default: 40
      },
      pcHeight: { // 高度
        type: Number,
        default: 40
      },
      innerColor: { // 颜色
        type: String,
        default: 'red'
      },
      footerFont: { // 脚部文字
        type: String,
        default: '三角形'
      },
      inputFont: { // 内文字
        type: String,
        default: '内容'
      },
      absolute: { // 位置模式 false为在展示栏 true为在拖动栏
        type: Boolean,
        default: false
      }
    },
    components: {
      pcOuter,
      innerTriangle
    },
    data: function () {
      return {
        circleId: util.getUuid('triangle')
      }
    }
  }
</script>


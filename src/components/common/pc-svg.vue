<template>
  <outer :left='left' :top='top' :pc-width='pcWidth' :pc-height='pcHeight' :card-id='cardId'
           :absolute='absolute' :z-index="zIndex" :inner-color='innerColor' :shw-foot-font='shwFootFont'>
    <innerSvg :card-id='cardId'
                 :inner-color='innerColor'
                 :left='left'
                 :top='top'
                 :type='type'
                 :absolute='absolute'
                 :pc-width='pcWidth'
                 :footer-font='footerFont'
                 :input-font='inputFont'
                 :pc-height='pcHeight'
                 :shw-foot-font='shwFootFont'
                 :shw-inner-font='shwInnerFont'
    ></innerSvg>
  </outer>
</template>
<script>
  import innerSvg from '@/components/common/innerSvg'
  import outer from '@/components/common/outer'
  import util from '@/util.js'

  export default {
    name: 'pc-circle',
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
      footerFont: { // 脚部文字
        type: String,
        default: ''
      },
      inputFont: { // 圆内文字
        type: String,
        default: ''
      },
      absolute: { // 位置模式 false为在展示栏 true为在拖动栏
        type: Boolean,
        default: false
      },
      shwFootFont: { // 显示脚部的文字
        type: Boolean,
        default: false
      },
      shwInnerFont: { // 显示内部的文字
        type: Boolean,
        default: true
      },
      type: { // 图形样式 circle 圆，rect 矩形，star 星形，triangle等腰三角形
        type: String,
        default: 'rect'
      }
    },
    components: {
      outer,
      innerSvg
    },
    data: function () {
      return {
        cardId: util.getUuid('circle')
      }
    }
  }
</script>

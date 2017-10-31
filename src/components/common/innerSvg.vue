<template>
  <div v-bind:style='OutStyleObject'>
    <!--这是图形-->
    <pcCircle   :pc-height='pcHeight' :pc-width='pcWidth' :inner-color='innerColor' v-if="type=='circle'"></pcCircle>
    <pcRect     :pc-height='pcHeight' :pc-width='pcWidth' :inner-color='innerColor' v-if="type=='rect'"></pcRect>
    <pcTriangle :pc-height='pcHeight' :pc-width='pcWidth' :inner-color='innerColor' v-if="type=='triangle'"></pcTriangle>
    <dTriangle  :pc-height='pcHeight' :pc-width='pcWidth' :inner-color='innerColor' v-if="type=='dTriangle'"></dTriangle>
    <lTriangle  :pc-height='pcHeight' :pc-width='pcWidth' :inner-color='innerColor' v-if="type=='lTriangle'"></lTriangle>
    <rTriangle  :pc-height='pcHeight' :pc-width='pcWidth' :inner-color='innerColor' v-if="type=='rTriangle'"></rTriangle>
    <diamond    :pc-height='pcHeight' :pc-width='pcWidth' :inner-color='innerColor' v-if="type=='diamond'"></diamond>
    <!--这是中间的字-->
    <inner-font :pc-height='pcHeight' :cardId='cardId' :input-font="inputFont" :pc-width='pcWidth' :absolute='absolute'></inner-font>
    <!--这是下面的字-->
    <footerFont :font='footerFont' :font-size='fontSize' :pc-width='pcWidth' :absolute='absolute' style='background-color: rgba(250, 250, 250, 0);'></footerFont>
  </div>
</template>
<script>
  import footerFont from '@/components/common/footerFont'
  import innerFont from '@/components/common/innerFont'
  import pcCircle from '@/components/svg/circle'
  import pcRect from '@/components/svg/rect'
  import pcTriangle from '@/components/svg/triangle'
  import dTriangle from '@/components/svg/dTriangle'
  import lTriangle from '@/components/svg/lTriangle'
  import rTriangle from '@/components/svg/rTriangle'
  import diamond from '@/components/svg/diamond'

  export default {
    name: 'inner-svg',
    props: {
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
      absolute: { // 位置模式 false为在展示栏 true为在拖动栏
        type: Boolean,
        default: false
      },
      footerFont: { // 底部文字
        type: String,
        default: '图形'
      },
      inputFont: { // 内文字
        type: String,
        default: ''
      },
      cardId: {  // card id
        type: String,
        default: '2asd123'
      },
      type: {
        type: String,
        default: 'rect'
      }
    },
    components: {
      innerFont,
      pcCircle,
      pcRect,
      pcTriangle,
      dTriangle,
      lTriangle,
      rTriangle,
      diamond,
      footerFont
    },
    data () {
      return {
        OutStyleObject: { // 外层样式
          border: '0px dotted black',
          'margin-top': '5px',
          'padding-top': '2px',
          'z-index': '100',
          opacity: '1'
        },
        InnerSvgStyleObject: { // 内部样式
          width: '0',
          height: '0',
          'border-bottom': this.pcWidth + 'px solid rgba(53, 109, 222, 0.3)',
          'border-left': this.pcHeight / 2 + 'px solid transparent',
          'border-right': this.pcHeight / 2 + 'px solid transparent'
        },
        fontSize: 10, // 所有字体大小
        inputModel: { // 输入框属性
          inputValue: this.inputFont, // 输入的值
          inputRows: 1, // 行数
          showInput: false  // 是否显示输入框，否则显示文字
        }
      }
    },
    methods: {
      inputBlurFunction: function (event) { // 输入框离焦事件
        this.inputModel.showInput = false
        this.inputModel.inputRows = this.inputModel.inputValue.length / 6
      }
    }
  }
</script>

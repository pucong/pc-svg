<template>
    <div v-bind:style='OutStyleObject' class='svgHover'>
      <!--这是图形-->
      <div v-bind:style='InnerSvgStyleObject'></div>
      <!--这是中间的字-->
      <div v-bind:style='InnerFontStyleObject'>
        <span v-bind:style="spanStyleObject" v-if='!inputModel.showInput'>
          {{ inputModel.inputValue }}
        </span>
        <el-input
          size='mini'
          type='textarea'
          placeholder='请输入'
          v-if='inputModel.showInput'
          v-bind:style='inputStyleObject'
          autofocus
          autosize
          resize="none"
          @blur='inputBlurFunction'
          v-model='inputModel.inputValue'>
        </el-input>
      </div>
      <!--这是下面的字-->
      <footerFont :font='footerFont' :font-size='fontSize' :pc-width='pcWidth' :absolute='absolute' style='background-color: rgba(250, 250, 250, 0);'></footerFont>
    </div>
</template>
<script>
  import footerFont from '@/components/common/footerFont'
  import $ from 'jquery'

  export default {
    name: 'inner-triangle',
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
        default: '内容'
      },
      circleId: {  // card id
        type: String,
        default: '2asd123'
      }
    },
    components: {
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
        InnerFontStyleObject: { // 内容样式
          'position': 'absolute',
          'top': '6px',
          'left': '3px',
          'align-content': 'center',
          display: 'table-cell',
          'vertical-align': 'middle',
          'text-align': 'center'
        },
        spanStyleObject: { // 内容span样式
          display: 'block',
          width: 'auto',
          'white-space': 'pre-wrap',
          'word-wrap': 'break-word ',
          'overflow': 'hidden',
          'word-break': 'normal'
        },
        inputStyleObject: { // 输入框样式

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
      },
      getBorder: function () { // 根据勾股定理，得出等腰的边
        var border = Math.pow(this.pcWidth / 2, 2) + Math.pow(this.pcHeight / 1, 2)
        border = Math.sqrt(border)
        return border
      },
      setPoints: function (x1, y1, x2, y2, x3, y3) {
        return this.getPoint(x1, y1) + ' ' + this.getPoint(x2, y2) + ' ' + this.getPoint(x3, y3)
      },
      getPoint: function (x1, y1) {
        return x1 + ',' + y1
      }
    },
    computed: {
      // 点阵
      points: {
        get: function () {
          var points = this.setPoints(0, this.pcHeight, this.pcHeight, 0, this.pcWidth / 2, this.pcHeight)
          console.log(points)
          return points
        },
        set: function (val) {
          this.points = val
        }
      }
    },
    mounted: function () {
      var _this = this
      var $this = $('#' + this.circleId)
      // 实现双击显示输入框
      $this.dblclick(function () {
        if (_this.absolute) {
          if (!_this.pcHeight < 50) {
            _this.inputModel.showInput = true
          }
        }
      })
      // 键盘事件消失
      $('body').keydown(function (event) {
        switch (event.keyCode) {
          case 27: // ESC
            _this.inputBlurFunction()
            break
          case 96: // ESC
            _this.inputBlurFunction()
            break
        }
      })
    }
  }
</script>
<style scoped>
  .triangleHover:hover{
    box-shadow: -111px 7px 10px #888888;
  }
</style>

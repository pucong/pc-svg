<template>
  <div>
   <svg width="100%" height="100%" version="1.1"
         xmlns="http://www.w3.org/2000/svg">
        <polygon :points="points"
                 style="fill:#cccccc;
                  stroke:#000000;stroke-width:1"
        />
    </svg>
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
        InnerStyleObject: { // 内部样式
          width: '0',
          height: '0',
          'border-bottom': this.pcWidth + 'px solid ' + this.innerColor,
          'border-left': this.getBorder() + 'px solid transparent',
          'border-right': this.pcHeight + 'px solid transparent'
        },
        inputStyleObject: { // 输入框样式
          width: this.pcWidth - 5 + 'px',
          display: 'block',
          'white-space': 'pre-wrap',
          'word-wrap': 'break-word ',
          'overflow': 'hidden',
          'word-break': 'normal'
        },
        spanStyleObject: { // 内容span样式
          display: 'block',
          width: this.pcWidth - 5 + 'px',
          'white-space': 'pre-wrap',
          'word-wrap': 'break-word ',
          'overflow': 'hidden',
          'word-break': 'normal'
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

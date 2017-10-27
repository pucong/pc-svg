<template>
    <div>
      <div v-bind:style='circleOutStyleObject' class='svgHover'>
        <div v-bind:style='circleInnerStyleObject' class='svgHover'>
          <el-input
            size='mini'
            type='textarea'
            placeholder='请输入内容'
            v-if='inputModel.showInput'
            v-bind:style='inputStyleObject'
            autofocus
            autosize
            resize="none"
            @blur='inputBlurFunction'
            v-model='inputModel.inputValue'>
          </el-input>
          <span v-if='!inputModel.showInput' v-bind:style='spanStyleObject'> {{ inputModel.inputValue }} </span>
        </div>
      </div>
      <footerFont :font='footerFont' :font-size='fontSize' :pc-width='pcWidth'  :absolute='absolute' style='background-color: rgba(250, 250, 250, 0);'></footerFont>
    </div>
</template>
<script>
  import footerFont from '@/components/common/footerFont'
  import $ from 'jquery'

  export default {
    name: 'inner-circle',
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
        default: 40
      },
      pcHeight: { // 圆高度
        type: Number,
        default: 40
      },
      innerColor: { // 圆的颜色
        type: String,
        default: 'red'
      },
      absolute: { // 位置模式 false为在展示栏 true为在拖动栏
        type: Boolean,
        default: false
      },
      footerFont: { // 底部文字
        type: String,
        default: '圆'
      },
      inputFont: { // 圆内文字
        type: String,
        default: '内容'
      },
      circleId: {  // 圆card id
        type: String,
        default: '2asd123'
      }
    },
    components: {
      footerFont
    },
    data () {
      return {
        circleOutStyleObject: { // 圆外层样式
          border: '0px dotted black',
          'margin-top': '5px',
          'padding-top': '2px',
          'z-index': '100',
          opacity: '1'
        },
        circleInnerStyleObject: { // 圆的内部样式
          width: this.pcWidth + 'px',
          height: this.pcHeight + 'px',
          'background-color': this.innerColor,
          'align-content': 'center',
          'border-radius': '50%',
          '-moz-border-radius': '50%',
          '-webkit-border-radius': '50%',
          display: 'table-cell',
          'vertical-align': 'middle',
          'text-align': 'center'
        },
        inputStyleObject: { // 输入框样式
          width: this.pcWidth - 5 + 'px'
        },
        spanStyleObject: { // 内容span样式
          display: 'block',
          width: 'auto',
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
      // 实现单机输入框消失
//      $('div[id != ' + this.circleId + ']').click(function () {
//        if (_this.absolute) {
//          if (_this.pcHeight < 50 || !_this.inputModel.showInput) {
//            return false
//          }
//          console.log(this)
//          _this.inputModel.showInput = false
//        }
//      })
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

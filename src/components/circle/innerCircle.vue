<template>
    <div>
      <div v-bind:style='circleOutStyleObject' class='svgHover'>
        <div v-bind:style='circleInnerStyleObject' class='svgHover'>
          <el-input
            size='mini'
            type='textarea'
            :rows='inputModel.inputRows'
            placeholder='请输入内容'
            v-if='inputModel.showInput'
            v-bind:style='inputStyleObject'
            autofocus
            @blur='inputBlurFunction'
            v-model='inputModel.inputValue'>
          </el-input>
          <span v-if='!inputModel.showInput'> {{ inputModel.inputValue }} </span>
        </div>
      </div>
      <footerFont font='圆' :font-size='fontSize' :pc-width='pcWidth'  :absolute='absolute' style='background-color: rgba(250, 250, 250, 0);'></footerFont>
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
          'line-height': this.pcHeight + 'px',
          'border-radius': '50%',
          '-moz-border-radius': '50%',
          '-webkit-border-radius': '50%'
        },
        inputStyleObject: { // 输入框样式
          width: this.pcWidth - 5 + 'px'
        },
        fontSize: 10, // 所有字体大小
        inputModel: { // 输入框属性
          inputValue: '1231', // 输入的值
          inputRows: 1, // 行数
          showInput: false  // 是否显示输入框，否则显示文字
        }
      }
    },
    methods: {
      inputBlurFunction: function (event) { // 输入框离焦事件
        this.inputModel.showInput = false
        this.circleInnerStyleObject['line-height'] = this.pcHeight + 'px'
      }
    },
    mounted: function () {
      var _this = this
      var $this = $('#' + this.circleId)
      // 实现双击显示输入框
      $this.find('span').dblclick(function () {
        if (_this.absolute) {
          if (_this.pcHeight < 50) {
            return false
          }
          _this.inputModel.showInput = true
          let alignHeight = _this.pcHeight - _this.inputModel.inputRows * 30
          if (alignHeight < 0) {
            alignHeight = 0
          }
          _this.circleInnerStyleObject['line-height'] = alignHeight + 'px'
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

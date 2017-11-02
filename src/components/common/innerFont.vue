<template>
    <!--这是中间的字-->
    <div v-bind:style='InnerFontStyleObject' v-if="shwInnerFont">
      <span v-bind:style='spanStyleObject' v-if='!inputModel.showInput'>
        {{inputModel.inputValue }}
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
</template>
<script>
  import $ from 'jquery'

  export default {
    name: 'inner-triangle',
    props: {
      pcWidth: { // 宽度
        type: Number,
        default: 40
      },
      pcHeight: { // 高度
        type: Number,
        default: 40
      },
      absolute: { // 位置模式 false为在展示栏 true为在拖动栏
        type: Boolean,
        default: false
      },
      shwInnerFont: { // 是否显示内部文字
        type: Boolean,
        default: true
      },
      inputFont: {  // 输入的值
        type: String,
        default: ''
      },
      cardId: {  // card id
        type: String,
        default: '2asd123'
      }
    },
    data () {
      return {
        InnerFontStyleObject: { // 内容样式
          'position': 'relative',
          left: '-5px',
          width: this.pcWidth + 'px',
          height: this.pcHeight + 'px',
          'align-content': 'center',
          'vertical-align': 'middle',
          'text-align': 'center',
          'line-height': '20px',
          'display': 'table-cell'
        },
        inputStyleObject: { // 输入框样式
          width: this.pcWidth - 5 + 'px'
        },
        spanStyleObject: { // 内容span样式
          display: 'block',
//          width: this.pcWidth + 'px',
//          height: this.pcHeight + 'px',
          'white-space': 'pre-wrap',
          'word-wrap': 'break-word ',
//          'overflow': 'hidden',
          'word-break': 'normal',
          width: this.pcWidth - 5 + 'px'
        },
        fontSize: 10, // 所有字体大小
        inputModel: { // 输入框属性
          inputValue: this.inputFont, // 输入的值
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
      var $this = $('#' + this.cardId)
      // 实现双击显示输入框
      if (this.inputFont !== '') {
        $this.dblclick(function () {
          if (_this.absolute) {
            if (!_this.pcHeight < 50) {
              _this.inputModel.showInput = true
            }
          }
        })
      }
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


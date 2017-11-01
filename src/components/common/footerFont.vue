<template>
    <div v-bind:style="fontSizeObj" :id="footerId" v-if="shwFootFont">
      <el-input
        size="mini"
        type="textarea"
        placeholder="请输入内容"
        v-if="inputModel.showInput"
        v-bind:style="inputStyleObject"
        autofocus
        autosize
        resize="none"
        @blur="inputBlurFunction"
        v-model="inputModel.inputValue">
      </el-input>
      <span v-bind:style='spanStyleObject' v-if="!inputModel.showInput">{{ inputModel.inputValue }}</span>
    </div>
</template>
<script>
  import util from '@/util.js'
  import $ from 'jquery'

  export default {
    name: 'pcFooterFont',
    props: {
      font: { // 文字
        type: String,
        default: ''
      },
      pcWidth: { // 圆宽度
        type: Number,
        default: 40
      },
      absolute: { // 是否是在右侧显示
        type: Boolean,
        default: false
      },
      shwFootFont: { // 是否显示脚部的文字
        type: Boolean,
        default: false
      },
      fontSize: { // 文字大小
        type: Number,
        default: 5
      }
    },
    data () {
      return {
        fontSizeObj: {
          'font-size': this.fontSize + 'px',
          'line-height': '20px'
        },
        inputStyleObject: { // 输入框样式
          width: this.pcWidth - 5 + 'px'
        },
        spanStyleObject: { // span样式
          display: 'block',
          width: this.pcWidth + 'px',
          height: this.pcHeight + 'px',
          'white-space': 'pre-wrap',
          'word-wrap': 'break-word ',
          'overflow': 'hidden',
          'word-break': 'normal'
        },
        footerId: util.getUuid('footer'),
        inputModel: {
          inputRows: 1,
          inputValue: this.absolute ? this.font : '',
          showInput: false
        }
      }
    },
    methods: {
      inputBlurFunction: function (event) { // 输入框离焦事件
        this.inputModel.showInput = false
        if (this.inputModel.inputValue === '') {
          this.inputModel.inputValue = '默认值'
        }
      }
    },
    mounted: function () {
      var _this = this
      var $this = $('#' + this.footerId)
      // 实现双击显示输入框
      if (this.font !== '') {
        $this.click(function () {
          if (_this.absolute) {
            _this.inputModel.showInput = true
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

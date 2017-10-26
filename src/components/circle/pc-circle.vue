<template>
  <el-card :body-style="cardBodyStyle" v-bind:style="cardStyleObject" :id="circleId">
    <div align="center" v-bind:style="centerStyleObject">
      <div v-bind:style="circleOutStyleObject" class="svgHover" :id="circleId">
        <div v-bind:style="circleInnerStyleObject" class="svgHover">
          <el-input
            size="mini"
            type="textarea"
            :rows="inputModel.inputRows"
            placeholder="请输入内容"
            autofocus
            v-if="inputModel.showInput"
            v-bind:style="inputStyleObject"
            @blur="inputBlurFunction"
            v-model="inputModel.inputValue">
          </el-input>
          <span v-if="!inputModel.showInput"> {{ inputModel.inputValue }} </span>
        </div>
      </div>
      <footerFont font="圆" :font-size="fontSize" style="background-color: rgba(250, 250, 250, 0);"></footerFont>
    </div>
  </el-card>
</template>
<script>
  import outSvg from '@/components/common/outSvg'
  import footerFont from '@/components/common/footerFont'
  import $ from 'jquery'

  export default {
    name: 'pc-circle',
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
      }
    },
    data () {
      return {
        cardStyleObject: {  // card位置的样式
          width: this.pcWidth + 10 + 'px',
          height: this.pcHeight + 30 + 'px',
          margin: '5px',
          float: 'left',
          position: this.absolute ? 'absolute' : 'unset',
          top: this.top + 'px',
          left: this.left + 'px',
          'z-index': '50',
          'background-color': 'rgba(243, 243, 235, 0.09)'
        },
        cardBodyStyle: {
          padding: '0px'
        },
        centerStyleObject: { // 使其居中的样式
          'align-content': 'center',
          padding: '2px auto'
        },
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
        dialogModel: {  // 拖动数据
          _x: 1,
          _y: 1,
          _move: false
        },
        fontSize: 10, // 所有字体大小
        circleId: this.getUuid('circle'),
        inputModel: { // 输入框属性
          inputValue: '1231', // 输入的值
//          inputRows: this.pcWidth / this.inputModel.inputValue.size * 5, // 行数
          inputRows: 1, // 行数
          showInput: false  // 是否显示输入框，否则显示文字
        }
      }
    },
    components: {
      outSvg,
      footerFont
    },
    methods: {
      // 生成唯一id
      getUuid: function (str) {
        return str + this.guid()
      },
      guid: function () {
        return this.getCode() + '_' + this.getCode() + '_' + this.getCode()
      },
      getCode: function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
      },
      // 获取当前位置
      getPosition: function () {
        return {
          top: this.cardStyleObject.top,
          left: this.cardStyleObject.left
        }
      },
      setPosition: function (opt) {
        this.cardStyleObject.top = opt.top + 'px'
        this.cardStyleObject.left = opt.left + 'px'
      },
      inputBlurFunction: function (event) { // 输入框离焦事件
        this.inputModel.showInput = false
        this.circleInnerStyleObject['line-height'] = this.pcHeight + 'px'
      }
    },
    mounted: function () {
      var _this = this
      var $this = $('#' + this.circleId)
      var model = this.dialogModel
      // 实现拖动效果
      $this.mousedown(function (e) {
        model._move = true
        model._x = e.pageX - parseInt(_this.getPosition().left)
        model._y = e.pageY - parseInt(_this.getPosition().top)
      })
      $(document).mousemove(function (e) {
        if (model._move) {
          // 移动时根据鼠标位置计算控件左上角的绝对位置
          var x = e.pageX - model._x
          var y = e.pageY - model._y
          _this.setPosition({top: y, left: x})
        }
      }).mouseup(function () {
        model._move = false
      })
      // 实现双击显示输入框
      $this.dblclick(function () {
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
    }
  }
</script>

<style scoped>
  .el-card {
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.0);
    webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.0);
    border: 0px;
  }
</style>

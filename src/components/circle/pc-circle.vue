<template>
  <el-card :body-style="cardBodyStyle" v-bind:style="cardStyleObject" :id="circleId">
    <div align="center" v-bind:style="centerStyleObject">
      <innerCircle :circle-id="circleId"
                   :inner-color="innerColor"
                   :left="left"
                   :top="top"
                   :absolute="absolute"
                   :pc-width="pcWidth"
                   :pc-height="pcHeight"
      ></innerCircle>
    </div>
  </el-card>
</template>
<script>
  import innerCircle from '@/components/circle/innerCircle'
  import $ from 'jquery'
  import util from '@/util.js'

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
          height: this.pcHeight + 60 + 'px',
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
        dialogModel: {  // 拖动数据
          _x: 1,
          _y: 1,
          _move: false
        },
        circleId: util.getUuid('circle')
      }
    },
    components: {
      innerCircle
    },
    methods: {
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
          if (x < 0) {
            x = 0
          }
          if (y < 0) {
            y = 0
          }
          _this.setPosition({top: y, left: x})
        }
      }).mouseup(function () {
        model._move = false
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

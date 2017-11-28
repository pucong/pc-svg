<template>
  <el-card :body-style="cardBodyStyle" v-bind:style="cardStyleObject" :id="cardId" class="svgHover">
    <div align="center" v-bind:style="centerStyleObject">
      <slot></slot>
    </div>
  </el-card>
</template>
<script>
  import $ from 'jquery'
  import util from '@/util.js'

  export default {
    name: 'pc-outer',
    props: {
      zIndex: { // 浮现程度
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
      cardId: { // card Id
        type: String,
        default: 'asdasd12'
      },
      position: { // 位置模式 relative为在展示栏 absolute为在拖动栏、点击出现图标
        type: String,
        default: 'relative'
      },
      svgType: { // 图形的类型 1单击出现的图形 2左侧显示的图形 3右侧显示的图形
        type: Number,
        default: 3
      },
      showClickSvg: { // 是否显示点击出现的图形
        type: Boolean,
        default: false
      },
      shwFootFont: { // 是否显示脚部文字
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        cardStyleObject: {  // card位置的样式
          width: this.svgType === 3 ? this.pcWidth + 30 + 'px' : this.pcWidth + 10 + 'px',
          height: this.shwFootFont ? this.pcHeight + 60 + 'px' : this.pcHeight + 10 + 'px',
          float: 'left',
          'margin-left': '2px',
          position: this.position,
          top: this.top + 'px',
          left: this.left + 'px',
          'z-index': this.zIndex,
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
        }
      }
    },
    methods: {
      // 获取当前位置
      getPosition () {
        return {
          top: this.cardStyleObject.top,
          left: this.cardStyleObject.left
        }
      },
      setPosition (opt) {
        this.cardStyleObject.top = opt.top + 'px'
        this.cardStyleObject.left = opt.left + 'px'
      }
    },
    mounted: function () {
      var _this = this
      var $this = $('#' + this.cardId)
      var model = this.dialogModel
      // 实现拖动效果
      $this.mousedown(function (e) {
        if (_this.svgType === 3) {
          model._move = true
          _this.$emit('typeThreeSvgMove') // 触发移动事件
        }
        var _x = e.pageX - parseInt(_this.getPosition().left)
        var _y = e.pageY - parseInt(_this.getPosition().top)
        _x = _x / _this.$store.getters['pcSvgStore/GET_ZOOM_RATE']
        _y = _y / _this.$store.getters['pcSvgStore/GET_ZOOM_RATE']
        model._x = _x
        model._y = _y
        // 如果是点击出现的图形，则使其消失
        _this.$emit('svgClick', this.type) // 触发点击图形消失事件
      })
      $(document).mousemove(function (e) {
        util.setMousePosition({xx: e.pageX, yy: e.pageY})
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
          x = x / _this.$store.getters['pcSvgStore/GET_ZOOM_RATE']
          y = y / _this.$store.getters['pcSvgStore/GET_ZOOM_RATE']
          _this.setPosition({top: y, left: x})
        }
      }).mouseup(function () {
        model._move = false
      })
      const pcSvgMainContainerOpt = this.$store.getters['pcSvgStore/GET_PCSVG_MAIN_CONTAINER_OPT']
      // 实现点击图形，跟随鼠标
      $('.pcSvgMainContainer').mousemove(e => {
        if (_this.showClickSvg) {
          if (_this.svgType === 1) {
            var xx = e.originalEvent.x || e.originalEvent.layerX || 0
            var yy = e.originalEvent.y || e.originalEvent.layerY || 0
            xx = parseInt(xx) - parseInt(pcSvgMainContainerOpt.left) - parseInt(_this.pcWidth) / 2
            yy = parseInt(yy) - parseInt(pcSvgMainContainerOpt.top) - parseInt(_this.pcHeight) / 2
            if (xx < 0) {
              xx = 0
            }
            if (yy < 0) {
              yy = 0
            }
            _this.setPosition({top: yy, left: xx})
          }
        }
      })
      // 实现hover
      $this.hover(function (e) {
        // 显示动态效果
        $this.addClass('animated tada')
        // 触发hover事件
        _this.$emit('outerHover', e)
      }, function (e) {
        // 去除动态效果
        $this.removeClass('animated tada')
        // 触发取消hover事件
        _this.$emit('outerHoverDis', e)
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

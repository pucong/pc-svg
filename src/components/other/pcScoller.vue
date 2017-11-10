<template>
  <div :id="pcMainSvgClassId" style="width: 100%;height: 100%;">
    <slot></slot>
  </div>
</template>
<script>
  import util from '@/util.js'
  import $ from 'jquery'

  export default {
    name: 'pcScroller',
    data: function () {
      return {
        pcMainSvgClassId: util.getUuid('pcScroller'),
        whetherCount: true
      }
    },
    methods: {
      addScrollerEvent: function (obj, fn) {
        if (obj.addEventListener) {
          // IE9, Chrome, Safari, Opera
          obj.addEventListener('mousewheel', fn, false)
          // Firefox
          obj.addEventListener('DOMMouseScroll', fn, false)
        } else { // IE 6/7/8
          obj.attachEvent('onmousewheel', fn)
        }
      },
      onMouseWheel: function (e) {
//        const classObj = document.getElementById(this.pcMainSvgClassId)
        var ev = window.event || e // old IE support
        var down = true // 定义一个标志，当滚轮向下滚时，执行一些操作
        down = ev.wheelDelta ? ev.wheelDelta < 0 : ev.detail > 0
        // 触发事件 true为向下 false为向上
        if (this.whetherCount) {
          this.$emit('pcScroller', down)
        }
        if (ev.preventDefault) { /* FF 和 Chrome */
          ev.preventDefault() // 阻止默认事件
        }
        return false
      }
    },
    mounted: function () {
      var _this = this
      const classObj = document.getElementById(this.pcMainSvgClassId)
      this.addScrollerEvent(classObj, this.onMouseWheel) // 添加滚动事件
      // 按住Ctrl设置为不能放大缩小
      $('body').keydown(function (event) {
        switch (event.keyCode) {
          case 17: // ctrl
            _this.whetherCount = false
            break
        }
      })
      $('body').keyup(function (event) {
        switch (event.keyCode) {
          case 17: // ctrl
            _this.whetherCount = true
            break
        }
      })
    }
  }
</script>

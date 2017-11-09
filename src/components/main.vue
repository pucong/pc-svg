<template>
  <div v-bind:style="pcMainSvgClass" class="pcMainSvgClass">
    <pcRelation type="arrow" :xx-one="100" :yy-one="100" :pc-width="500" :pc-height="500" :xx-two="300" :yy-two="300"
                inner-color="rgba(53, 109, 222, 0.3)" :arrow-type="2" :card-id="1234123"></pcRelation>

    <pcSvg v-for="(svg, index) in svgList" :key="svg.cardId"
           :type="svg.type"
           :card-id="svg.cardId"
           :inner-color="svg.innerColor"
           :left="svg.left"
           :top="svg.top"
           :pc-width="svg.pcWidth"
           :pc-height="svg.pcHeight"
           :shw-foot-font="svg.shwFootFont"
           :footer-font="svg.footerFont"
           :input-font="svg.inputFont"
           :options="svg.options"
           :position="svg.position">
    </pcSvg>
  </div>
</template>
<script>
  import pcSvg from '@/components/common/pc-svg'
  import pcRelation from '@/components/common/pc-relation'

  export default {
    name: 'main',
    props: {
      svgList: { // 是否显示点击出现的图形
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data: function () {
      return {
        pcMainSvgClass: {
          transform: 'scale(1)'
        }
      }
    },
    components: {
      pcRelation,
      pcSvg
    },
    methods: {
      addEvent: function (obj, xEvent, fn) {
//        if (obj.attachEvent) {
//          obj.attachEvent('on' + xEvent, fn)
//        } else {
//          obj.addEventListener(xEvent, fn, false)
//        }
        window.addEventListener('scroll', fn)
        console.log(fn)
      },
      onMouseWheel: function (e) {
        console.log(e)
        const classObj = document.getElementsByClassName('pcMainSvgClass')
        var ev = ev || window.event
        var down = true // 定义一个标志，当滚轮向下滚时，执行一些操作
        down = ev.wheelDelta ? ev.wheelDelta < 0 : ev.detail > 0
        if (down) {
          classObj.style.height = classObj.offsetHeight + 10 + 'px'
        } else {
          classObj.style.height = classObj.offsetHeight - 10 + 'px'
        }
        if (ev.preventDefault) { /* FF 和 Chrome */
          ev.preventDefault() // 阻止默认事件
        }
        return false
      }
    },
    mounted: function () {
      const classObj = document.getElementsByClassName('pcMainSvgClass')
      this.addEvent(classObj, 'mousewheel', this.onMouseWheel) // IE GOOGLE
      this.addEvent(classObj, 'DOMMouseScroll', this.onMouseWheel) // FF
    }
  }
</script>
<style scoped>
  .pcMainSvgClass {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: url('../assets/bg.png') #fff;
  }
</style>

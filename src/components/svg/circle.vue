<!--这是圆形-->
<template>
  <div v-bind:style='circleInnerStyleObject'>
    <svg width="100%" height="100%" version="1.1"
         xmlns="http://www.w3.org/2000/svg">
      <circle :cx="pcWidth / 2" :cy="pcHeight / 2" :r="r" stroke="black"
              stroke-width="1" :fill="innerColor"/>
    </svg>
  </div>
</template>
<script>
  export default {
    name: 'circle',
    props: {
      pcWidth: { // 圆宽度
        type: Number,
        default: 40
      },
      pcHeight: { // 圆高度
        type: Number,
        default: 40
      },
      innerColor: { // 内部颜色
        type: String,
        default: ''
      }
    },
    data () {
      return {
        circleInnerStyleObject: { // 圆的内部样式
          position: 'absolute'
        },
        r: this.pcHeight > 20 ? (this.pcHeight - 20) / 2 : (this.pcHeight - 5) / 2
      }
    }
  }
</script>

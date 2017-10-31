<!--这是圆形-->
<template>
    <div v-bind:style='circleInnerStyleObject'>

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
          position: 'absolute',
//          'position': 'relative',

          width: this.pcWidth + 'px',
          height: this.pcHeight + 'px',
          'background-color': this.innerColor,
          'border-radius': '50%',
          '-moz-border-radius': '50%',
          '-webkit-border-radius': '50%'
        }
      }
    }
  }
</script>

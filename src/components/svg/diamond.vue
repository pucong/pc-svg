<!--这是菱形-->
<template>
    <div v-bind:style='innerStyleObject'>

    </div>
</template>
<script>
  export default {
    name: 'diamond',
    props: {
      pcWidth: { // 宽度
        type: Number,
        default: 40
      },
      pcHeight: { // 高度
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
        innerStyleObject: { // 内部样式
          position: 'absolute',
          width: this.pcWidth + 'px',
          height: this.pcHeight + 'px',
          'background-color': this.innerColor,
          /* Rotate */
          '-webkit-transform': 'rotate(-45deg)',
          '-moz-transform': 'rotate(-45deg)',
          '-ms-transform': 'rotate(-45deg)',
          '-o-transform': 'rotate(-45deg)',
          'transform': 'rotate(-45deg)',
          /* Rotate Origin */
          '-webkit-transform-origin': '0 100%',
          '-moz-transform-origin': '0 100%',
          '-ms-transform-origin': '0 100%',
          '-o-transform-origin': '0 100%',
          'transform-origin': '0 100%',
          'margin': '60px 0 10px 310px'
        }
      }
    }
  }
</script>

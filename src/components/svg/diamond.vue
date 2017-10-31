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
          width: this.getLeft() + 'px',
          height: this.getLeft() + 'px',
          'background-color': this.innerColor,
          /* Rotate */
          '-webkit-transform': 'rotate(-45deg)',
          '-moz-transform': 'rotate(-45deg)',
          '-ms-transform': 'rotate(-45deg)',
          '-o-transform': 'rotate(-45deg)',
          'transform': 'rotate(-45deg)',
          /* Rotate Origin */
          '-webkit-transform-origin': '75% 20%',
          '-moz-transform-origin': '75% 20%',
          '-ms-transform-origin': '75% 20%',
          '-o-transform-origin': '75% 20%',
          'transform-origin': '75% 20%'
        }
      }
    },
    methods: {
        // 计算菱形的边长
      getLeft: function () {
        var height = this.pcHeight / 2
        var width = this.pcWidth / 2
        // 根据勾股定理，计算边长
        var right = Math.pow(height, 2) + Math.pow(width, 2)
        right = Math.sqrt(right)
        return Math.ceil(right)
      }
    }
  }
</script>

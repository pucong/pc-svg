<!--这是平行四边形-->
<template>
    <div v-bind:style='innerStyleObject'>

    </div>
</template>
<script>
  export default {
    name: 'parallelogram',
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
          left: this.pcWidth / 5 + 'px',
          width: this.pcWidth * 2 / 3 + 'px',
          height: this.pcHeight + 'px',
          background: this.innerColor,
          '-moz-transform': 'skew(30deg)',
          '-o-transform': 'skew(30deg)',
          'transform': 'skew(30deg)'
        }
      }
    }
  }
</script>

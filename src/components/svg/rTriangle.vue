<!--这是右三角形-->
<template>
    <div v-bind:style='innerStyleObject'>

    </div>
</template>
<script>
  export default {
    name: 'rTriangle',
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
          width: '0',
          height: '0',
          'border-top': this.pcHeight / 2 + 'px solid transparent',
          'border-left': this.pcWidth + 'px solid rgba(53, 109, 222, 0.3)',
          'border-bottom': this.pcHeight / 2 + 'px solid transparent'
        }
      }
    }
  }
</script>

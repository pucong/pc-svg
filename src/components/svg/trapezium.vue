<!--这是梯形-->
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
          height: '0',
          'border-bottom': this.pcWidth + 'px solid ' + this.innerColor,
          'border-left': this.pcHeight / 2 + 'px solid transparent',
          'border-right': this.pcHeight / 2 + 'px solid transparent'
        }
      }
    }
  }
</script>

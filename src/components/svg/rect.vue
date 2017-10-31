<!--这是矩形-->
<template>
    <div v-bind:style='innerStyleObject'>

    </div>
</template>
<script>
  export default {
    name: 'circle',
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
          'background-color': this.innerColor
        }
      }
    }
  }
</script>

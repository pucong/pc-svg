<template>
  <svg :width="width" :height="height" version="1.1"
       xmlns="http://www.w3.org/2000/svg">
      <slot></slot>
  </svg>
</template>
<script>
  export default {
    name: 'pc-outSvg',
    props: {
      width: { // 宽度
        type: Number,
        default: 10
      },
      height: { // 高度
        type: Number,
        default: 10
      }
    },
    data () {
      return {

      }
    }
  }
</script>

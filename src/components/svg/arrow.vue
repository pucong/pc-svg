<!--这是方向箭头-->
<template>
  <svg width="100%" height="100%" version="1.1"
       xmlns="http://www.w3.org/2000/svg">

    <line x1="0" y1="0" x2="300" y2="300"
          style="stroke:rgb(99,99,99);stroke-width:2"/>

  </svg>
</template>
<script>
  export default {
    name: 'arrow',
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
      }
    }
  }
</script>

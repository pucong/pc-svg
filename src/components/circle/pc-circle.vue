<template>
  <outSvg>
    <circle :cx="pcX" :cy="pcY" :r="pcR" stroke="black"
            stroke-width="2" fill="red"/>
  </outSvg>
</template>
<script>
  import outSvg from '@/components/common/outSvg'

  export default {
    name: 'pc-circle',
    props: {
      pcX: { // 圆心的x坐标
        type: Number,
        default: 10
      },
      pcY: { // 圆心的y坐标
        type: Number,
        default: 10
      },
      pcR: { // 圆半径
        type: Number,
        default: 10
      }
    },
    data () {
      return {

      }
    },
    components: {
      outSvg
    }
  }
</script>

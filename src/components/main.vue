<template>
  <div class="pcMain" style="position: relative">
    <pcCircle inner-color="rgba(53, 109, 222, 0.3)" :left="500" :top="150" :pc-width="100" :pc-height="100" footer-font="1" input-font="1" absolute></pcCircle>
    <pcCircle inner-color="rgba(53, 109, 222, 0.3)" :left="500" :top="100" :pc-width="100" :pc-height="100" absolute></pcCircle>
    <pcCircle inner-color="rgba(53, 109, 222, 0.3)" :left="200" :top="300" absolute></pcCircle>
    <pcRect inner-color="rgba(53, 109, 222, 0.3)" :left="300" :top="100" :pc-width="100" :pc-height="100" absolute></pcRect>
    <triangle inner-color="rgba(53, 109, 222, 0.3)" :left="350" :top="100" :pc-width="100" :pc-height="100" absolute></triangle>
  </div>
</template>
<script>
  import pcCircle from '@/components/circle/pc-circle'
  import pcRect from '@/components/rect/pc-rect'
  import triangle from '@/components/triangle/pc-triangle'

  export default {
    name: 'main',
    data () {
      return {

      }
    },
    components: {
      pcCircle,
      triangle,
      pcRect
    }
  }
</script>

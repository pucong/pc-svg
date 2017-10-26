<template>
  <div class="pcMain" style="position: relative">
    <pcCircle inner-color="rgba(53, 109, 222, 0.3)" :left="500" :top="150" :pc-width="100" :pc-height="100" absolute></pcCircle>
    <pcCircle inner-color="rgba(53, 109, 222, 0.3)" :left="500" :top="100" :pc-width="100" :pc-height="100" absolute></pcCircle>
    <pcCircle inner-color="rgba(53, 109, 222, 0.3)" :left="200" :top="300" absolute></pcCircle>
  </div>
</template>
<script>
  import pcCircle from '@/components/circle/pc-circle'
  export default {
    name: 'main',
    data () {
      return {

      }
    },
    components: {
      pcCircle
    }
  }
</script>

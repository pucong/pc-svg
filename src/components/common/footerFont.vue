<template>
    <div style="font-size: 5px;">
      <span>{{ font }}</span>
    </div>
</template>
<script>
  export default {
    name: 'pcFooterFont',
    props: {
      font: { // 文字
        type: String,
        default: '图形'
      }
    },
    data () {
      return {

      }
    }
  }
</script>

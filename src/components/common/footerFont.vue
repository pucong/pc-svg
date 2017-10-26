<template>
    <div v-bind:style="fontSizeObj">
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
      },
      fontSize: { // 文字大小
        type: Number,
        default: 5
      }
    },
    data () {
      return {
        fontSizeObj: {
          'font-size': this.fontSize + 'px'
        }
      }
    }
  }
</script>

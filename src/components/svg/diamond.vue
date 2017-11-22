<!--这是菱形-->
<template>
  <div v-bind:style='innerStyleObject'>
    <svg width="100%" height="100%" version="1.1"
         xmlns="http://www.w3.org/2000/svg">
      <polygon :points="potions"
               :style="{fill:innerColor, 'stroke-width':1, stroke:'black' }" />
    </svg>
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
          position: 'absolute'
        }
      }
    },
    methods: {
    },
    computed: {
      potions () {
        var str = '0,' + this.pcHeight / 2 + ' '
        str += this.pcWidth * 0.5 + ',0 '
        str += this.pcWidth + ',' + this.pcHeight / 2 + ' '
        str += this.pcWidth * 0.5 + ',' + this.pcHeight + ' '
        str += '0,' + this.pcHeight / 2 + ' '
        return str
      }
    }
  }
</script>

<template>
    <div>
      <div v-bind:style='circleInnerStyleObject'>

      </div>
    </div>
</template>
<script>
  import footerFont from '@/components/common/footerFont'
  import $ from 'jquery'

  export default {
    name: 'circle',
    props: {
      pcWidth: { // 圆宽度
        type: Number,
        default: 40
      },
      pcHeight: { // 圆高度
        type: Number,
        default: 40
      }
    },
    components: {
      footerFont
    },
    data () {
      return {
        circleInnerStyleObject: { // 圆的内部样式
          width: this.pcWidth + 'px',
          height: this.pcHeight + 'px',
          'background-color': this.innerColor,
          'align-content': 'center',
          'border-radius': '50%',
          '-moz-border-radius': '50%',
          '-webkit-border-radius': '50%',
          display: 'table-cell',
          'vertical-align': 'middle',
          'text-align': 'center'
        }
      }
    },
    methods: {
    },
    mounted: function () {
    }
  }
</script>

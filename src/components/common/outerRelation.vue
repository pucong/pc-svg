<template>
  <div v-bind:style="{top: this.top + 'px',left: this.left + 'px' }" class="relationDivClass">

  </div>
</template>
<script>
  export default {
    name: 'outerRelation',
    props: {
      left: { // x坐标
        type: Number,
        default: 10
      },
      top: { // y坐标
        type: Number,
        default: 10
      },
      cardId: {
        type: String,
        default: '123456'
      }
    },
    data () {
      return {
        relationDivClass: {
          'height': '50px',
          'width': '50px',
          'background-color': 'aqua',
          'position': 'absolute'
        }
      }
    },
    methods: {

    }
  }
</script>

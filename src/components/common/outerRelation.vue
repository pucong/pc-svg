<template>
  <div v-bind:style="relationDivClass">

  </div>
</template>
<script>
  export default {
    name: 'outerRelation',
    props: {
      zIndex: { // 浮现程度
        type: Number,
        default: 50
      }
    },
    data () {
      return {
        relationDivClass: {
          'height': '50px',
          'width': '50px',
          'background-color': 'aqua'
        }
      }
    },
    methods: {

    }
  }
</script>

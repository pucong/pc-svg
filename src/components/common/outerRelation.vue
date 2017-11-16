<template>
  <!--<div v-bind:style="relationDivClass">-->
  <div v-bind:style="{'top': this.getTop, 'left': this.getLeft}" class="relationDivClass">

  </div>
</template>
<script>
  export default {
    name: 'outerRelation',
    props: {
      left: { // x坐标
        type: String,
        default: '100'
      },
      top: { // y坐标
        type: String,
        default: '100'
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
          'position': 'absolute',
          'top': this.getTop,
          'left': this.getLeft
        }
      }
    },
    methods: {
      setPostion (top, left) {
        this.relationDivClass['top'] = top
        this.relationDivClass['left'] = left
      }
    },
    computed: {
      getTop () {
        return this.top
      },
      getLeft () {
        return this.left
      }
    }
  }
</script>
<style scoped>
  .relationDivClass {
    height: 50px;
    width: 50px;
    background-color: aqua;
    position: absolute;
  }
</style>

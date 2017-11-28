<template>
  <!--<div v-bind:style="relationDivClass">-->
  <div v-bind:style="{'top': this.getTop, 'left': this.getLeft}" class="relationDivClass"
       v-on:mouseover="relationMouseover($event)" v-on:mouseout="relationMouseOut($event)">
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
      }
    },
    methods: {
      relationMouseover (e) {
        this.$emit('relationMouseover', e)
      },
      relationMouseOut (e) {
        this.$emit('relationMouseOut', e)
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
    z-index: 1000;
    background-color: aqua;
    position: absolute;
  }
</style>

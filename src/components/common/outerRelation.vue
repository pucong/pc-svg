<template>
  <!--<div v-bind:style="relationDivClass">-->
  <div v-bind:style="{'top': this.getTop, 'left': this.getLeft}" class="relationDivClass"
       v-on:mouseover="relationMouseover($event)" v-on:mouseout="relationMouseOut($event)">
`
    <pcRelation type="arrow" :xx-one="0" :yy-one="0" :pc-width="30" :pc-height="30" :xx-two="30" :yy-two="30"
                inner-color="rgba(53, 109, 222, 0.3)" :arrow-type="2"></pcRelation>

  </div>
</template>
<script>
  import pcRelation from '@/components/common/pc-relation'

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
    components: {
      pcRelation
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
    /*background-color: aqua;*/
    position: absolute;
  }
</style>

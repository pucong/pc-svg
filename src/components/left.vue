<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="数据库" name="first" style="padding: 0px;position: relative;">
      <div>优化数据表设计，更直观表现</div>
    </el-collapse-item>
    <el-collapse-item title="图形" name="second" style="padding: 0px;position: relative;">
      <pcSvg type="circle"        inner-color="rgba(53, 109, 222, 0.54)" :svg-type="2" @clickSvg="clickSvg" :card-id="getUuid()"></pcSvg>
      <pcSvg type="rect"          inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" :card-id="getUuid()"></pcSvg>
      <pcSvg type="triangle"      inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" :card-id="getUuid()"></pcSvg>
      <pcSvg type="dTriangle"     inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" :card-id="getUuid()"></pcSvg>
      <pcSvg type="lTriangle"     inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" :card-id="getUuid()"></pcSvg>
      <pcSvg type="rTriangle"     inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" :card-id="getUuid()"></pcSvg>
      <pcSvg type="diamond"       inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" :card-id="getUuid()"></pcSvg>
      <pcSvg type="trapezium"     inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" :card-id="getUuid()"></pcSvg>
      <pcSvg type="parallelogram" inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" :card-id="getUuid()"></pcSvg>
      <br/>
      <br/>
    </el-collapse-item>
    <el-collapse-item title="箭头" name="three" style="padding: 0px;position: relative;">
      <pcSvg type="arrow" inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" :card-id="getUuid()"></pcSvg>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
  import pcSvg from '@/components/common/pc-svg'
  import util from '@/util.js'

  export default {
    name: 'left',
    data () {
      return {
        activeNames: ['first', 'second', 'three']
      }
    },
    components: {
      pcSvg
    },
    methods: {
      clickSvg: function (type) {
        this.$emit('clickSvg', type) // 触发事件
      },
      getUuid: function () {
        return util.getUuid('left-svg')
      }
    }
  }
</script>

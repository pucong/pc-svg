<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item title="数据库" name="first">
      <div>优化数据表设计，更直观表现</div>
    </el-collapse-item>
    <el-collapse-item title="图形" name="second" style="padding：0px;position: relative;">
      <pcSvg type="circle"        inner-color="rgba(53, 109, 222, 0.54)" :svg-type="2" @clickSvg="clickSvg" ></pcSvg>
      <pcSvg type="rect"          inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" ></pcSvg>
      <pcSvg type="triangle"      inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" ></pcSvg>
      <pcSvg type="dTriangle"     inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" ></pcSvg>
      <pcSvg type="lTriangle"     inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" ></pcSvg>
      <pcSvg type="rTriangle"     inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" ></pcSvg>
      <pcSvg type="diamond"       inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" ></pcSvg>
      <pcSvg type="trapezium"     inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" ></pcSvg>
      <pcSvg type="parallelogram" inner-color="rgba(53, 109, 222, 0.3)"  :svg-type="2" @clickSvg="clickSvg" ></pcSvg>
      <br/>
      <br/>
    </el-collapse-item>
    <el-collapse-item title="箭头" name="three">
      <div>简化流程：设计简洁直观的</div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
  import pcSvg from '@/components/common/pc-svg'
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
      }
    }
  }
</script>

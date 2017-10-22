<template>
  <el-container>
    <el-header>
      <pcHeader></pcHeader>
    </el-header>
    <el-container>
      <el-aside width="20%"> <left></left></el-aside>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script>
  import left from '@/components/left'
  import pcHeader from '@/components/header'
export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      left,
      pcHeader
    }
}
</script>

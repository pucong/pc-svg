<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ data }}</h1>
    <h1>{{ $t("message.hello") }}</h1>
    <h2 :attr='$t("message.hello")'>Essential Links</h2>
    <h2>Ecosystem</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: this.$t('login.loginButton')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

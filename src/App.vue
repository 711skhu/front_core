<template>
  <v-app id="app">
    <login-page></login-page>
  </v-app>
</template>
<script>
  import LoginPage from '@/pc/views/login/Login'

  export default {
    components: {
      LoginPage
    }
  }
</script>
<style lang="less">
  #app {
    line-height: 1.4285;
  }
</style>

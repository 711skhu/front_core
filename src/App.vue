<template>
  <v-app id="app">
    <sign-up-page></sign-up-page>
  </v-app>
</template>
<script>
  import SignUpPage from '@/admin/views/signup/SignUpForm'

  export default {
    components: {
      SignUpPage
    }
  }
</script>
<style lang="less">
  #app {
    line-height: 1.4285;
  }
</style>

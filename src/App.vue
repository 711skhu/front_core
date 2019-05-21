<template>
  <div id="app">
    <sign-up-form></sign-up-form>
  </div>
</template>

<script>
  import SignUpForm from '@/components/signup/SignUpForm'

  export default {
    components: {
      SignUpForm
    }
  }
</script>

<style lang="less">
  #app {
    margin-top: 1.5rem;
    line-height: 1.4285;
  }
</style>

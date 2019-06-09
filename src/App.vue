<template>
  <v-app id="app">
    <comment></comment>
<!--    <recomment></recomment>-->
  </v-app>
</template>
<script>
  import Comment from '@/components/comment/Comment'
  // import Recomment from '@/sample/comment/Recomment'
  export default {
    components : {
      Comment
      // Recomment
    }
  }
</script>
<style lang="less">
  #app {
    line-height: 1.4285;
  }
</style>

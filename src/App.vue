<template>
  <v-app id="app">
    <comment-page></comment-page>
  </v-app>
</template>
<script>
  import CommentPage from '@/pc/views/comment/CommentPage'

  export default {
    components : {
      CommentPage
    }
  }
</script>
<style lang="less">
  #app {
    line-height: 1.4285;
  }
</style>

<template>
  <v-app id="app">
    <comment></comment>
  </v-app>
</template>
<script>
  import Comment from '@/components/comment/CommentInput'
  export default {
    components : {
      Comment
    }
  }
</script>
<style lang="less">
  #app {
    line-height: 1.4285;
  }
</style>

<template>
  <v-app id="app">
    <comment-input></comment-input>
  </v-app>
</template>
<script>
  import CommentInput from '@/components/comment/CommentInput'

  export default {
    components : {
      CommentInput
    }
  }
</script>
<style lang="less">
  #app {
    line-height: 1.4285;
  }
</style>

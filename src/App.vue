<template>
  <v-app id="app">
    <lecture-list-page></lecture-list-page>
  </v-app>
</template>

<script>
  import LectureListPage from '@/pc/views/lectureList/LectureListPage'

  export default {
    components: {
      LectureListPage
    }
  }
</script>
<style lang="less">
  #app {
    line-height: 1.4285;
  }
</style>

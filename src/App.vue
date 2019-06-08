<template>
  <v-app id="app">
    <lecture-list-page></lecture-list-page>
  </v-app>
</template>
<script>
 import LectureListPage from '@/admin/views/lectureList/LectureListPage'
 //import LectureAdd from '@/admin/views/lectureList/LectureAdd'

  export default {
   components: {
     //LectureAdd
     LectureListPage
   }
  }
</script>
<style lang="less">
  #app {
    line-height: 1.4285;
  }
</style>

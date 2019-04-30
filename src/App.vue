<template>
  <div id="app">
    <lecture-list></lecture-list>
  </div>
</template>

<script>
  import LectureList from "@/sample/lecture/LectureListSample";

  export default {
    components: {
      LectureList
    }
  }
</script>

<style lang="less">
#app {
  margin-top: 1.5rem;
  line-height: 1.4285;
  height: 100%;
}
</style>

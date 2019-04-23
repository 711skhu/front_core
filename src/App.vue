<template>
  <div id="app">
    <lecture-item></lecture-item>
  </div>
</template>

<script>
  import LectureItem from "@/components/lecture/LectureItem";

  export default {
    components: {
      LectureItem
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

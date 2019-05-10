<template>
  <div id="app">
    <div class="margin-left-150 margin-right-150">
      <lecture-list></lecture-list>
    </div>
  </div>
</template>

<script>
  import LectureList from "@/components/lecture/LectureList";

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
}
</style>

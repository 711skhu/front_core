<template>
  <div id="app">
    <lecture-list></lecture-list>
  </div>
</template>

<script>
import LectureList from '@/components/lecture/LectureList'

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

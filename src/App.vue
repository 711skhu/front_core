<template>
  <div id="app">
    <ProblemType></ProblemType>
  </div>
</template>
<script>
import ProblemType from './sample/lecture_type/problem__type.vue'
export default {
  components : {
    'ProblemType' : ProblemType,
  }
}

</script>

<style lang="less">
#app {
  margin-top: 1.5rem;
  line-height: 1.4285;
}
</style>

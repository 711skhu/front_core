<template>
  <div id="app">
<<<<<<< HEAD
    <ProblemType></ProblemType>
=======
    <lecture-list></lecture-list>
>>>>>>> 51746ab704bc9ae609641329a65cca34bf10a8b1
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

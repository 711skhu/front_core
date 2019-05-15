<template>
  <div id="app">
    <Info></Info>
  </div>
</template>
<script>
import Info from './sample/lecture_type/info.vue'
export default {
  components : {
    'Info' : Info
  }
}
</script>


<style lang="less">
#app {
  margin-top: 1.5rem;
  line-height: 1.4285;
  width : 60%;
}

</style>

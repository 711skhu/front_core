<template>
  <a>
    <h3 class="ui header padding-24">
      <lecture-info v-bind:lecture="lecture"></lecture-info>
    </h3>
  </a>
</template>


<script>
  import LectureInfo from "@/components/lecture/LectureInfo"

  export default {
    components: {
      LectureInfo
    },
    props: ['lecture']
  }

</script>

<style scoped>
  .padding-24 {
    padding: 24px;
  }

</style>

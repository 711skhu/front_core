<template>
  <a>
    <h3 class="ui header padding-24">
      <lecture-info v-bind:lecture="lecture"></lecture-info>
      <lecture-toggle></lecture-toggle>
    </h3>
  </a>
</template>


<script>
  import LectureInfo from "@/components/lecture/LectureInfo"
  import LectureToggle from "@/components/lecture/LectureToggle"

  export default {
    components: {
      LectureInfo,
      LectureToggle
    },
    props: ['lecture']
  }

</script>

<style scoped>
  .padding-24 {
    padding: 24px;
  }

</style>

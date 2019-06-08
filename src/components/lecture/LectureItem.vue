<template>
  <a>
    <h3 class="ui header padding-24">
      <lecture-info v-bind:lecture="lecture"></lecture-info>
      <toggle
        v-if="isProfessor"
        v-bind:lecture="lecture"
      >
      </toggle>
    </h3>
  </a>
</template>


<script>
  import LectureInfo from "@/components/lecture/LectureInfo"
  import Toggle from "@/components/lecture/LectureToggle"
  import axios from 'axios'

  export default {
    components: {
      LectureInfo,
      Toggle
    },
    props: ['lecture'],
    data() {
      return {
        isProfessor: false
      }
    },
    created() {
      axios.get('http://localhost:8080/server/professorInfo.json')
        .then((response) => {
          this.isProfessor = response.data.isProfessor;
          console.log(this.isProfessor);
        })
    }
  }

</script>

<style scoped>
  .padding-24 {
    padding: 24px;
  }
</style>

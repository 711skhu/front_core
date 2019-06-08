<template>
  <v-container fluid>
    <v-switch v-model="switch1"></v-switch>
  </v-container>
</template>

<script>
  export default {
    props: ['lecture'],
    data () {
      return {
        switch1: this.lecture.open
      }
    }
  }
</script>

<style scoped>
  .v-input--selection-controls {
    float: right;
    margin-top: -30px;
  }
  .container {
    padding: 0;
  }
</style>

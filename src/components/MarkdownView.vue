<template>
  <div :class="themeClass" v-html="compiledMarkdown"></div>
</template>

<script>
  import * as marked from "marked";

  export default {
    props: {
      value: {
        type: String,
        required: true
      }
    },
    computed: {
      compiledMarkdown() {
        return marked(this.value, {sanitize: true});
      },
      themeClass() {
      }
    }
  }
</script>

<style scoped>

</style>

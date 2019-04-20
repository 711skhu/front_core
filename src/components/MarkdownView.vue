<template>
  <div>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
  import * as marked from "marked";

  export default {
    props: {
      markdown: {
        type: String,
        required: true
      }
    },
    computed: {
      compiledMarkdown () {
        return marked(this.markdown, { sanitize: true });
      }
    }
  }
</script>

<style scoped>

</style>

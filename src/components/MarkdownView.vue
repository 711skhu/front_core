<template>
  <div class="markdown-body">
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
  import * as marked from "marked";
  import 'github-markdown-css'

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
    }
  }
</script>

<style scoped>

</style>

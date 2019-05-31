<template>
  <div class="code-editor">
    <div class="header">
      <h3> {{ lang.file }} </h3>
    </div>
    <div class="body">
      <ace-editor
        :lang="lang"
        :value="value"
        @input="(newValue) => $emit('input', newValue)"
      />
    </div>
  </div>
</template>

<script>
  import AceEditor from "@/components/problem/AceEditor";

  export default {
    components: {
      AceEditor
    },
    props: {
      lang: {
        type: Object,
        required: true,
        description: '작성된 코드의 언어'
      },
      value: {
        type: String,
        description: 'v-model 을 위한 value'
      }
    },
  }
</script>

<style scoped>
  .code-editor {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .header {
    flex: 0 1 auto;
    margin: 0.8rem 1rem;
  }

  .body {
    flex: 1 1 auto;
    display: flex;
  }
</style>

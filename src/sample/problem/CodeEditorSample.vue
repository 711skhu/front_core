<template>
  <div class="sample">
    <code-editor
      ref="editor"
      :theme="theme"
      :mode="mode"
      :init-code="initCode"
      class="editor"
    >
    </code-editor>
    <button @click="$emit('text', $refs.editor.getCode())">test</button>
    <button @click="$refs.editor.setCode('test')">test2</button>
  </div>
</template>

<script>
  import CodeEditor from "@/components/problem/AceEditor";

  export default {
    components: {
      CodeEditor
    },
    data() {
      return {
        theme: "dracula",
        mode: "javascript",
        initCode: "let test = function () {\n\n}"
      }
    }
  }
</script>

<style scoped>
  .sample {
    width: 500px;
    height: 500px;
  }

  .editor {
    font-size: 14pt;
  }
</style>

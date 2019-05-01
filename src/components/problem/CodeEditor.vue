<template>
  <!-- ace editor 를 사용하기 위한 id 사용 -->
  <div
    id="code-editor"
    class="code-editor"></div>
</template>

<script>
  import * as ace from "ace-builds";
  import "ace-builds/webpack-resolver";

  export default {
    props: {
      theme: {
        type: Object,
        required: true,
        description: "에디터 테마"
      },
      lang: {
        type: Object,
        required: true,
        description: "에디터에 적용될 언어"
      },
      value: {
        description: "v-model 을 위한 prop"
      }
    },
    data() {
      return {
        editor: null
      }
    },
    mounted() {
      // 실제 태그가 생성되어야 editor 적용 가능하기 때문에 mounted 에 작성
      this.editor = ace.edit("code-editor");

      let editor = this.editor;

      this.$_codeEditor_setTheme(this.theme);
      this.$_codeEditor_setMode(this.lang);

      // v-model 을 위한 input 이벤트 발생
      editor.on("change", () => this.$emit("input", editor.getValue()));

      if (this.value) {
        editor.setValue(this.value);
      }
    },
    methods: {
      $_codeEditor_setTheme(theme) { // private 메소드, theme 주소가 있는 메소드
        this.editor.setTheme("ace/theme/" + theme.ace);
      },
      $_codeEditor_setMode(lang) { // private 메소드, mode 주소가 있는 메소드
        this.editor.session.setMode("ace/mode/" + lang.ace);
      }
    },
    watch: {
      theme(newTheme) { // props 로 들어온 테마가 바뀌면 에디터의 테마 변경
        this.$_codeEditor_setTheme(newTheme);
      },
      lang(newMode) { // props 로 들어온 모드가 바뀌면 에디터의 모드 변경
        this.$_codeEditor_setMode(newMode);
      },
      value(newValue) {
        if (this.editor.getValue() !== newValue){
          this.editor.setValue(newValue);
        }
      }
    }
  }
</script>

<style scoped>
  .code-editor {
    width: 100%;
    height: 100%;

    font-size: 1.1rem;
  }
</style>

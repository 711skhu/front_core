<template>
  <!-- ace editor 를 사용하기 위한 id 사용 -->
  <div
    id="code-editor"
    class="code-editor"
  >

  </div>
</template>

<script>
  import * as ace from "ace-builds";
  import "ace-builds/webpack-resolver";

  export default {
    props: {
      theme: { // 에디터 테마
        type: String,
        required: true
      },
      mode: { // 에디터 모드 e.g.) java, javascript ...
        type: String,
        required: true
      },
      initCode: { // 초기에 적혀 있을 코드
        type: String,
        required: false
      }
    },
    data () {
      return {
        editor: null
      }
    },
    mounted () {
      // 실제 태그가 생성되어야 editor 적용 가능하기 때문에 mounted 에 작성
      this.editor = ace.edit("code-editor", {
        theme: this.$_codeEditor_getTheme(this.theme),
        mode: this.$_codeEditor_getMode(this.mode)
      });

      if (this.initCode) {
        this.editor.setValue(this.initCode);
      }
    },
    watch: {
      theme (newTheme) { // props 로 들어온 테마가 바뀌면 에디터의 테마 변경
        this.editor.setTheme(this.$_codeEditor_getTheme(newTheme));
      },
      mode (newMode) { // props 로 들어온 모드가 바뀌면 에디터의 모드 변경
        this.editor.session.setMode(this.$_codeEditor_getMode(newMode));
      }
    },
    methods: {
      getCode () { // 작성된 코드를 return 하는 메소드
        return this.editor.getValue();
      },
      setCode (code) { // 매개변수로 넘어온 코드를 에디터에 적용하는 메소드
        this.editor.setValue(code);
      },
      $_codeEditor_getTheme (theme) { // private 메소드, theme 주소가 있는 메소드
        return "ace/theme/" + theme;
      },
      $_codeEditor_getMode (mode) { // private 메소드, mode 주소가 있는 메소드
        return "ace/mode/" + mode;
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

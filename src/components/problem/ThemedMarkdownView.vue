<template>
  <div :class="$_markdownView_theme">
    <markdown-view
      class="markdown-view"
      :markdown="markdown"
    />
  </div>
</template>

<script>
  import * as Themes from "@/utils/Themes";

  import "@/asserts/problem/markdown-theme-dark.css";
  import "@/asserts/problem/markdown-theme-light.css";

  import MarkdownView from "@/components/MarkdownView";

  export default {
    components: {
      MarkdownView
    },
    props: {
      markdown: {
        type: String,
        required: true
      },
      theme: {
        type: String,
        default: "light",
        required: false,
        validator (value) {
          return Themes.validate(["light", "dark"], value);
        }
      }
    },
    computed: {
      compiledMarkdown () {
        return marked(this.markdown, { sanitize: true });
      },
      $_markdownView_theme() {
        return "markdown-" + this.theme;
      }
    }
  }
</script>

<style scoped>
  .markdown-view {
    word-break: break-all;
    font-size: 1.15rem;
    margin: 0.8em;
  }
</style>

<!-- mixin 으로 받은 MarkdownView 와 동일 -->

<script>
  import "@/asserts/problem/markdown-theme-dark.css";
  import "@/asserts/problem/markdown-theme-light.css";

  import MarkdownView from "@/components/MarkdownView";

  export default {
    mixins: [MarkdownView],
    props: {
      theme: {
        type: Object,
        required: true,
        description: "Theme 객체"
      }
    },
    computed: {
      themeClass() {
        return "markdown-" + this.theme.value;
      }
    }
  }
</script>

<style scoped>

</style>

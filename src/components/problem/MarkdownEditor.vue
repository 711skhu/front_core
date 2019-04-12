<template>
  <div class="editor">
    <sui-tab class="tab">
      <sui-tab-pane class="tab-content tab__pane" title="Write">
        <textarea
          class="tab-content__textarea"
          :value="markdown"
          @input="update"
        >

        </textarea>
      </sui-tab-pane>
      <sui-tab-pane class="tab-content tab__pane" title="Preview">
        <markdown-view
          class="tab-content__markdown-view"
          :theme="theme"
          :markdown="markdown"
        >

        </markdown-view>
      </sui-tab-pane>
    </sui-tab>
  </div>
</template>

<script>
  import * as _ from "lodash";
  import * as Themes from "@/utils/Themes";

  import SuiTabPane from "semantic-ui-vue/dist/commonjs/modules/Tab/TabPane";
  import MarkdownView from "@/components/problem/ThemedMarkdownView";

  export default {
    components: {
      MarkdownView,
      SuiTabPane
    },
    props: {
      value: {
        type: String,
        required: true
      },
      theme: {
        type: String,
        default: "light",
        required: false,
        validator (value) {
          return Themes.validate(["light", "dark"], value)
        }
      }
    },
    data () {
      return {
        markdown: JSON.parse(JSON.stringify(this.value))
      }
    },
    methods: {
      update: _.debounce(function (e) {
        this.markdown = e.target.value;
      }, 300),
      getValue () {
        return this.markdown;
      }
    }
  }
</script>

<style scoped>
  .editor {
    width: 100%;
    height: 100%;
  }
  .tab {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
  }
  .tab-content {
    display: flex !important;
  }
  .tab__pane {
    flex: auto
  }
  .tab-content__textarea {
    width: 100%;
    height: 100%;

    flex: auto;

    padding: 0.5em;

    margin-right: 1em;

    background-color: #f6f6f6;

    border: 1px solid #ccc;
    border-radius: 0.2em;

    font-size: 1.15em;

    resize: none;
  }
  .tab-content__markdown-view {
    width: 100%;
    height: 100%;

    overflow: auto;
  }
</style>

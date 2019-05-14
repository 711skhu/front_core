<template>
  <div class="editor">
    <sui-tab class="tab">
      <sui-tab-pane class="tab-content tab__pane" title="Write">
        <textarea
          class="tab-content__textarea"
          :value="value"
          @input="update"
        />
      </sui-tab-pane>
      <sui-tab-pane class="tab-content tab__pane" title="Preview">
        <problem-view
          class="tab-content__markdown-view"
          :theme="theme"
          :value="value"
        />
      </sui-tab-pane>
    </sui-tab>
  </div>
</template>

<script>
  import * as _ from "lodash";

  import SuiTabPane from "semantic-ui-vue/dist/commonjs/modules/Tab/TabPane";
  import ProblemView from "@/components/problem/ProblemView";

  export default {
    components: {
      ProblemView,
      SuiTabPane
    },
    props: {
      value: {
        type: String
      },
      theme: {
        type: Object,
        required: false
      }
    },
    methods: {
      update: _.debounce(function (e) {
        this.$emit('input', e.target.value);
      }, 300)
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

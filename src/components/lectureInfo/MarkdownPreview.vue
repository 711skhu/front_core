<template>
  <div class="editor">
    <problem-view
      class="tab-content__markdown-view"
      :theme="theme"
      :value="value"
    />
  </div>
</template>

<script>
  import ProblemView from "@/components/problem/ProblemView";

  export default {
    components: {
      ProblemView,
    },
    props: {
      value: {
        type: String
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

  .tab-content__textarea {
    width: 100%;
    height: 100%;

    padding: 0.5em;

    margin-right: 1em;

    background-color: #f6f6f6;

    border: 1px solid #ccc;
    border-radius: 0.2em;

    font-size: 1em;

    resize: none;
  }
  .tab-content__markdown-view {
    width: 100%;
    height: 100%;

    overflow: auto;
  }

</style>

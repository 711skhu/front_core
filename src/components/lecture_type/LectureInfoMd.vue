<template>
  <div class="editor">
      <textarea
          class="tab-content__textarea"
          :value="value"
          @input="update"
        />
  </div>
</template>

<script>
  import * as _ from "lodash";

  export default {

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

</style>

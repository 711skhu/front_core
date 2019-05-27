<template>
  <div class="container">
    <div :is="currentComponent"></div>
    <div v-show="!currentComponent">
      <div class="container--sub">
        <header class="header">
          <b>{{ lectureTitle }}</b>
          <sui-button class="icon" color="purple"
                      v-on:click="clickWrite">&nbsp; Write&nbsp;
          </sui-button>
        </header>
        <div class="content">
          <markdown-preview v-bind:value="value" style="color:#7B1FA2"></markdown-preview>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MarkdownPreview from './MarkdownPreview.vue'
  import LectureInfoEdit from './LectureInfoEdit.vue'

  export default {
    name: 'LectureInfoPreview',

    data() {
      return {
        currentComponent : null,
        lectureTitle: 'Java Programming',
      }
    },

    components: {
      'markdown-preview': MarkdownPreview,
      'lecture-info-edit' : LectureInfoEdit
    },
    methods: {
      clickWrite: function()
      {
        this.currentComponent = 'lecture-info-edit'
      }
    }

  };
</script>

<style lang="css" scoped>

  .icon {
    color: #7B1FA2;
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #F3E5F5;
  }
  .container--sub {
    margin: 10px 30px 10px 30px;
  }

  .header {
    height: 50px;
    color: #7B1FA2;
    font-size: 27px;

  }
  .content {
    display: flex;
    flex: auto;
    height: 100px;
  }
  .icon {
    float: right;
  }
</style>

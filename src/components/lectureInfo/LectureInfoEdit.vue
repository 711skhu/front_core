<template>
<div class="container">
  <div :is="currentComponent"></div>
  <div v-show="!currentComponent">
    <div class="container--sub">
      <header class="header">
        <input v-model="title" placeholder="강좌 제목" class="title--style" >


        <sui-button class="icon" color="grey" floated="right"
                    v-on:click="clickSave">&nbsp; Save  &nbsp;
        </sui-button>
        <sui-button class="icon" color="purple" floated="right"
                    v-on:click="clickPre">&nbsp; Preview  &nbsp;
        </sui-button>
      </header>
      <div class="content">
        <markdown-editor></markdown-editor>
      </div>

    </div>
  </div>
</div>

</template>

<script>
  import MarkdownEditor from './LectureInfoMarkdown.vue'
  import LectureInfoPreview from './LectureInfoPreview'
  import LectureDefaultInfo from './LectureDefaultInfo'

  export default {
    name: 'LectureInfoEdit',

    data() {
      return {
        currentComponent : null
      }
    },

    components: {
      'markdown-editor': MarkdownEditor,
      'lecture-default-info' : LectureDefaultInfo,
      'lecture-info-preview' : LectureInfoPreview
    },

    methods: {
      clickPre: function () {
        this.currentComponent = 'lecture-info-preview'
      },
      clickSave:function() {
        //수정된 내용 저장
      }
    }

  };
</script>

<style lang="css" scoped>
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
  .title--style {
    width : 35%;
    border: 1px solid #ccc;
    border-radius: 0.1em;
  }




</style>

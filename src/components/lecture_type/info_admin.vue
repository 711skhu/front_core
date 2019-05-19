<template>
  <div class="container">
    <div class="container-s">
      <header class="header">
        <b>{{ lectureTitle }}</b>
        <sui-button class="icon" color="purple"
          v-on:click="clickBtn">&nbsp; Edit &nbsp;
        </sui-button>
      </header>
      <div class="content">
        <markdown-editor></markdown-editor>
      </div>
    </div>
  </div>

</template>

<script>
  import MarkdownEditor from './LectureInfoMd.vue'

  export default {
    name : 'LectureInfoForAdmin',

    data () {
      return {
        lectureTitle : 'Java Programming'
      }
    },

    components : {
      'markdown-editor' : MarkdownEditor,

    },

    methods : {
      clickBtn : function() {
        alert('click');
      }
    }

  };
</script>

<style lang="css" scoped>
  .icon {
    float : right;
  }

  .container {
    display : flex;
    flex-direction: column;
    height: 100%;
    background-color : #F3E5F5;
  }

  .header {
    height : 50px;
    color :  #7B1FA2;
    font-size : 27px;
  }

  .content {
    display : flex;
    flex : auto;
    height : 100px;
  }

  .container-s {
    margin : 10px 30px 10px 30px;
  }

</style>

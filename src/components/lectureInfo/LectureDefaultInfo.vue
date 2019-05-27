<template>
  <div class="container">
    <div :is="currentComponent"></div>
    <div v-show="!currentComponent">
      <div class="container--sub">
        <header class="header">
          <b>{{ lectureTitle }}</b>
          <sui-button class="icon" color="purple"
                      v-on:click="clickEdit">&nbsp; Edit &nbsp;
          </sui-button>
        </header>
        <div class="content">
          <markdown-view v-bind:value="message" style="color:#7B1FA2"></markdown-view>
        </div>
      </div>
    </div>
    </div>

</template>

<script>
  import MarkdownView from '../MarkdownView.vue'
  import LectureInfoEdit from './LectureInfoEdit'

  export default {
    name: 'LectureInfo',

    data() {
      return {
        currentComponent : null,
        lectureTitle: 'Java Programming',
        message:
          '##### 자바 언어의 기본 문법과 객체 지향 프로그래밍 개념을 단계별로 정립합니다.'
      }
    },

    components: {
      'markdown-view': MarkdownView,
      'lecture-info-edit' : LectureInfoEdit,
    },
    methods: {
      clickEdit: function()
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

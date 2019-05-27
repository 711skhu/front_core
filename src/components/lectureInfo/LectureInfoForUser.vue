<template>
  <sui-grid class="container">
    <sui-grid-row>
      <sui-grid-column :width="13">
        <docs-wireframe name="paragraph"/>
        <header class="header"> {{ lectureTitle }}</header>
        <markdown-view v-bind:value="message" style="color:#7B1FA2"></markdown-view>
      </sui-grid-column>
      <sui-grid-column :width="3">
        <docs-wireframe name="icon"/>
        <sui-icon v-bind:name="selectedImage" class="icon"/>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>

</template>

<script>
  import MarkdownView from '../MarkdownView.vue'

  export default {
    name: 'LectureInfoForUser',

    data() {
      return {
        lectureTitle: 'Java Programming',
        images: ['massive database icon', 'massive dolly flatbed icon', 'massive tags icon', 'massivecubs icon', 'massive balance scale'],
        selectedImage: '',
        message:
          '##### 자바 언어의 기본 문법과 객체 지향 프로그래밍 개념을 단계별로 정립합니다.'
      }
    },

    components: {
      'markdown-view': MarkdownView
    },

    created() {
      const idx = Math.floor(Math.random() * this.images.length)
      this.selectedImage = this.images[idx]
    }
  };
</script>

<style lang="css" scoped>

  .icon {
    color: #7B1FA2;
  }

  .container {
    background-color: #F3E5F5;
  }

  .header {

    height: 50px;
    color: #7B1FA2;
    font-size: 27px;
    font-weight: bold;
  }

</style>

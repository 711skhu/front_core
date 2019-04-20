<template>

    <sui-container class="infobox" fluid >
      <!--강좌제목-->
      <h1 is="sui-header" v-text="lectureTitle" style="color:black"></h1>
      <!--강좌소개-->
      <div >
        <!--강좌 소개내용-->
        <markdownview v-bind:markdown="message"></markdownview>
        <!--강좌소개 옆 이미지-->
        <i v-bind:class="selectedImage" style="color:black"></i>
      </div>
    </sui-container>

</template>

<script>
  import MarkdownView from '../MarkdownView.vue'

  export default {
    name : 'FluidExample',

    data () {
      return {
        lectureTitle : 'JAVA Programming',
        images : [ 'fas fa-balance-scale fa-10x', 'fas fa-book fa-10x', 'fas fa-atom fa-10x', 'fas fa-coins fa-10x', 'fas fa-dna fa-10x'],
        selectedImage: '',
        message : '#### 자바언어 기초과정입니다'
      }
    },

    components : {
      'markdownview' : MarkdownView
    },

    created() {
      const idx = Math.floor(Math.random() * this.images.length)
      this.selectedImage = this.images[idx]
    }
  };
</script>

<style lang="css" scoped>
  i {
    float : right;

  },

  .infobox {
    padding-right : 60px;
    padding-left : 100px;
  }

</style>

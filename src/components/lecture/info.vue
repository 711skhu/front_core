<template>

    <sui-container class="infobox" fluid >
      <!--강좌제목-->
      <h1 is="sui-header" v-text="lectureTitle" class="title-style"></h1>
      <!--강좌소개-->
      <div >
        <!--md으로 소개내용 삽입예정-->
        <!--강좌소개 옆 이미지-->
        <i v-bind:class="selectedImage" style="color:white"></i>
      </div>
    </sui-container>

</template>

<script>

  export default {
    name : 'FluidExample',
    data () {
      return {
        lectureTitle : 'JAVA Programming',
        images : [ 'fas fa-balance-scale fa-10x', 'fas fa-book fa-10x', 'fas fa-atom fa-10x', 'fas fa-coins fa-10x', 'fas fa-dna fa-10x'],
        selectedImage: ''
      }
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
    background-color : grey;
    padding-right : 60px;
    padding-left : 100px;
  }

  .title-style {
    color : white;
  }




</style>

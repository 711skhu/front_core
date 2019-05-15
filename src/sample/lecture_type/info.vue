<template>
    <sui-grid  divded="vertically" class="bgcolor" >
      <sui-grid-row :columns="2">
        <sui-grid-column>
          <sui-header size="huge" color="purple" class="bgcolor">
            {{ lectureTitle }}
          </sui-header>
        </sui-grid-column>
        <sui-grid-column>
          <docs-wireframe name="paragraph" />
          <sui-button class="icon" basic color="purple" >Edit</sui-button>
        </sui-grid-column>
      </sui-grid-row>
      <sui-grid-row :columns="2">
        <sui-grid-column >
          <docs-wireframe name="paragraph" />
          <markdownview v-bind:markdown="message" ></markdownview>
        </sui-grid-column>
        <sui-grid-column >
          <docs-wireframe name="icon"  />
          <sui-icon v-bind:name="selectedImage" class="icon" />
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
</template>

<script>
  import MarkdownView from '../MarkdownView.vue'

  export default {
    name : 'FluidExample',

    data () {
      return {
        lectureTitle : 'Java Programming',
        images : [ 'massive database icon', 'massive dolly flatbed icon', 'massive tags icon', 'massivecubs icon', 'massive balance scale'],
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

  .icon {
    float : right;
    color : #7B1FA2;
  }

  .bgcolor {
    background-color : #F3E5F5;
  }



</style>

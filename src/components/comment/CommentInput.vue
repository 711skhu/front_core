<template>
  <div class="comment_box">
    <div class="content">
      <textarea
        class="content__textarea"
        maxlength="500"
        v-model="inputComment"
        placeholder="질문을 작성하세요.">
      </textarea>
      <span class="counter">{{ inputComment.length }}/500</span>
    </div>
    <div class="footer">
      <v-btn
        class="button__register"
        color=#0078FF
        @click="addComment">등록
      </v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommentInput",
    data() {
      return {
        inputComment: ''
      }
    },
    methods: {
      addComment() {
        if (this.inputComment !== "") {
          let value = this.inputComment && this.inputComment.trim();
          //value를 서버에 전달
          this.inputClear();
        }
      },
      inputClear() {
        this.inputComment = '';
      }
    }
  }
</script>

<style scoped>
  .comment_box {
    height: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px dashed #D7E2EB;
    border-radius: 3px;
    padding-bottom: 1rem !important;
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .content__textarea {
    height: 100%;
    border: 1.5px solid lightgrey;
    border-radius: 2px;
  }

  textarea {
    font-size: 1.2rem;
    padding: 10px 10px 10px 10px;
  }

  textarea:hover {
    border-color: #0078FF;
  }

  .counter {
    display: flex;
    justify-content: flex-end;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
  }

  .button__register {
    font-weight: bold;
    color: white;
  }
</style>

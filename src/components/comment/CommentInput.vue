<template>
  <div class="container">
    <div class="header">{{ id }}</div>
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
        id: 'dhlgs123',
        inputComment: ''
      }
    },
    methods:{
      addComment() {
      //  코멘트를 입력받아 서버에 전달
      }
    }
  }
</script>

<style scoped>
  .container {
    height:100%;
    display: flex;
    flex-direction: column;
    border: 1px solid darkgrey;
    border-radius: 3px;
  }
  .header {
    font-size: 1.2rem;
    font-weight : bold;
    margin-bottom: 0.4rem;
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
    border-color: grey;
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
    font-weight : bold;
    color : white;
  }
</style>

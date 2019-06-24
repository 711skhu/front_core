<template>
  <div class="container">
    <div
      class="container__upper"
      @click="isRecommentShow = !isRecommentShow"
    >
      <div class="container__left">
        <div v-html="identicon"></div>
      </div>
      <div class="container__right">
        <div class="header">
          {{ comment.content }}
          <span
            v-show="loginId === comment.userName"
            class="header-icon"
            @click="deleteComment"
          >
            <v-icon>more_vert</v-icon>
          </span>
        </div>
        <div class="content">
          <div class="content__item">
            <v-icon small>perm_identity</v-icon>
            {{ comment.userName }}
          </div>
          <div class="content__item">
            <v-icon small>date_range</v-icon>
            {{ comment.date }}
          </div>
          <div class="content__item">
            <v-icon small>comment</v-icon>
            {{ recomments.length }}
          </div>
        </div>
      </div>
    </div>
    <div class="container__lower">
      <div v-show="isRecommentShow">
        <recomment
          v-for="recomment in recomments"
          :recomment="recomment"
        />
        <div class="comment__box">
          <h3>답변 쓰기</h3>
          <comment-input></comment-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Recomment from '@/components/comment/Recomment'
  import CommentInput from '@/components/comment/CommentInput'
  import CommentItem from '@/models/comment/CommentItem'
  import * as jdenticon from "jdenticon";

  export default {
    name: "Comment",
    components: {
      Recomment,
      CommentInput
    },
    data() {
      return {
        inputComment: '',
        isRecommentShow: false,
        loginId: 'hyunee31' //현재 로그인 되어 있는 아이디(가정)
      }
    },
    props: {
      comment: {
        type: CommentItem,
        required: true,
        description: "댓글 항목"
      },
      recomments: {
        type: Array,
        required: true,
        description: "대댓글 항목들"
      }
    },
    computed: {
      identicon: function () {
        return jdenticon.toSvg(this.comment.userName, 65);
      }
    },
    methods: {
      deleteComment() {
        alert("정말 삭제하시겠습니까?");
        //추후 추가 구현 예정
      }
    }
  }
</script>

<style scoped>
  .container__upper {
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }

  .container__left {
    flex: 1 1 auto;
  }

  .container__right {
    flex: 30 30 auto;
    margin-left: 0;
  }

  .header {
    margin-bottom: 0.3rem;
    font-size: medium;
    font-weight: bold;
  }

  .header:hover {
    color: #0078FF;
  }

  .header-icon {
    float: right;
  }

  .content {
    display: flex;
    align-items: center;
  }

  .content__item {
    color: #55565b;
    margin-right: 1.3rem;
  }

  .container__lower {
    display: flex;
    flex-direction: column;
  }

  .comment__box {
    padding-left: 2rem;
    padding-right: 2rem;
  }
</style>

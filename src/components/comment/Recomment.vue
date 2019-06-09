<template>
  <div class="container">
    <div class="comment__box">
      <div class="comment__left">
        <v-icon>subdirectory_arrow_right</v-icon>
      </div>
      <div class="comment__right">
        <div class="comment__info">
          <div class="comment__info__img">
            <div class="comment__info__img-modifier">
              <div v-html="identicon"></div>
            </div>
          </div>
          <div class="comment__info__id">
            <div>
              <h3>{{comment.id}}</h3>
            </div>
            <div class="comment__info-date">{{comment.date}}</div>
          </div>
          <div
            v-show="login_id === comment.id"
            class="comment-icon"
            @click="deleteComment"
          >
            <v-icon>more_vert</v-icon>
          </div>
        </div>
        <div class="comment__content">{{comment.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as jdenticon from "jdenticon";

  export default {
    name: "ReComment",
    props: {
      comment: {
        type: Object,
        required: true,
        description: "대댓글 항목"
      }
    },
    data() {
      return {
        login_id : 'heyharoo123' // 현재 로그인 되어 있는 아이디(가정)
      }
    },
    computed: {
      identicon: function () {
        return jdenticon.toSvg(this.comment.id, 60);
      }
    },
    methods : {
      deleteComment() {
        alert("정말 삭제하시겠습니까?");
      }
    }
  }
</script>

<style scoped>
  .comment__box {
    display: flex;
    border-bottom: 1px solid #B2C0CC;
  }

  .comment__left {
    flex: 0 0 35px;
  }

  .comment__right {
    display: flex;
    flex-direction: column;
    align-items : flex-start;
  }

  .comment__info {
    display: flex;
    align-items : center;
  }

  .comment-icon {
    margin-left : 3rem;
  }

  .comment__info__img {
    flex: 0 0 auto;
    margin-right: 1rem;
  }

  .comment__info__img-modifier {
    margin-left: auto;
    margin-right: auto;
    border-radius: 2px;
  }

  .comment__info__id {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .comment__info-date {
    color: #B2C0CC;
    font-size : medium;
  }

  .comment__content {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }

</style>

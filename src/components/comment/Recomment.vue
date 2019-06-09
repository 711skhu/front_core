<template>
  <div class="container">
    <div
      class="comment__box"
      :comments="person.comments"
      v-for="comment in comments"
      :key="comment.id"
    >
      <div class="comment__left">
        <v-icon>subdirectory_arrow_right</v-icon>
      </div>
      <div class="comment__right">
        <div class="comment__info">
          <div class="comment__info__img">
            <img
              class="comment__info__img-modifier"
              width="70rem"
              :src=comment.id_image
            >
          </div>
          <div class="comment__info__id">
            <div>
              <h4>{{comment.id}}</h4>
            </div>
            <div class="comment__info-date">{{comment.date}}</div>
          </div>
        </div>
        <div class="comment__content">{{comment.comment}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "ReComment",
      props: {
        comments : {
          type : Array,
          required : true,
          description : "대댓글 항목"
        }
      }
    }
</script>

<style scoped>
  .comment__box {
    display: flex;
    margin-bottom: 1.3rem;
    border-bottom: 1px solid #B2C0CC;
  }

  .comment__left {
    flex: 0 0 35px;
  }

  .comment__right {
    display: flex;
    flex-direction: column;
  }

  .comment__info {
    display: flex;
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
  }

  .comment__content {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }

</style>

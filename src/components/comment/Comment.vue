<template>
    <div class="container">
      <div class="container__left">
        <v-icon large>cake</v-icon>
      </div>
      <div class="container__right">
        <div class="header">
          <h3>{{ person.content }}</h3>
        </div>
        <div class="content">
          <div class="content__item">
            <v-icon small>perm_identity</v-icon>
            {{ person.id }}
          </div>
          <div class="content__item">
            <v-icon small>date_range</v-icon>
            {{ person.date }}
          </div>
          <div class="content__item">
            <v-icon small>comment</v-icon>
            {{ person.comment_cnt }}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Comment",
      data() {
        return {
          person : {
            content : '시간 초과가 뜨는 이유를 잘 모르겠습니다',
            id : 'jijihee123',
            date : new Date().toLocaleString(),
            comment_cnt : 3
          }
        }

      }
    }
</script>

<style scoped>
  .container {
    display : flex;
    height : 100%;
    flex-direction : row;
  }
  .container__left {
    flex : 1 1 auto;
  }
  .container__right {
    flex : 30 30 auto;
  }
  .header {
    margin-bottom : 0.3rem;
  }
  .header:hover {
    color : #0078FF;
  }
  .content {
    display : flex;
    align-items : flex-start;
  }
  .content__item {
    color : #55565b;
    margin-right : 1.3rem;
  }
</style>

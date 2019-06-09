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
          <h3>{{ value.content }}</h3>
        </div>
        <div class="content">
          <div class="content__item">
            <v-icon small>perm_identity</v-icon>
            {{ value.id }}
          </div>
          <div class="content__item">
            <v-icon small>date_range</v-icon>
            {{ value.date }}
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
          v-for="comment in recomments"
          :comment="comment"
        />
        <div class="comment__box">
          <h3>답변 쓰기</h3>
          <textarea
            class="content__textarea"
            maxlength="500"
            v-model="inputComment"
            placeholder="질문을 작성하세요.">
          </textarea>
          <v-btn
            class="button__register"
            medium
            color=#0078FF
            @click="addComment">등록
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Recomment from '@/components/comment/Recomment'
  import CommentItem from '@/models/comment/CommentItem'
  import * as jdenticon from "jdenticon";

  let value = new CommentItem('jijihee123', '2019.06.09 13:34', '시간 초과가 뜨는 이유를 잘 모르겠습니다');

  let recomments = [
    new CommentItem('heyharoo123', '2019.4.30 09:28', '1,2,3,4,9,11번 케이스만 통과합니다..'),
    new CommentItem('Cal-D', '2019.4.24 15:12', '이클립스에서는 돌아가는데 프로그래머스 실행시 오류'),
    new CommentItem('hhwaaaa1', '2019.04.20 23:54', '어떤 부분이 틀렸는지 모르겠어요, 시간이 5ms 이상인 테스트 케이스는 틀렸다고 되어..'),
  ];
  export default {
    name: "Comment",
    components: {
      Recomment
    },
    data() {
      return {
        value: value,
        recomments: recomments,
        inputComment: '',
        isRecommentShow: false
      }
    },
    computed: {
      identicon: function () {
        return jdenticon.toSvg(this.value.id, 65);
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
  }

  .header:hover {
    color: #0078FF;
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

  .content__textarea {
    height: 100%;
    width: 100%;
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

  .button__register {
    float: right;
    font-weight: bold;
    color: white;
  }
</style>

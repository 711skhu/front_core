<template>
  <div class="container">
    <div
      class="comment__box"
      v-for="item in items"
      :key="item.id"
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
              :src=item.id_image
            >
          </div>
          <div class="comment__info__id">
            <div>
              <h4>{{item.id}}</h4>
            </div>
            <div class="comment__info-date">{{item.date}}</div>
          </div>
        </div>
        <div class="comment__content">{{item.comment}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ReComment",
    data() {
      return {
        items: [
          {
            id_image: 'https://picsum.photos/510/300?random',
            id: 'GyutaeLee',
            date: '2019.4.30 09:28',
            comment: '1,2,3,4,9,11번 케이스만 통과합니다..'
          },
          {
            id_image: 'https://picsum.photos/510/300?random',
            id: 'Cal-D',
            date: '2019.4.24 15:12',
            comment: '이클립스에서는 돌아가는데 프로그래머스 실행시 오류'
          },
          {
            id_image: 'https://picsum.photos/510/300?random',
            id: 'hhwaaaa1',
            date: '2019.04.20 23:54',
            comment: '어떤 부분이 틀렸는지 모르겠어요, 시간이 5ms 이상인 테스트 케이스는 틀렸다고 되어..'
          },
          {
            id_image: 'https://picsum.photos/510/300?random',
            id: 'Hyeongu Kim',
            date: '2019.3.19 17:44',
            comment: '1,2 그리고 마지막 문제만 해결되는데 이유를 모르겠어요'
          },
          {
            id_image: 'https://picsum.photos/510/300?random',
            id: 'Petrus Kim',
            date: '2019.3.19 09:02',
            comment: '이건 디버거 없이, 코딩하기란 매우 어렵겠네요'
          }
        ]
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

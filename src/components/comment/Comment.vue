<template>
  <div class="container">
    <div class="container__upper">
      <div class="container__left">
        <img
          width="100rem"
          :src=person.id_image
        >
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
            <v-icon
              small
              @click="showComments"
            >comment
            </v-icon>
            {{ person.comments.length }}
          </div>
        </div>
      </div>
    </div>
    <div class="container__lower">
      <div v-show="state === true">

      </div>
    </div>
  </div>
</template>

<script>
  // import Recomment from '@/components/comment/Recomment'
  export default {
    name: "Comment",
    components: {
      // Recomment
    },
    data() {
      return {
        person: {
          id_image: 'https://picsum.photos/510/300?random',
          content: '시간 초과가 뜨는 이유를 잘 모르겠습니다',
          id: 'jijihee123',
          date: new Date().toLocaleString(),
          comments: [
            {
              id: 'GyutaeLee',
              date: '2019.4.30 09:28',
              comment: '1,2,3,4,9,11번 케이스만 통과합니다..'
            },
            {
              id: 'Cal-D',
              date: '2019.4.24 15:12',
              comment: '이클립스에서는 돌아가는데 프로그래머스 실행시 오류'
            },
            {
              id: 'hhwaaaa1',
              date: '2019.04.20 23:54',
              comment: '어떤 부분이 틀렸는지 모르겠어요, 시간이 5ms 이상인 테스트 케이스는 틀렸다고 되어..'
            },
            {
              id: 'Hyeongu Kim',
              date: '2019.3.19 17:44',
              comment: '1,2 그리고 마지막 문제만 해결되는데 이유를 모르겠어요'
            },
            {
              id: 'Petrus Kim',
              date: '2019.3.19 09:02',
              comment: '이건 디버거 없이, 코딩하기란 매우 어렵겠네요'
            }
          ]
        },
        state: false
      }

    },
    methods: {
      showComments() {
        if (this.state === false)
          this.state = true;
        else
          this.state = false;
      }
    }
  }
</script>

<style scoped>
  .container__upper {
    display: flex;
    height: 100%;
    flex-direction: row;
  }

  .container__left {
    flex: 1 1 auto;
  }

  .container__right {
    flex: 30 30 auto;
    margin-left: 0.3rem;
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
</style>

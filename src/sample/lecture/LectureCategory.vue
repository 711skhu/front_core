<template>
  <div>
    <v-hover>
      <div
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 2 : 0}`"
        class="container"
      >
        <div class="header">
          <h3>{{ title }}</h3>
          <v-icon
            size="1.5rem"
            :color="hover ? '#0078FF' : undefined" right>
            call_made
          </v-icon>
        </div>
        <div class="content">
          <div class="items content__item" v-for="item in items">
            <div class="items__title">{{item.title}}</div>
            <div class="items__content">{{item.content}} 개</div>
          </div>
        </div>
      </div>
    </v-hover>
  </div>
</template>

<script>
  import LectureCategoryItem from "@/models/lecture/LectureCategoryItem";

  let items = [
    new LectureCategoryItem('맞은 문제', 4),
    new LectureCategoryItem('덜 푼 문제', 3),
    new LectureCategoryItem('총 문제', 7),
  ];

  export default {
    data() {
      return {
        title: '연습문제',
        items: items
      }
    }
  }
</script>

<style lang="css" scoped>
  .container {
    border-top: lightsteelblue solid 0.1rem;
    border-bottom: lightsteelblue solid 0.1rem;

  }

  .header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .content {
    display: flex;
  }

  .content__item {
    flex: 1 1 auto;
    margin-right: 0.8rem;
    border-right: #D7E2EB solid;
  }

  .content__item:last-child {
    border-right: none;
  }

  .items__title {
    color: #0078FF;
    font-weight : bold;
    font-size: 0.9rem;
  }

  .items__content {
    margin-left: 0.2rem;
  }
</style>

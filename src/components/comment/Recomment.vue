<template>
  <div
    class="recomment__box"
    v-for="item in items"
    :key="item.id"
  >
    <div class="recomment__icon">
      <v-icon>subdirectory_arrow_right</v-icon>
    </div>
    <div class="recomment__info">
      <div>{{item.id}}</div>
      <div>{{item.date}}</div>
    </div>
    <div class="recomment__content">{{item.comment}}</div>
  </div>
</template>

<script>
    export default {
      name: "ReComment",
      props: {
        items : Array,
        required : true,
        description : "대댓글 항목"
      }
    }
</script>

<style scoped>
  .recomment__box {
    display : flex;
  }
  .recomment__box hover {
    display : none;
  }
  .recomment__icon {
    flex : 1 1 auto;
  }
  .recomment__info {
    flex : 3 3 auto;
  }
  .recomment__content {
    flex : 6 6 auto;
  }

</style>

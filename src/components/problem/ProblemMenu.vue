<template>
  <sui-menu class="menu" pointing secondary>
    <div
      class="menu__item"
      is="sui-menu-item"
      v-for="problemDetail in problemDetails"
      :active="isActive(problemDetail)"
      :key="problemDetail.id"
      :content="problemDetail.title"
      @click="onClick(problemDetail)"
    />
  </sui-menu>
</template>

<script>
  import ProblemDetail from "@/models/problem/ProblemDetail";

  export default {
    props: {
      problemDetails: {
        type: Array,
        required: true
      },
      value: {
        type: ProblemDetail,
        description: "문제 객체"
      }
    },
    methods: {
      isActive(problemDetail) {
        return this.value === problemDetail;
      },
      onClick(problemDetail) {
        this.$emit("input", problemDetail);
      }
    }
  }
</script>

<style scoped>
  .menu {
    margin: 0;
    border-bottom-width: 0 !important;
  }

  .menu__item:hover {
    cursor: pointer;
  }

  .ui.secondary.pointing.menu .active.item {
    border-bottom-width: 0.35rem;
  }

  .ui.secondary.pointing.menu .item {
    border-bottom-width: 0.35rem;
  }
</style>

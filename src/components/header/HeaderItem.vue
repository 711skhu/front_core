<template>
  <div
    class="item"
    :class="{active: isActive}"
    @click="$emit('input', menu)">
    {{ menu.name }}
  </div>
</template>

<script>
  import HeaderInfo from "@/models/header/HeaderInfo.js";

  export default {
    components: {
      HeaderInfo
    },
    props: {
      menu: {
        type: HeaderInfo,
        required: true,
        description: "menu context"
      },
      value: {
        type: HeaderInfo,
        description: "v-model을 위한 props"
      }
    },
    computed: {
      isActive() {
        return this.menu === this.value;
      }
    }
  }
</script>

<style scoped>
  .item {
    color: white;
    border: 2px solid #1B1C1D;
    padding-right: 10px;
  }

  .item:hover {
    color: #C0C0C0
  }

  .active {
    border-bottom: 2px solid white;
  }
</style>

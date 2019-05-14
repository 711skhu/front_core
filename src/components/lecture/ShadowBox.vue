<template>
  <div class="shadow">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .shadow:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, .2);
  }
</style>

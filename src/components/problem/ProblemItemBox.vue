<template>
  <v-hover>
    <div
      slot-scope="{hover}"
      class="box"
      :class="`elevation-${hover ? 4 : 0}`">
      <slot class="box__content"/>
    </div>
  </v-hover>
</template>

<script>
  export default {}
</script>

<style scoped>
  .box {
    padding: 0.8rem 0.5rem 1rem;
    border-top: lightgray solid 0.1rem;
  }

  .box:hover > :nth-child(1) {
    color: cornflowerblue;
  }
</style>

<template>
  <div id="app">
    <header-manu></header-manu>
  </div>
</template>

<script>
  import HeaderManu from "@/components/header/HeaderManu";

  export default {
    components: {
      HeaderManu
    }
  }
</script>

<style lang="less">
#app {
  margin-top: 1.5rem;
  line-height: 1.4285;
  height: 100%;
}
</style>

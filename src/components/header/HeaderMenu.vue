<template>
  <div class="ui inverted segment header">
    <div>SKHU Online Judge</div>
    <div class="header__menu">
      <header-item
        v-for="menu in menus"
        :key="menu.name"
        v-model="currentMenu"
        :menu="menu"
      />
    </div>
    <div>
      <a>마이페이지</a>
      <a>로그아웃</a>
    </div>
  </div>
</template>

<script>
  import HeaderItem from "@/components/header/HeaderItem";
  import HeaderInfo from "@/models/header/HeaderInfo.js";

  const menus = [
    new HeaderInfo("스킬체크", "/skill"),
    new HeaderInfo("개발채용", "/employ"),
    new HeaderInfo("코딩테스트 연습", "/test"),
    new HeaderInfo("프로그래밍 강의", "/lecture")
  ];

  export default {
    components: {
      HeaderItem
    },
    data() {
      return {
        menus: menus,
        currentMenu: null
      }
    }
  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
  }

  .header__menu {
    display: flex;
    justify-content: space-between;
  }

  a {
    color: white;
  }
</style>

<template>
  <div>

      <div>SKHU Online Judge</div>

      <div>
        <header-item
          v-for="menu in menus"
          v-model="currentMenu"
          :menu="menu"
        />
      </div>
      
      <div>
        <a>로그인</a>
        <a>회원가입</a>
      </div>
  </div>
</template>

<script>
import HeaderItem from "@/components/header/HeaderItem";

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
  data () {
    return {
      menus: menus,
      currentMenu: null
    }
  }
}
</script>

<style scoped>

</style>

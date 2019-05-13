<template>
  <div class="ui inverted segment">
    <div class="ui inverted secondary pointing menu">
      <div class="item">SKHU Online Judge</div>
      <div class="margin-right-20p"></div>
      <div class="ui inverted secondary pointing menu">
        <a v-for="(menu, index) in menus" class="item" v-bind:class="{ active: getActive }" v-bind:href="menu.url" @click="setActive(menu.id)">
          {{ menu.title }}
        </a>
      </div>
      <div class="margin-left-20p"></div>
      <div class="right menu">
        <a class="item">로그인</a>
        <a class="item">회원가입</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          id: 1,
          title: '스킬체크',
          url: '/skill'
        },
        {
          id: 2,
          title: '개발채용',
          url: '/employ'
        },
        {
          id: 3,
          title: '코딩테스 연습',
          url: '/test'
        },
        {
          id: 4,
          title: '프로그래밍 강의',
          url: '/lecture'
        }
      ],
      isActive: -1
    }
  },
  methods: {
    setActive(index) {
      this.isActive == index;
    }
  }
  /*
  computed: {
    getActive: function () {
      return this.isActive == this.menus.id
    }
  }
  */
}
</script>

<style>
div.margin-right-20p {
  margin-right: 20%
}
div.margin-left-20p {
  margin-left: 20%
}
</style>

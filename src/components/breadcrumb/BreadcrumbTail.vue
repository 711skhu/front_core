<template>
  <div class="navbar navbar-inverse">
    <v-breadcrumbs :items="items" divider=">" class="breadcrumb">
      <template v-slot:item="props">
        <a :href="props.item.href" :class="[props.item.active && 'active']">{{ props.item.text }}</a>
      </template>
    </v-breadcrumbs>
    <div class="right_menu">
      <a>도움말</a>
      <a>컴파일 옵션</a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            text: '코딩테스트 연습',
            active: false,
            href: 'breadcrumbs_dashboard'
          },
          {
            text: '사용자 제작 문제',
            active: false,
            href: 'breadcrumbs_link_1'
          },
          {
            text: '소수의 합',
            active: true,
            href: 'breadcrumbs_link_2'
          }
        ]
      }
    }
  }
</script>

<style>
  a {
    color: #98A8B9;
  }

  a:hover {
    color: white;
  }

  .active {
    color: white;
    font-weight: 700;
  }

  .navbar {
    border-width: 0;
    position: relative;
    min-height: 50px;
    margin-bottom: 0;
    border: 1px solid transparent;
    padding: 0 !important;
    border-radius: 0;
    display: flex;
    justify-content: space-between;
  }
  .navbar-inverse {
    background-color: #0C151C;
    border-color: transparent;
  }

  .breadcrumb>li {
    font-size: 14px;
  }

  .theme--light.v-breadcrumbs .v-breadcrumbs__divider {
    color: #98A8B9;
  }

  .right_menu {
    padding: 16px 0;
  }

  .right_menu a{
    color: white;
    font-size: 16px;
    font-weight: 700;
    padding-right: 10px;
  }

  .right_menu a:hover{
    color: #98A8B9;
  }
</style>

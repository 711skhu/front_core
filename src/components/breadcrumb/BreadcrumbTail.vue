<template>
  <div class="navbar navbar-inverse">
    <div class="breadcrumb">
      <ul class="list">
        <li v-for="item in items">
          <a :href="item.href">{{ item.text }}</a>
        </li>
      </ul>
    </div>
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
            href: 'breadcrumbs_dashboard'
          },
          {
            text: '사용자 제작 문제',
            href: 'breadcrumbs_link_1'
          },
          {
            text: '소수의 합',
            href: 'breadcrumbs_link_2'
          }
        ]
      }
    }
  }
</script>

<style>
  ul {
    list-style: none;
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

  .breadcrumb {
    padding-top: 20px;
  }

  .list li {
    float: left;
  }

  .list li a {
    color: #98A8B9;
    font-size: 15px;
  }

  .list li a:hover {
    color: white;
  }

  .list li::after {
    margin: 0 10px;
    color: #98A8B9;
    content: ">";
  }

  .list li:last-child a {
    color: white;
    font-weight: 700;
  }

  .list li:last-child::after {
    content: "";
  }

  .right_menu {
    padding: 16px 10px;
  }

  .right_menu a {
    color: white;
    font-size: 16px;
    font-weight: 700;
    padding-right: 10px;
  }

  .right_menu a:hover {
    color: #98A8B9;
  }
</style>

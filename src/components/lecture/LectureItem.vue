<template>
  <div class="ui middle aligned divided list">
    <div class="item margin-left-150 margin-right-150">
      <a>
          <h3 class="ui header padding-24">
            <div class="content">
              알고리즘
              <div class="sub header"> 이승진 </div>
            </div>
            <div class="ui toggle checkbox right">
              <input type="checkbox" name="public">
              <label></label>
            </div>
          </h3>
      </a>
    </div>
    <div class="item margin-left-150 margin-right-150">
      <a>
          <h3 class="ui header padding-24">
            <div class="content">
              고급웹프로그래밍
              <div class="sub header"> 이승진 </div>
            </div>
            <div class="ui toggle checkbox right">
              <input type="checkbox" name="public">
              <label></label>
            </div>
          </h3>
      </a>
    </div>
    <div class="item margin-left-150 margin-right-150">
      <a>
          <h3 class="ui header padding-24">
            <div class="content">
              데이터베이스개론
              <div class="sub header"> 홍은지 </div>
            </div>
            <div class="ui toggle checkbox right">
              <input type="checkbox" name="public">
              <label></label>
            </div>
          </h3>
      </a>
    </div>
    <div class="item margin-left-150 margin-right-150">
      <a>
          <h3 class="ui header padding-24">
            <div class="content">
              C++프로그래밍
              <div class="sub header"> 문성현 </div>
            </div>
            <div class="ui toggle checkbox right">
              <input type="checkbox" name="public">
              <label></label>
            </div>
          </h3>
      </a>
    </div>
  </div>
</template>

<style scoped>
  .item:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, .2);
  }
  .item:hover .content{
    color: #0078FF;
  }
  .margin-left-150 {
    margin-left: 150px
  }
  .margin-right-150 {
    margin-right: 150px
  }
  .right {
    float: right;
  }
  .padding-24 {
    padding: 24px;
  }
</style>

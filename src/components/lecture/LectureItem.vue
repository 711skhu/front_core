<template>
  <div id="app" class="ui middle aligned divided list">
    <div v-for="(item, index) in items" :key="index" class="item margin-left-150 margin-right-150" >
      <a>
          <h3 class="ui header padding-24">
            <div class="content">
              {{ item.title }}
              <div class="sub header"> {{ item.professor }} </div>
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

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data () {
      return {

      }
    }
  }
</script>

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

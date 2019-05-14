<template>
  <div class="ui middle aligned divided list">
    <div class="item" v-for="lecture in lectures">
        <shadow-box>
          <lecture-item v-bind:lecture="lecture"></lecture-item>
        </shadow-box>
    </div>
  </div>
</template>

<script>
import LectureItem from "@/components/lecture/LectureItem"
import ShadowBox from "@/components/lecture/ShadowBox"

export default {
  components: {
    LectureItem,
    ShadowBox
  },
  data () {
    return {
      lectures: [
        { title : "알고리즘", professor: "이승진" },
        { title : "고급웹프로그래밍", professor: "이승진" },
        { title : "데이터베이스개론", professor: "홍은지" },
        { title : "자바프로그래밍", professor: "노은하" }
      ],
      selectedIndex: 0
    }
  }
}
</script>
<style>
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

</style>

<template>
  <div class="ui middle aligned divided list">
    <lecture-item v-for="lecture in lectures">
      <lecture-info v-bind:lecture="lecture"></lecture-info>
    </lecture-item>
  </div>
</template>

<script>
import LectureInfo from "@/components/lecture/LectureInfo";
import LectureItem from "@/components/lecture/LectureItem";

export default {
  components: {
    LectureInfo,
    LectureItem
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

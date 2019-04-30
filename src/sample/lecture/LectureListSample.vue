<template>
  <lecture-item
    :items="items">

  </lecture-item>
</template>

<script>
  import LectureItem from "@/components/lecture/LectureItem";

  export default {
    components: {
      LectureItem
    },
    data () {
      return {
        items: [
          { title : "알고리즘", professor: "이승진" },
          { title : "고급웹프로그래밍", professor: "이승진" },
          { title : "데이터베이스개론", professor: "홍은지" },
          { title : "자바프로그래밍", professor: "노은하" }
        ]
      }
    }
  }
</script>

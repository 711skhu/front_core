<template>
      <a>
        <h3 class="ui header padding-24">
          <!--
          <div class="content">
            {{ props.element.title }}
            <div class="sub header"> {{ props.element.professor }} </div>
          </div>
          <-->
          <lecture-info :lecture="lecture"></lecture-info>
          <lecture-toggle></lecture-toggle>
        </h3>
      </a>
</template>

<script>
  import LectureItem from "@/components/lecture/LectureItem";
  import LectureToggle from "@/components/lecture/LectureToggle";
  import LectureInfo from "@/components/lecture/LectureInfo";

  export default {
    components: {
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
    },
    methods: {
      selectChange (selectedItem, index) {
        this.selectedIndex = index;
      }
    }
  }

/*
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
  */
</script>

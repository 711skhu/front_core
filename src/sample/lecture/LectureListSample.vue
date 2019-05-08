<template>
  <lecture-item
    :items="items"
  >
    <div
      slot="item"
      slot-scope="props"
    >
      <a>
        <h3 class="ui header padding-24">
          <div class="content">
            {{ props.element.title }}
            <div class="sub header"> {{ props.element.professor }} </div>
          </div>
          <lecture-toggle></lecture-toggle>
        </h3>
      </a>
    </div>
  </lecture-item>
</template>

<script>
  import LectureItem from "@/components/lecture/LectureItem";
  import LectureToggle from "@/components/lecture/LectureToggle";
  import LectureInfo from "@/components/lecture/LectureInfo";

  export default {
    components: {
      LectureItem,
      LectureToggle,
      LectureInfo
    },
    data () {
      return {
        items: [
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
<style>
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

</style>

<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="scores"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.score }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import StudentScore from "@/models/problem/StudentScore";

  let scores = [
    new StudentScore("서종현", 10),
    new StudentScore("서종현1", 100),
    new StudentScore("서종현3", 60),
    new StudentScore("서종현5", 20),
    new StudentScore("서종현2", 50),
    new StudentScore("서종현4", 90),
  ];

  export default {
    props: {
      maxScore: {
        type: Number,
        required: true,
        description: "만점 성적"
      }
    },
    data() {
      return {
        headers: [
          {text: '이름', value: 'name'},
          {text: `점수 (만점: ${this.maxScore})`, value: 'score'},
        ],
        scores: scores
      }
    }
  }
</script>

<style scoped>

</style>

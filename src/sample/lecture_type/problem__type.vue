<template>
  <sui-segment>
    <sui-header size="medium" textAlign="left">
      {{ typeTitle }}
      <sui-icon name="arrow right" size="big" class="title__icon"  />
    </sui-header>

    <sui-grid :columns="3">
      <sui-grid-row>
        <sui-grid-column>
           <docs-wireframe name="paragraph" />
           <h4 is="sui-header"> 맞은문제 </h4>
           <p> {{ typeCorrectProblemCnt }} / {{ typeTotalProblemCnt }} </p>
        </sui-grid-column>
        <sui-grid-column>
           <docs-wireframe name="paragraph" />
           <h4 is="sui-header"> 틀린문제 </h4>
           <p> {{ typeInCorrectProblemCnt }} / {{ typeTotalProblemCnt }} </p>
        </sui-grid-column>
        <sui-grid-column>
           <docs-wireframe name="paragraph" />
           <h4 is="sui-header"> 덜푼문제 </h4>
           <p> {{ not_solve }} / {{ typeTotalProblemCnt }}</p>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </sui-segment>
</template>

<script>
export default {
  name : 'problem__type',
  data() {
    return {
      typeId : 1,
      typeTitle : '2019학년도 구현과제',
      typeTotalProblemCnt : 10,
      typeCorrectProblemCnt : 6,
      typeInCorrectProblemCnt : 2
    }
  },
  computed: {
    not_solve() {
      const { typeTotalProblemCnt, typeCorrectProblemCnt, typeInCorrectProblemCnt } = this;
      return typeTotalProblemCnt-(typeCorrectProblemCnt+typeInCorrectProblemCnt);
    }
  }


}
</script>

<style lang="css" scoped>
.title__icon {
  float : right;
}
</style>

<template>
  <div class="execute-result-panel">
    <div class="result-box">
      <div
        v-for="(result, index) in testCaseResults"
        class="line">
        테스트 {{index + 1}} 〉
        <span v-if="result" class="test-success">통과</span>
        <span v-else class="test-fail">실패</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      testCaseResults: {
        type: Array,
        required: true,
        description: "테스트 케이스 실행 결과"
      }
    }
  }
</script>

<style scoped>
  .line {
    padding: 0.2rem 0.5rem;

    border-top: cornflowerblue solid 0.1rem;
    border-left: cornflowerblue solid 0.1rem;
    border-right: cornflowerblue solid 0.1rem;

    background-color: aliceblue;
  }

  .line:last-child {
    border-bottom: cornflowerblue solid 0.1rem;
  }

  .test-success {
    color: #0078FF;
  }

  .test-fail {
    color: orangered;
  }
</style>

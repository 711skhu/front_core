<template>
  <shadowbox>
  <sui-segment class="iconColor">
    <sui-header size="medium" textAlign="left">
      {{ typeTitle }}
      <span class="icon title__icon">
      <sui-icon name="arrow right"  />
    </span>
    </sui-header>
    <sui-grid :columns="3">
      <sui-grid-row>
        <sui-grid-column>
          <div class="border__color">
           <docs-wireframe name="paragraph" />
           <h4 is="sui-header" color="blue"> 맞은문제 </h4>
           <p> {{ typeCorrectProblemCnt }} / {{ typeTotalProblemCnt }} </p>
         </div>
        </sui-grid-column>
        <sui-grid-column>
          <div class="border__color">
           <docs-wireframe name="paragraph" />
           <h4 is="sui-header" color="blue"> 틀린문제 </h4>
           <p> {{ typeIncorrectProblemCnt }} / {{ typeTotalProblemCnt }} </p>
         </div>
        </sui-grid-column>
        <sui-grid-column>
           <docs-wireframe name="paragraph" />
           <h4 is="sui-header" color="blue"> 덜푼문제 </h4>
           <p> {{ not_solve }} / {{ typeTotalProblemCnt }}</p>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </sui-segment>
</shadowbox>
</template>

<script>
import ShadowBox from '../lecture/ShadowBox.vue'
export default {
  name : 'problem__type',
  components : {
    'shadowbox' : ShadowBox
  },
  props : {
    typeId : {
      type : Number,
      default : -1,
      required : true
    },
    typeTitle : {
      type : String,
      required : true
    },
    typeTotalProblemCnt : {
      type : Number,
      required : true
    },
    typeCorrectProblemCnt : {
      type : Number,
      required : true
    },
    typeIncorrectProblemCnt : {
      type : Number,
      required : true
    }
  },
  computed: {
    not_solve() {
      const { typeTotalProblemCnt, typeCorrectProblemCnt, typeIncorrectProblemCnt } = this;
      return typeTotalProblemCnt-(typeCorrectProblemCnt+typeIncorrectProblemCnt);
    }
  }


}
</script>

<style lang="css" scoped>
.title__icon {
  float : right;
}
.border__color {
  border-right : 2px solid grey;
}

.iconColor:hover .icon {
  color : #0078FF;
}
</style>

<template>
      <a>
          <h3 class="ui header padding-24">
            <lecture-info v-bind:lecture="lecture"></lecture-info>
            <lecture-toggle></lecture-toggle>
          </h3>
      </a>
</template>




<script>
import LectureInfo from "@/components/lecture/LectureInfo"
import LectureToggle from "@/components/lecture/LectureToggle"

export default {
  components: {
    LectureInfo,
    LectureToggle
  },
  props: ['lecture'],
  data () {
      return {
        localSelectedIndex: this.selectedIndex,
        hoverItemIndex: -1, // hover 된 아이템의 index
        blankLine: { // 선택되지 않았을 때 보여질 투명 라인
          borderBottom: this.lineSize + " solid #00000000"
        },
        underLine: { // 선택되었을 때 보여질 색이 있는 라인
          borderBottom: this.lineSize + " solid " + this.lineColor
        }
      }
    },
    methods: {
      clickItem (selectedItem, index) {
        this.localSelectedIndex = index;
        this.$emit('selectChange', selectedItem, index);
      },
      updateHoverState (index, isHover) {
        if (isHover) {
          this.hoverItemIndex = index;
        } else if (index === this.hoverItemIndex) { // 비동기 호출을 대비한 최소한의 if
          this.hoverItemIndex = -1;
        }
      },
      isHighlighted (index) { // 선택 됐거나 hover 됐거나 값
        return index === this.localSelectedIndex || index === this.hoverItemIndex;
      },
      getLineStyle (index) {
        return this.isHighlighted(index) ? this.underLine : this.blankLine;
      }
    }
  }

  /**
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
    **/
</script>

<style scoped>
.padding-24 {
  padding: 24px;
}

</style>

<template>
  <div class="list">
    <div
      v-for="(item, index) in items"
      :key="index"
      :style="getLineStyle(index)"
      class="itemContainer"
      @click.stop="clickItem(item, index)"
      @mouseenter="updateHoverState(index, true)"
      @mouseleave="updateHoverState(index, false)"
    >
      <slot name="item" :element="item">
        <!-- 대체 컨텐츠 -->
      </slot>
    </div>
    <div style="clear:both"></div> <!-- float: left 로 인한 태그 및 스타일 -->
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      },
      lineColor: { // under line 색
        type: String,
        required: true
      },
      lineSize: { //  under line 굵기
        required: true
      },
      selectedIndex: { // 초기 선택 index - 초기에만 사용되고 변경 되어도 영향을 받지 않음
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        local_selectedIndex: this.selectedIndex, // 선택된 아이템의 index
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
        this.local_selectedIndex = index;
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
        return index === this.local_selectedIndex || index === this.hoverItemIndex;
      },
      getLineStyle (index) {
        return this.isHighlighted(index) ? this.underLine : this.blankLine;
      }
    }
  }
</script>

<style scoped>
  .itemContainer {
    float: left;
    margin-left: 0.8em;
    margin-right: 0.8em;
  }
</style>

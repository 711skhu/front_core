<template>
  <div class="selectable-list">
    <div
      v-for="(item, index) in items"
      :key="index"
      :style="getLineStyle(index)"
      class="selectable-list__item"
      @click.stop="clickItem(item, index)"
      @mouseenter="updateHoverState(index, true)"
      @mouseleave="updateHoverState(index, false)"
    >
      <slot name="item" :element="item">
        <!-- 대체 컨텐츠 -->
      </slot>
    </div>
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
      selectedIndex: { // 선택된 item 의 index - 초기 값
        type: Number,
        default: -1,
        required: false
      }
    },
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
</script>

<style scoped>
  .selectable-list {
    display: flex;
  }
  .selectable-list__item {
    flex: initial;
    margin-right: 0.8em;
  }
  .selectable-list__item:last-child {
    margin-right: 0;
  }
</style>

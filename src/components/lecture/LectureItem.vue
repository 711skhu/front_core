<template>
  <div class="ui middle aligned divided list">
    <div
      v-for="(item, index) in items"
      :key="index"
      :style="getLineStyle(index)"
      class="item margin-left-150 margin-right-150"
      @click.stop="clickItem(item, index)"
      @mouseenter="updateHoverState(index, true)"
      @mouseleave="updateHoverState(index, false)"
    >
      <slot name="item" :element="item">
        <!-- 대체 컨텐츠 -->
      </slot>
    </div>
  </div>
  </div>
<!--
  <div id="app" class="ui middle aligned divided list">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="item margin-left-150 margin-right-150" >
      <a>
          <h3 class="ui header padding-24">
            <div class="content">
              {{ item.title }}
              <div class="sub header"> {{ item.professor }} </div>
            </div>
            <div class="ui toggle checkbox right">
              <input type="checkbox" name="public">
              <label></label>
            </div>
          </h3>
      </a>
    </div>
  </div>
-->
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

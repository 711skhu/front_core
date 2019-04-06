<template>
  <div class="list">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="itemContainer"
      :class="[{ selected: index === local_selectedIndex }]"
      @click.stop="clickItem(item, index)"
    >
      <slot name="item" :element="item">
        <!-- 대체 컨텐츠 -->
      </slot>
    </div>
    <div style="clear:both"></div>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      },
      selectedIndex: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        local_selectedIndex: this.selectedIndex, // 선택된 아이템의 index
      }
    },
    methods: {
      clickItem: function (selectedItem, index) {
        this.local_selectedIndex = index;
        this.$emit('selectChange', selectedItem, index);
      }
    }
  }
</script>

<style scoped>
  .itemContainer {
    float: left;
    margin-left: 0.8em;
    margin-right: 0.8em;
    border-bottom: 0.3em solid #00000000;
  }
  .itemContainer:hover {
    border-bottom: 0.3em solid white;
  }
  .selected {
    border-bottom: 0.3em solid white;
  }
</style>

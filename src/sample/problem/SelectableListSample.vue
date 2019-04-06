<template>
  <selectable-list :items="items" lineColor="black" line-size="0.2em">
    <div
      slot="item"
      slot-scope="props"
    >
      {{ props.element.text }}
    </div>
  </selectable-list>
</template>

<script>
  import SelectableList from "@/components/problem/SelectableList";

  export default {
    components: {
      SelectableList
    },
    data () {
      return {
        items: [
          { text : "1번문제" },
          { text : "2번문제" },
          { text : "3번문제" },
          { text : "4번문제" },
          { text : "5번문제" }
        ]
      }
    }
  }
</script>

<style scoped>

</style>

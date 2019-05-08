<template>
  <div>
    <sui-dropdown
      placeholer="language"
      selection
      :options="dropdownOptions"
      :value="index"
      @input="handleInput"
    />
  </div>
</template>

<script>
  export default {
    props: {
      options: {
        type: Array,
        required: true,
        description: "드롭다운 선택지들"
      },
      value: {
        description: "v-model 을 활용하기 위한 props"
      }
    },
    methods: {
      handleInput(index) {
        this.$emit("input", this.options[index]);
      }
    },
    computed: {
      index() {
        return this.options.indexOf(this.value);
      },
      dropdownOptions() {
        return this.options.map(function (option, index) {
          return {
            text: option.toString(),
            value: index
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>

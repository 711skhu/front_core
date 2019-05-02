<template>
  <sui-button-group>
    <sui-button basic
                v-for="option in options"
                :key="option.toString()"
                :active="isActive(option)"
                @click="onClick(option)">
      {{ option.toString() }}
    </sui-button>
  </sui-button-group>
</template>

<script>
  export default {
    model: {
      prop: "active",
      event: "change"
    },
    props: {
      options: {
        type: Array,
        required: true
      },
      active: {
        required: false
      }
    },
    methods: {
      isActive(option) {
        return this.active === option;
      },
      onClick(option) {
        this.$emit('change', option);
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div  class="content">
    {{ lecture.title }}
    <div class="sub header"> {{ lecture.professor }} </div>
  </div>
</template>

<script>
export default {
  props: ['lecture']
}
</script>

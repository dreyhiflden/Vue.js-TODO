<template>
  <div class="progress">
    <h3 class="progress__headline">Progress</h3>

    <div class="progress__bar">

    </div>
    <button class="progress__button">Complete all</button>
  </div>
</template>

<script>
  export default {
    name: "TodoListProgress"
  }
</script>

<style scoped lang="scss">
  .progress {}
  .progress__headline {
    text-transform: uppercase;
  }
</style>
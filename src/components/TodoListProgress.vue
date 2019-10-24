<template>
  <div class="progress">
    <h3 class="progress__headline">Progress</h3>

    <div class="progress__bar">

    </div>
    <button class="progress__button" @click="completeAllMethod">Complete all</button>
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    name: "TodoListProgress",
    methods: {
      ...mapActions(['completeAll']),

      completeAllMethod() {
        this.completeAll()
      }
    }
  }
</script>

<style scoped lang="scss">
  .progress {}
  .progress__headline {
    text-transform: uppercase;
  }
</style>
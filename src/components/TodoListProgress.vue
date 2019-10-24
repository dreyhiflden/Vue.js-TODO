<template>
  <div class="progress">
    <h3 class="progress__headline">Progress</h3>
      <ProgressBar></ProgressBar>
    <button class="progress__button" @click="completeAllMethod">Complete all</button>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import ProgressBar from "./ProgressBar";

  export default {
    name: "TodoListProgress",
    components: {ProgressBar},
    // computed: {
    //
    // },
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
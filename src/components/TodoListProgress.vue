<template>
  <div class="progress">
    <div class="progress__container">
      <ProgressBar></ProgressBar>
    </div>
    <button class="button progress__button" @click="completeAllMethod">Complete all</button>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  import ProgressBar from "./ProgressBar";

  export default {
    name: "TodoListProgress",
    components: {ProgressBar},
    methods: {
      ...mapActions(['completeAll']),

      completeAllMethod() {
        this.completeAll()
      }
    }
  }
</script>

<style scoped lang="scss">
  .progress {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .progress__container {
    height: 130px;
  }
  .progress__headline {
    text-transform: uppercase;
  }

  .progress__button {
    border: 0;
    color: #fff;
    background: linear-gradient(116.11deg, #F7C6B8 11.2%, #EE6D93 51.47%);

    &:hover,
    &:active {
      background: linear-gradient(116.11deg, #f79c88 11.2%, #ee387f 51.47%);
    }
  }
</style>
<template>
  <div class="progressbar">
    <vue-circle class="progressbar" ref="circleProgress"
      :progress="total"
      :size="100"
      :reverse="false"
      line-cap="round"
      :fill="fill"
      empty-fill="rgba(0, 0, 0, .1)"
      :animation-start-value="0.0"
      :start-angle="2"
      insert-mode="append"
      :thickness="10"
      :show-percent="true">
    </vue-circle>
  </div>
</template>

<script>
  import VueCircle from 'vue2-circle-progress/src/index.vue'
  export default {
    components: {
      VueCircle
    },
    data() {
      return{
        fill: { gradient: ["#1ccd00", "#a7ff00"] },
      }
    },
    computed: {
      total: function() {
        let total = this.$store.state.todos.length;
        let completed = this.$store.state.todos
          .filter(todo => todo.completed).length;
        return completed / total * 100 || 0
      }
    },
    watch: {
      total() {
        this.$refs.circleProgress.updateProgress(this.total);
      }
    }
  }
</script>

<style scoped lang="scss">
  .progressbar {
    color: #fff;
  }

</style>
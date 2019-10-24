<template>
  <div class="progressbar">
    <p>
      A Vue.js component to draw animated circular progress bars!
    </p>
    <vue-circle class="" ref="circleProgress"
      :progress="total"
      :size="200"
      :reverse="false"
      line-cap="round"
      :fill="fill"
      empty-fill="rgba(0, 0, 0, .1)"
      :animation-start-value="0.0"
      :start-angle="2"
      insert-mode="append"
      :thickness="20"
      :show-percent="true">
      <p>Slot!</p>
    </vue-circle>

  </div>
</template>

<script>
  import VueCircle from 'vue2-circle-progress'
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
        return completed / total * 100
      }
    },
    methods:{
      // progress(event, progress, stepValue){
      //
      // },
      // progress_end(event){
      //
      // },
    },
    watch: {
      total() {
        this.$refs.circleProgress.updateProgress(this.total);
      }
    }
  }
</script>

<style scoped>

</style>
<template>
  <div class="stats">
    <h3  class="stats__headline">Stats</h3>

    <table style="width:100%">
      <tr>
        <td>Deals:</td>
        <td>{{ totalDeals }}</td>
      </tr>
      <tr>
        <td>Deals left:</td>
        <td>{{ leftDeals }}</td>
      </tr>
    </table>

    <button class="stats__button" @click="clearCompletedMethod">
      Clear completed
    </button>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";

  export default {
    name: "TodoListStats",
    computed: {
      ...mapGetters(['todos']),

      totalDeals: function () {
        return this.todos.length
      },

      leftDeals: function () {
        return this.todos.filter(todo => !todo.completed).length
      }
    },
    methods: {
      ...mapActions(['clearCompleted']),

      clearCompletedMethod() {
        this.clearCompleted()
      }
    }
  }
</script>

<style scoped lang="scss">
  .stats {

  }

  .stats__headline {
    text-transform: uppercase;
  }
</style>
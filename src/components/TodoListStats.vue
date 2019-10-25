<template>
  <div class="stats">
    <div class="stats__container">
      <table class="stats__table" style="width:100%">
        <tr>
          <td>Deals:</td>
          <td>{{ totalDeals }}</td>
        </tr>
        <tr>
          <td>Deals left:</td>
          <td>{{ leftDeals }}</td>
        </tr>
      </table>
    </div>
    <button class="button stats__button" @click="clearCompletedMethod">
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
  .stats__table {
    color: white;
  }

  .stats__container {
    height: 130px;
    padding: 30px 0 0 0;
  }

  .stats__headline {
    margin: 0;
    text-transform: uppercase;
  }

  .stats__button {
    border: 0;
    color: #fff;
    background: linear-gradient(116.11deg, #F7C6B8 11.2%, #EE6D93 51.47%);

    &:hover,
    &:active {
      background: linear-gradient(116.11deg, #f79c88 11.2%, #ee387f 51.47%);
    }
  }
</style>
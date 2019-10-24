<template>
  <div class="container">
    <div class="left-panel">
      <TodoListStats />
    </div>
    <div class="middle-panel">
    <AddTodoItem />
    <ul class="todo-list">
      <TodoListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
    <FilterControls />
    </div>

    <div class="right-panel">
      <TodoListProgress />
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AddTodoItem from "./AddTodoItemForm.vue";
  import TodoListItem from "./TodoListItem";
  import FilterControls from "./FIlterControls";
  import TodoListStats from "./TodoListStats";
  import TodoListProgress from "./TodoListProgress";

  export default {
    name: "Todo",
    components: {TodoListProgress, TodoListStats, FilterControls, TodoListItem, AddTodoItem },
    computed: {
      ...mapGetters({
        'todos' : 'filteredTodos'
      })
    },
  }
</script>

<style scoped lang="scss">
  .container {
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    max-width: 1024px;
    margin: 0 auto;
  }

  .left-panel {

  }

  .middle-panel {

  }

  .right-panel {

  }

  .todo-list {
    padding: 0;
    flex-grow: 1;
  }
</style>

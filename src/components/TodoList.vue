<template>
  <div class="container">
    <AddTodoItem />
    <ul class="todo-list">
      <TodoListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
    <FiltersForTodoItems />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AddTodoItem from "./AddTodoItemForm.vue";
  import TodoListItem from "./TodoListItem";
  import FiltersForTodoItems from "./FiltersForTodoItems";

  export default {
    name: "Todo",
    components: { FiltersForTodoItems, TodoListItem, AddTodoItem },
    computed: {
      ...mapGetters({
        'todos' : 'filteredTodos'
      })
    },
  }
</script>

<style scoped lang="scss">
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
  .todo-list {
    padding: 0;
  }
</style>

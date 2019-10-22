<template>
  <div>
    <AddTodoItem />
    <ul class="todo-list">
      <TodoListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import AddTodoItem from "./AddTodoItemForm.vue";
  import TodoListItem from "./TodoListItem";

  export default {
    name: "Todo",
    components: { TodoListItem, AddTodoItem },
    computed: {
      ...mapGetters({
        'todos' : 'allTodos'
      })
    },
  }
</script>

<style scoped lang="scss">
  .todo-list {
    padding: 0;
  }
</style>

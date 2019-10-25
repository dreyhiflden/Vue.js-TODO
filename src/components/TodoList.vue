<template>
  <div class="wrapper">
    <div class="main">
      <AddTodoItem />
      <ul class="todo-list">
        <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
      </ul>
      <FilterControls />
      <div class="container">
        <TodoListStats />
        <TodoListProgress />
      </div>
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
    components: { TodoListProgress, TodoListStats, FilterControls, TodoListItem, AddTodoItem },
    computed: {
      ...mapGetters({
        'todos' : 'filteredTodos'
      })
    },
  }
</script>

<style lang="scss">
  .button {
    text-transform: uppercase;
    border-radius: 1.5rem;
    font-weight: 500;
    text-shadow: 1px 1px 2px black;
    font-size: 14px;
    padding: 0.5rem;
    outline: none;
    cursor: pointer;
    transition: all ease-in 0.1s;

    &:hover {
      background: rgba(0, 0, 0, 0.22);
    }

    &:active {
      background: rgba(250, 250, 255, 0.22);
    }
  }

  .wrapper {
    margin: 150px 0;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
  }

  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .main {
    min-height: 500px;
    min-width: 500px;
    background-image: radial-gradient(circle at 31% 0,#4f48ad,#1d175e);
    border-radius: 15px;
    box-shadow: 0 10px 10px -5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .todo-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    flex-shrink: 0;
  }
</style>

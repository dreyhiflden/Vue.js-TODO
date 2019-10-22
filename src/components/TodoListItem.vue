<template>
  <li class="todo-list__item">
    <label>
      <input type="checkbox" v-model="checked" @change="toggleTodoItemStateMethod(todo.id)">
    </label>
    <span class="">{{ todo.text }}</span>
    <button>Edit</button>
    <button>Delete</button>
  </li>
</template>

<script>
  import {mapActions} from "vuex";

  export default {
    name: "TodoListItem",
    data() {
      return {
        checked: '',
      }
    },
    props: {
      todo: Object
    },
    methods: {
      ...mapActions(['toggleTodoItemState']),

      toggleTodoItemStateMethod(todoId) {
        this.toggleTodoItemState(todoId)
      }
    }
  }
</script>

<style scoped lang="scss">
  .todo-list__item {
    list-style: none;
  }

  .todo-list__item--completed {
    text-decoration: line-through;
  }
</style>

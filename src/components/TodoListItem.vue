<template>
  <li class="todo-list__item">
    <label>
      <input type="checkbox" v-model="todo.completed">
    </label>
    {{ todo.text }}
    <button>Edit</button>
    <button>Delete</button>
  </li>
</template>

<script>
  export default {
    name: "TodoListItem",
    props: {
      todo: Object
    },
  }
</script>

<style scoped lang="scss">
  .todo-list__item {
    list-style: none;
  }
</style>

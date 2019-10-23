<template>
  <li class="todo-list__item">
    <input type="checkbox" v-model="checked" @change="toggleCompletedStatusMethod(todo.id)">
    <div v-if="!isEditing"
         class="item-name"
         :class="{ 'todo-list__item--completed': todo.completed }"
    >
      {{ todo.text }}
    </div>
    <input v-if="isEditing" type="text" v-model="todo.text" />
    <button v-if="!isEditing" @click="toggleEditingState">Edit</button>
    <button v-if="isEditing" @click="edit(todo)">Save</button>
    <button @click="removeTodoItemMethod(todo)">Delete</button>
  </li>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    name: "TodoListItem",
    data() {
      return {
        checked: '',
        isEditing: false,
      }
    },
    props: {
      todo: Object
    },
    methods: {
      ...mapActions(['toggleCompletedStatus', 'editTodoItem', 'removeTodoItem']),

      toggleCompletedStatusMethod(todoId) {
        this.toggleCompletedStatus(todoId)
      },
      toggleEditingState() {
        this.isEditing === false ? this.isEditing = true : this.isEditing = false;
      },
      edit(todoObj){
        this.$store.dispatch('editTodoItem', todoObj);
        this.toggleEditingState();
      },
      removeTodoItemMethod(todo) {
        this.removeTodoItem(todo);
      }
    },
  }
</script>

<style scoped lang="scss">
  .todo-list__item {
    list-style: none;
  }

  .todo-list__item--completed {
    text-decoration: line-through;
  }

  .item-name {
    display: inline-block;
    width: 300px;
  }
</style>

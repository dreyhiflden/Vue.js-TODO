<template>
  <li class="todo-list__item">
    <input type="checkbox" :checked="checked" @change="toggleCompletedStatusMethod(todo)">
    <div v-if="!isEditing"
         class="item-name"
         :class="{ 'todo-list__item--completed': todo.completed }"
    >
      {{ todo.text }}
    </div>
    <input v-if="isEditing" type="text" :value="todo.text" @change="bufferingText"/>
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
        isEditing: false,
        bufferingInputText: ''
      }
    },
    computed: {
      checked() {
        return this.todo.completed;
      }
    },
    props: {
      todo: Object
    },
    methods: {
      ...mapActions(['toggleCompletedStatus', 'editTodoItem', 'removeTodoItem']),

      toggleCompletedStatusMethod(todo) {
        this.toggleCompletedStatus(todo)
      },
      toggleEditingState() {
        this.isEditing = !this.isEditing;
      },
      edit(todo){
        this.editTodoItem({
          newText : this.bufferingInputText,
          todoId : todo.id
        });
        this.toggleEditingState();
      },
      removeTodoItemMethod(todo) {
        this.removeTodoItem(todo);
      },
      bufferingText(e) {
        this.bufferingInputText = e.target.value;
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

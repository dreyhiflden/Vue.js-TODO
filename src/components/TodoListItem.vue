<template>
  <li class="todo-list__item">

    <input type="checkbox"
           :id="todo.id"
           :checked="checked"
           @change="toggleCompletedStatusMethod(todo)">

    <label v-if="!isEditing"
           :for="todo.id"
           class="todo-list__text"
           :class="{ 'todo-list__item--completed': todo.completed }">
      {{ todo.text }}
    </label>

    <input class="todo-list__edit-input"
           v-if="isEditing"
           type="text"
           maxlength="36"
           :value="todo.text"
           @change="bufferingText"/>

    <button class="button todo-list__button" v-if="!isEditing" @click="toggleEditingState">Edit</button>
    <button class="button todo-list__button" v-if="isEditing" @click="edit(todo)">Save</button>
    <button class="button todo-list__button" @click="removeTodoItemMethod(todo)">Delete</button>
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
        if (!this.bufferingInputText) {
          this.toggleEditingState();
          return
        }

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
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 0;

    &:hover {
      background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(0, 0, 0, 0.05),  rgba(255,0,0,0));
      border-radius: 5px;
    }
  }

  .todo-list__item--completed {
    text-decoration: line-through;
  }

  .todo-list__text {
    display: inline-block;
    width: 300px;
    color: #fff;
    text-shadow: 1px 1px 2px black;
  }

  .todo-list__button {
    color: white;
    background: transparent;
    border: 1px solid #667dff;
    font-size: 12px;

    &--delete {
      background: linear-gradient(116.11deg, #F7C6B8 11.2%, #EE6D93 51.47%);
    }
  }

  .todo-list__edit-input {
    text-shadow: 1px 1px 2px black;
    background: rgba(0, 0, 0, 0.19);
    border-radius: 3px;
    padding: 5px;
    width: 65%;
    text-indent: 0.5em;
    color: #fff;
    outline: none;
    -webkit-transition: all ease 0.2s;
    transition: all ease 0.2s;
    border: 1px dashed #667dff;
  }
</style>

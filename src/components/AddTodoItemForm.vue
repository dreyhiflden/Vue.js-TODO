<template>
  <form class="add-todo-form" autocomplete="off">
      <input class="add-todo-form__input"
             type="text"
             id="todo-input"
             placeholder=""
             maxlength="36"
             v-model="newTodo"
      >
    <label class="add-todo-form__label" for="todo-input">Input your deal</label>
    <button class="button add-todo-form__button" @click.prevent="addTodoItemMethod">Add to list</button>
  </form>
</template>

<script>
  import { mapActions } from 'vuex'
  import uuid from 'uuid/v4'

  export default {
    name: "AddTodoItemForm",
    data() {
      return {
        newTodo: null
      }
    },
    methods: {
      ...mapActions(['addTodoItem']),

      addTodoItemMethod() {
        let value = this.newTodo && this.newTodo.trim();
        if (!value) {
          return;
        }

        this.addTodoItem({
          text: this.newTodo,
          completed: false,
          id: uuid()
        });

        this.newTodo = null;
      }
    }
  }
</script>

<style scoped lang="scss">
  .add-todo-form {
    padding: 20px 0;
    display: flex;
    position: relative;
    justify-content: space-between;
    width: 100%;
  }

  .add-todo-form__input {
    height: 28px;
    width: 76%;
    background: rgba(0, 0, 0, 0.19);
    padding: 20px;
    border-radius: 3px;
    text-indent: 0.5em;
    color: #fff;
    outline: none;
    transition: all ease 0.2s;
    border: 1px dashed #667dff;

    &:hover,
    &:focus {
      box-shadow: 2px 2px 10px #000;
    }

    &:focus + .add-todo-form__label  {
      transform: translateY(-30px);
      font-size: 12px;
      color: #ffffff;
    }
  }

  .add-todo-form__label {
    position: absolute;
    color: rgba(255, 255, 255, 0.13);
    top: 33px;
    left: 30px;
    transition: all ease 0.5s;
    font-weight: 500;
  }

  .add-todo-form__button {
    color: #fff;
    border: 1px solid #667dff;
    background: rgba(42, 111, 255, 0);
  }
</style>

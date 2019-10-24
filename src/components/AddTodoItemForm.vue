<template>
  <form class="form" action="#">
    <label>
      <input class="form__input"
             type="text"
             placeholder="Input your deal"
             v-model="newTodo"
      >
    </label>
    <button class="form__button" @click.prevent="addTodoItemMethod">Add to list</button>
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
  .form {
    margin: 20px 20px;
    display: flex;
  }

  .form__input {
    height: 28px;
  }

  .form__button {
    text-transform: uppercase;
    color: #fff;
    background: #2a6fff;
    border: none;
  }
</style>

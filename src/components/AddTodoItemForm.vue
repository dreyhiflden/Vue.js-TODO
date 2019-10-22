<template>
  <form class="form" action="#">
    <label>
      <input class="form__input"
             type="text"
             placeholder="Input your deal"
             v-model="inputData"
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
        inputData: ''
      }
    },
    methods: {
      ...mapActions(['addTodoItem']),
      addTodoItemMethod() {
        const newTodoItem = {
          text: this.inputData,
          complete: false,
          id: uuid()
        };
        this.addTodoItem( newTodoItem );
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

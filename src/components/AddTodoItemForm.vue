<template>
  <form class="form" action="#">
    <label>
      <input class="form__input" type="text" placeholder="Input your deal">
    </label>
    <button class="form__button">Add to list</button>
  </form>
</template>

<script>
  export default {
    name: "AddTodoItemForm",
    data: function () {
      return {

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

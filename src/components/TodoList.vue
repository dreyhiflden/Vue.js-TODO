<template>
  <div>
    <AddTodoItem />
  </div>
</template>

<script>
  import AddTodoItem from "./AddTodoItemForm.vue";

  export default {
    name: "Todo",
    components: {AddTodoItem},
    data: function () {
      return {

      }
    }
  }
</script>

<style scoped lang="scss">

</style>

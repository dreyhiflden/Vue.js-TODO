<template>
  <div class="filters">
    <ul class="filter-list">
      <li class="filter-list__item filter-list__item--active" @click="changeVisibilityCathegoryMethod('all')">All</li>
      <li class="filter-list__item" @click="changeVisibilityCathegoryMethod('completed')">Completed</li>
      <li class="filter-list__item" @click="changeVisibilityCathegoryMethod('uncompleted')">Uncompleted</li>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from "vuex";


  export default {
    name: "FiltersForTodoItems",
    methods: {
      ...mapActions(['changeVisibilityCathegory']),

      changeVisibilityCathegoryMethod(sortBy) {
        this.changeVisibilityCathegory(sortBy)
      }
    }
  }
</script>

<style scoped lang="scss">
  .filters {
  }

  .filter-list {
    padding: 0;
    display: flex;
  }

  .filter-list__item {
    text-transform: uppercase;
    list-style: none;
    text-align: center;
    padding: 0 40px;
  }

  .filter-list__item--active {
    border-bottom: 2px solid black;
  }
</style>
<template>
  <div class="filters">
    <ul class="filter-list">
      <li class="filter-list__item"
          :class="{
            'filter-list__item--active': (visibility === 'all')
          }"
          @click="filterTodosMethod('all')">
        All
      </li>
      <li class="filter-list__item"
          :class="{
            'filter-list__item--active': (visibility === 'completed')
           }"
          @click="filterTodosMethod('completed')">
        Completed
      </li>
      <li class="filter-list__item"
          :class="{
            'filter-list__item--active': (visibility === 'uncompleted')
           }"
          @click="filterTodosMethod('uncompleted')">
        Uncompleted
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";

  export default {
    name: "FilterControls",
    computed: mapState ({
      visibility: state => state.visibility,
    }),
    methods: {
      ...mapActions(['filterTodos']),

      filterTodosMethod(filterBy) {
        this.filterTodos(filterBy)
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
<template>
  <div class="filter-list__container">
    <ul class="filter-list">
      <li class="filter-list__item"
          :class="{ 'filter-list__item--active': this.isAll }"
          @click="filterTodosMethod('all')">
        All
      </li>
      <li class="filter-list__item"
          :class="{ 'filter-list__item--active': this.isCompleted }"
          @click="filterTodosMethod('completed')">
        Completed
      </li>
      <li class="filter-list__item"
          :class="{ 'filter-list__item--active': this.isUncompleted }"
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

      isAll: function () {
        return this.visibility === 'all'
      },
      isCompleted: function () {
        return this.visibility === 'completed'
      },
      isUncompleted: function () {
        return this.visibility === 'uncompleted'
      }
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
  .filter-list {
    padding: 0;
    margin: 0;
    display: flex;
    background: #2c3a73;
    border-radius: 9999px;
    list-style: none;
    cursor: pointer;
  }

  .filter-list__container {
    margin: 20px 0;
  }

  .filter-list__item {
    margin: 0;
    text-transform: uppercase;
    list-style: none;
    text-align: center;
    border-radius: 9999px;
    color: #fff;
    display: inline-flex;
    font-weight: 500;
    height: 100%;
    padding: .75rem 2rem;
    text-shadow: 0 2px 4px rgba(0,0,0,.25);
    width: 100%;
  }

  .filter-list__item--active {
    background: linear-gradient(320.84deg, #80C3FF -16.99%, #349BF7 18.92%, #714DD6 101.11%);
  }
</style>

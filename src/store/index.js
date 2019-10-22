import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        text: 'First element',
        completed: false,
        id: 1231231231231,
      },
      {
        text: 'Second element',
        completed: false,
        id: 1231231231211,
      }, {
        text: 'Third element',
        completed: false,
        id: 1231231231215,
      },
    ]
  },
  getters: {
    allTodos(state) {
      return state.todos
    }
  },
  mutations: {
    ADD_TODO_ITEM (state, newTodoItem) {
      state.todos.push(newTodoItem)
    },
    TOGGLE_TODO_ITEM_STATE (state, index) {
      state.todos[index].completed === false ? state.todos[index].completed = true : state.todos[index].completed = false
    }
  },
  actions: {
    addTodoItem ({ commit }, newTodoItem) {
      commit('ADD_TODO_ITEM', newTodoItem)
    },
    toggleTodoItemState ( { commit, state }, todoId) {
      let index = state.todos.findIndex(todoItem => todoItem.id === todoId);
      commit('TOGGLE_TODO_ITEM_STATE', index)
    }
  }
})

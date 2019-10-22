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
    ADD_TODO_ITEM(state, newTodoItem) {
      state.todos.push(newTodoItem)
    }
  },
  actions: {
    addTodoItem ({ commit }, newTodoItem) {
      commit('ADD_TODO_ITEM', newTodoItem)
    }
  }
})

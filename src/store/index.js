import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        text: 'First element',
        complete: false,
        id: 1231231231231,
      },
      {
        text: 'Second element',
        complete: false,
        id: 1231231231211,
      }, {
        text: 'Third element',
        complete: false,
        id: 1231231231215,
      },
    ]
  },
  getters: {
    getTodos(state) {
      return state.todos
    }
  }
})

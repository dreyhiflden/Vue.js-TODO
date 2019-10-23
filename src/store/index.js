import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

function findIndexById(state, todoId) {
  return state.todos.findIndex(todoItem => todoItem.id === todoId)
}

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
    ],
  },
  getters: {
    allTodos(state) {
      return state.todos
    },
  },
  mutations: {
    ADD_TODO_ITEM(state, newTodoItem) {
      state.todos.push(newTodoItem)
    },
    TOGGLE_COMPLETE_STATUS(state, index) {
      state.todos[index].completed === false ? state.todos[index].completed = true : state.todos[index].completed = false
    },
    EDIT_TODO_ITEM(state, value){
      let todos = state.todos;
      state.todos = todos;
    },
    REMOVE_TODO_ITEM (state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    },

  },
  actions: {
    addTodoItem ({ commit }, newTodoItem) {
      commit('ADD_TODO_ITEM', newTodoItem)
    },
    toggleCompletedStatus ( { state, commit }, todoId) {
      let index = findIndexById(state, todoId);
      commit('TOGGLE_COMPLETE_STATUS', index)
    },
    editTodoItem ({ state, commit, dispatch }, todoObject) {
      commit('EDIT_TODO_ITEM', todoObject);
    },
    removeTodoItem ({ commit }, todo) {
      commit('REMOVE_TODO_ITEM', todo)
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

function findIndexById(state, todoId) {
  return state.todos.findIndex(todoItem => todoItem.id === todoId)
}

let filters = {
  all: function (todos) {
    return todos
  },
  uncompleted: function (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
};

export default new Vuex.Store({
  strict: true,
  state: {
    todos: [
      {
        text: 'First element',
        completed: true,
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
    visibility: 'all',
  },
  getters: {
    todos: state => state.todos,
    filteredTodos: state => filters[state.visibility](state.todos)
  },
  mutations: {
    ADD_TODO_ITEM (state, newTodoItem) {
      state.todos.push(newTodoItem)
    },
    TOGGLE_COMPLETE_STATUS (state, index) {
      state.todos[index].completed === false ? state.todos[index].completed = true : state.todos[index].completed = false
    },
    EDIT_TODO_ITEM (state, value){
      let todos = state.todos;
      state.todos = todos;
    },
    REMOVE_TODO_ITEM (state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    },
    CHANGE_VISIBILITY_CATHEGORY (state, sortBy) {
      state.visibility = sortBy
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
    },
    changeVisibilityCathegory ( {commit}, sortBy ) {
      commit('CHANGE_VISIBILITY_CATHEGORY', sortBy)
    },
    clearCompleted ({ state, commit }) {
      state.todos.filter(todo => todo.completed)
        .forEach(todo => {
          commit('REMOVE_TODO_ITEM', todo)
        })
    }
  }
})

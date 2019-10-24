import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

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

const vuexPersist = new VuexPersist({
  key: 'todo-appv1',
  storage: window.localStorage
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    todos: [],
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
    TOGGLE_COMPLETE_STATUS (state, todo) {
      todo.completed = !todo.completed;
    },
    EDIT_TODO_ITEM (state, payload){
      state.todos[payload.todoIndex].text = payload.newText;
    },
    REMOVE_TODO_ITEM (state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    },
    FILTER_TODOS (state, filterBy) {
      state.visibility = filterBy
    },
  },
  actions: {
    addTodoItem ({ commit }, newTodoItem) {
      commit('ADD_TODO_ITEM', newTodoItem)
    },
    toggleCompletedStatus ( { state, commit }, todo) {
      commit('TOGGLE_COMPLETE_STATUS', todo)
    },
    editTodoItem ({ state, commit, dispatch }, payload) {
      let index = findIndexById(state, payload.todoId);

      commit('EDIT_TODO_ITEM', {
        newText: payload.newText,
        todoIndex: index,
      });
    },
    removeTodoItem ({ commit }, todo) {
      commit('REMOVE_TODO_ITEM', todo)
    },
    filterTodos ( {commit}, filterBy ) {
      commit('FILTER_TODOS', filterBy)
    },
    clearCompleted ({ state, commit }) {
      state.todos.filter(todo => todo.completed)
        .forEach(todo => {
          commit('REMOVE_TODO_ITEM', todo)
        })
    },
    completeAll ({ state, commit }) {
      state.todos.filter(todo => !todo.completed)
        .forEach(todo => {
          commit('TOGGLE_COMPLETE_STATUS', todo)
        })
    }
  }
})

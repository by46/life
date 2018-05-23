import Vuex from 'vuex'
import Vue from 'vue'
import {LOGIN} from './mutation_types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    login: false,
    todos: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false}
    ]
  },
  mutations: {
    increment(state) {
      state.count++
    },
    [LOGIN](state) {
      state.login = true
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    counter: state => state.count * 1.2,
    loginState: state => state.login
  }
})

export default store

import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state() {
    return {
      todos: [] // 할일 목록
    }
  },
  mutations: {
    setTodos(state, payload) { // 서버에서 가져온 투두스를 페이로드로 받아서 투두스를 갱신한다.
      state.todos = payload
    },
    addTodo(state,payload) {
      state.todos.push(payload)
    }
  },
  actions: {
    async readTodos({ commit }) {
      const res = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'KDT2_ShinJaeIL'
        }
      })
      console.log(res)
      commit('setTodos', res.data)
    },
    async createTodo({ commit }, title) {
      const res = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'KDT2_ShinJaeIL'
        },
        data: {
          title
        }
      })
      commit('addTodo', res.data)
    },
    async deleteTodo(context, id) {
      await axios({
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,// 아이디 값을 찾아 넣어야해
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'KDT2_ShinJaeIL'
        }
      })      
    },
    async editTodo(id) {
      await axios({
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,// 아이디 값을 찾아 넣어야해
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'apikey': 'FcKdtJs202204',
          'username': 'KDT2_ShinJaeIL'
        }
      })
    }
  }
})

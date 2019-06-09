import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    studentName: ''
  },
  mutations: {
    SET_STUDENT_NAME: (state, name) => {
      state.studentName = name
    }
  },
  actions: {
    setStudentName ({ commit }, name) {
      commit('SET_STUDENT_NAME', name)
    }
  },
  getters: {
    studentName (state) {
      return state.studentName
    }
  }
})

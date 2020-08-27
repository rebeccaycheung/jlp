import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 0,
    questions: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
      16: 0,
      17: 0,
    }
  },
  mutations: {
    setTotal(state, value) {
      state.total = value
    },

    setQuestion(state, payload) {
      state.questions[payload.index] = payload.num
    }
  },
  actions: {
  },
  modules: {
  }
})

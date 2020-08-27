import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    total: 0,
    questions: {
      q1: 0,
      q2: 0,
      q3: 0,
      q4: 0,
      q5: 0,
      q6: 0,
      q7: 0,
      q8: 0,
      q9: 0,
      q10: 0,
      q11: 0,
      q12: 0,
      q13: 0,
      q14: 0,
      q15: 0,
      q16: 0,
      q17: 0,
    }
  },
  mutations: {
    increment(state) {
      state.total++
    },

    decrement(state) {
      state.total--
    },

    setQuestion(state, payload) {
      switch(payload.index) {
        case(1):
          state.questions.q1 = payload.num
          break
        case(2):
          state.questions.q2 = payload.num
          break
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

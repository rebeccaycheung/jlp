import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    whichQuiz: 0,
    total: 0,
    questions: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
      12: null,
      13: null,
      14: null,
      15: null,
      16: null,
      17: null,
    }
  },
  getters: {
    getAnswer: (state) => (index: number) => {
      const values = Object.values(state.questions)
      return values[index-1]
    }
  },
  mutations: {
    setTotal(state, value) {
      state.total = value
    },

    setQuestion(state, payload: Record<string, any>) {
      Object.assign(state.questions, payload)
    },

    setQuiz(state, value) {
      state.whichQuiz = value
    }
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    board: [
      [
        false,
        'X',
        'O',
      ],
      [
        false,
        false,
        false,
      ],
      [
        false,
        'X',
        false,
      ],
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

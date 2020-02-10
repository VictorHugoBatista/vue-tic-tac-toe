import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    turn: 'O',
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
    changeTurn(state) {
      state.turn = 'O' === state.turn ? 'X' : 'O'
    },
  },
  actions: {
  },
  modules: {
  }
})

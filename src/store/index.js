import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    turn: 'O',
    board: [
      [
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
      ],
    ],
  },
  mutations: {
    selectBoardItem(state, {row, col}) {
      const newRow = state.board[row].slice(0)
      newRow[col] = state.turn
      Vue.set(state.board, row, newRow)
    },
    changeTurn(state) {
      state.turn = 'O' === state.turn ? 'X' : 'O'
    },
  },
  actions: {
    makeTurn({commit, state}, {row, col}) {
      if ('undefined' === typeof state.board[row] ||
        'undefined' === typeof state.board[row][col] ||
        state.board[row][col]) {
          return
      }
      commit('selectBoardItem', {row, col})
      commit('changeTurn')
    }
  },
  modules: {
  }
})

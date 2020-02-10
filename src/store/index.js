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
    selectBoardItem(state, {row, col}) {
      if ('undefined' === typeof state.board[row] ||
        'undefined' === typeof state.board[row][col] ||
        state.board[row][col]) {
          return
      }
      const newBoard = state.board
      newBoard[row][col] = state.turn
      state.board = []
      state.board = newBoard
      state.turn = 'O' === state.turn ? 'X' : 'O'
    },
  },
  actions: {
  },
  modules: {
  }
})

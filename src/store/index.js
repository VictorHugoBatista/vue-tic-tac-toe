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
    makeTurn({commit, state, dispatch}, {row, col}) {
      if ('undefined' === typeof state.board[row] ||
        'undefined' === typeof state.board[row][col] ||
        state.board[row][col]) {
          return
      }
      commit('selectBoardItem', {row, col})
      const gameFinished = dispatch('verifyGameFinished', {row, col})
      commit('changeTurn')
      return gameFinished
    },
    verifyGameFinished({state}, {row, col}) {
      let completedRow = true,
        completedCol = true;
      for (let i = 0; i < 3; i++) {
        if (state.turn !== state.board[i][col]) {
          completedRow = false
        }
        if (state.turn !== state.board[row][i]) {
          completedCol = false
        }
      }
      return completedRow || completedCol ? state.turn : false
    },
  },
  modules: {
  }
})

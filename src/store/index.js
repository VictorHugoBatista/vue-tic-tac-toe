import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const boardItemDiagonal = {
  isDiagonal: true,
  content: false,
}

const boardItemNotDiagonal = {
  isDiagonal: false,
  content: false,
}

const initialBoard = [
  [
    {...boardItemDiagonal},
    {...boardItemNotDiagonal},
    {...boardItemDiagonal},
  ],
  [
    {...boardItemNotDiagonal},
    {...boardItemDiagonal},
    {...boardItemNotDiagonal},
  ],
  [
    {...boardItemDiagonal},
    {...boardItemNotDiagonal},
    {...boardItemDiagonal},
  ],
];

export default new Vuex.Store({
  state: {
    turn: 'O',
    board: [...initialBoard],
  },
  mutations: {
    selectBoardItem(state, {row, col}) {
      const newRow = state.board[row].slice(0)
      newRow[col].content = state.turn
      Vue.set(state.board, row, newRow)
    },
    changeTurn(state) {
      state.turn = 'O' === state.turn ? 'X' : 'O'
    },
    clearBoard(state) {
      state.board = [...initialBoard]
    },
  },
  actions: {
    makeTurn({commit, state, dispatch}, {row, col}) {
      if ('undefined' === typeof state.board[row] ||
        'undefined' === typeof state.board[row][col] ||
        state.board[row][col].content) {
          return
      }
      commit('selectBoardItem', {row, col})
      const gameFinished = dispatch('verifyGameFinished', {row, col})
      commit('changeTurn')
      return gameFinished
    },
    verifyGameFinished({state}, {row, col}) {
      let completedRow = true,
        completedCol = true,
        completeRow1 = true,
        completeRow2 = true
      for (let i = 0, iinverse = 2; i < 3; i++, iinverse--) {
        if (state.turn !== state.board[i][col].content) {
          completedRow = false
        }
        if (state.turn !== state.board[row][i].content) {
          completedCol = false
        }
        if (state.turn !== state.board[i][i].content) {
          completeRow1 = false
        }
        if (state.turn !== state.board[iinverse][i].content) {
          completeRow2 = false
        }
      }
      return completedRow || completedCol || completeRow1 || completeRow2 ? state.turn : false
    },
  },
  modules: {
  }
})

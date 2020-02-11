import Vue from 'vue'

const createInitialBoard = () => {
  const boardItem = {
    content: false,
  }
  const initialBoard = [
    [
      {...boardItem},
      {...boardItem},
      {...boardItem},
    ],
    [
      {...boardItem},
      {...boardItem},
      {...boardItem},
    ],
    [
      {...boardItem},
      {...boardItem},
      {...boardItem},
    ],
  ]
  return initialBoard
}

export default {
  state: {
    turn: 'O',
    board: createInitialBoard(),
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
      state.board = createInitialBoard()
    },
  },
  actions: {
    async makeTurn({commit, state, dispatch}, {row, col}) {
      if ('undefined' === typeof state.board[row] ||
        'undefined' === typeof state.board[row][col] ||
        state.board[row][col].content) {
          return
      }
      commit('selectBoardItem', {row, col})
      const gameWinner = await dispatch('verifyGameFinished', {row, col})
      commit('changeTurn')
      return gameWinner
    },
    async verifyGameFinished({state}, {row, col}) {
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
    async isBoardFull({state}) {
      let boardFull = true
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (! state.board[i][j].content) {
            boardFull = false
          }
        }
      }
      return boardFull
    },
  },
}

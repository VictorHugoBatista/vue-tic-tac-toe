<template>
  <div class="board">
    <b-row no-gutters class="board-row"
      v-for="(row, rowNumber) in board" v-bind:key="rowNumber">
      <b-col class="board-col" v-for="(button, buttonNumber) in row" v-bind:key="buttonNumber"
        v-on:click="markBoard(rowNumber, buttonNumber)"
        v-bind:class="{empty: ! $store.state.board[rowNumber][buttonNumber]}">
        <BoardButton :selection="button" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BoardButton from './BoardButton'

export default {
  name: 'Board',
  components: {
    BoardButton,
  },
  methods: {
    markBoard(row, col) {
      this.$store.dispatch('makeTurn', {row, col})
        .then(gameWinner => {
          if (gameWinner) {
            alert(`Player '${gameWinner}' won the game`)
          }
        })
    },
  },
  computed: {
    board() {
      return this.$store.state.board
    },
  },
}
</script>

<style lang="scss">
.board {
  .board-row {
    border-bottom: 4px solid black;

    &:last-child {
      border-bottom: none;
    }
  }

  .board-col {
    border-right: 4px solid black;

    &:last-child {
      border-right: none;
    }

    &.empty {
      cursor: pointer;
    }
  }
}
</style>

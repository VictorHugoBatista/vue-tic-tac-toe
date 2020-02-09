<template>
  <div class="board">
    <b-row no-gutters class="board-row"
      v-for="(row, rowNumber) in this.$store.state.board" v-bind:key="rowNumber">
      <b-col class="board-col" v-for="(button, buttonNumber) in row" v-bind:key="buttonNumber">
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
}
</script>

<style lang="scss">
.board {
  .board-row {
    border-bottom: 2px solid black;

    &:last-child {
      border-bottom: none;
    }
  }

  .board-col {
    border-right: 2px solid black;

    &:last-child {
      border-right: none;
    }
  }
}
</style>

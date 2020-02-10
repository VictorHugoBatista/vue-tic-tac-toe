<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet">
    <div class="container">
      <h1 class="text-center">Tic tac toe in Vue</h1>
      <Board />
      <div class="mt-5 text-center">
        <h2 class="mb-0">Current player</h2>
        <BoardButton :selection="this.$store.state.turn" />
      </div>
      <div class="text-center mt-5">
        <github-button class="mr-3" href="https://github.com/VictorHugoBatista">Follow</github-button>
        <github-button data-icon="star" href="https://github.com/VictorHugoBatista/vue-tic-tac-toe">Star</github-button>
      </div>
    </div>
  </div>
</template>

<script>
import Board from './components/tic-tac-toe/Board'
import BoardButton from './components/tic-tac-toe/BoardButton'
import GithubButton from 'vue-github-button'

export default {
  name: 'App',
  components: {
    Board,
    BoardButton,
    GithubButton,
  },
}
</script>

<style lang="scss">
* {
  font-family: 'Indie Flower', cursive;
}

h1 {
  margin: 50px 0;
}
</style>

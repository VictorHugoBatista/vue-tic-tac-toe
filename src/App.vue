<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet">
    <div class="container">
      <Board />
    </div>
  </div>
</template>

<script>
import Board from './components/tic-tac-toe/Board'

export default {
  name: 'App',
  components: {
    Board,
  },
}
</script>

<style lang="scss">
</style>

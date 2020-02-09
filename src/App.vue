<template>
  <div id="app">
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

<template>
  <div>
    <b-row v-for="(row, rowNumber) in this.$store.state.board" v-bind:key="rowNumber">
      <b-col v-for="(button, buttonNumber) in row" v-bind:key="buttonNumber">
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
</style>

<template>
  <div class="board-button">
    {{ selection ? selection : '' }}
  </div>
</template>

<script>
export default {
  name: 'BoardButton',
  props: ['selection'],
}
</script>

<style lang="scss">
.board-button {
  font-size: 40px;
  font-weight: bold;
  line-height: 0;
  text-align: center;
  padding: 30px;
}
</style>

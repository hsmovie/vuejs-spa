<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  @import './style/reset';
  @import './style/variable';

  #app {
    position: relative;
    overflow: hidden;
    min-width: $min-width;
  }
</style>

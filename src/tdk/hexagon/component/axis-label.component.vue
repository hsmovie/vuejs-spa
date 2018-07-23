<template>
  <text :x="label.x" :y="label.y">{{label.title}}</text>
</template>

<script>
  export default {
    props: {
      label: Object
    }
  }
</script>

<style scoped>
</style>

<template>
  <div>
    <carousel
      id="slider_vertical"
      :pagination-visible="true">
      <slot></slot>
    </carousel>
  </div>
</template>

<script>
  import carousel from '../tdk/carousel/carousel.component'

  export default {
    components: {
      carousel
    }
  }
</script>

<style scoped>
</style>

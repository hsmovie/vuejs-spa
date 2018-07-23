<template>
  <div @click="clicked" class="radio-inline-wrapper">
    <img src="/static/png/btn_radio_on.png" alt="x" v-if="isActive" class="img">
    <img src="/static/png/btn_radio_off.png" alt="x" v-else class="img">
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      value: [String, Object, Array, Number, Boolean],
      tValue: [String, Object, Array, Number, Boolean]
    },
    methods: {
      clicked () {
        if (this.tValue !== this.value) {
          this.$emit('input', this.tValue)
          this.$emit('click', this.tValue)
        }
      }
    },
    computed: {
      isActive () {
        return JSON.stringify(this.value) === JSON.stringify(this.tValue)
      }
    }
  }
</script>

<style scoped lang="scss">
  .radio-inline-wrapper {
    width: 225px;
    height: 56px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    .img {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }
    .title {
      display: inline;
      position: absolute;
      font-size: 16px;
      color: #424242;
      overflow: hidden;
      word-wrap: break-word;
    }
  }
</style>

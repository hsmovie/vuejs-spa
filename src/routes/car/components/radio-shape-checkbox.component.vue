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
        const value = this.value
        const tValue = this.tValue
        const index = value.indexOf(tValue)
        if (index === -1) {
          value.push(tValue)
        } else {
          value.splice(index, 1)
        }
        this.$emit('input', value)
      }
    },
    computed: {
      isActive () {
        return this.value.includes(this.tValue)
      }
    }
  }
</script>

<style scoped lang="scss">
.radio-inline-wrapper {
  width: 225px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 56px;
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
    overflow:hidden;
    word-wrap:break-word;
  }
}
</style>

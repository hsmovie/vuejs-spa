<template>
  <div class="checkbox-wrapper" @click="clicked">
    <button :class="[{active: isActive}, 'button']">
      <img src="/static/png/btn_checkbox_on.png" v-if="isActive" class="img">
      <img src="/static/png/btn_checkbox_off.png" v-else class="img">
      <label class="label">{{ title }}</label>
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      value: Array,
      tValue: [String, Number, Object, Array],
      title: String,
      activeClass: String
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
        return this.value.indexOf(this.tValue) === -1 ? '' : 'active'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../style/variable';
  @import '../style/mixin';
  .checkbox-wrapper {
    display: inline-block;
    margin-bottom: 30px;
    &:nth-child(2n-1) {
      margin-right: 15px;
    }
    .button {
      background-color: #fff;
      padding: 0 16px;
      display: flex;
      align-items: center;
      border-radius: 56px;
      height: 56px;
      width: 265px;
      border: 1px solid $gray;
    }
    .img {
      height: 24px;
      width: 24px;
      margin-right: 12px;
    }
    .label {
      font-size: 16px;
    }
  }
  .active {
    background-color: $checkbox-seleted;
  }
</style>

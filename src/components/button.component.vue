<template>
  <button :class="[{ small, large, gray }]" @click="clicked" class="button" :disabled="disabled" :style="{ width: width + 'px' }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    small: Boolean,
    large: Boolean,
    gray: Boolean,
    width: String
  },
  methods: {
    clicked () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../style/variable';
  @import '../style/mixin';
  .button {
    @include fontAndColor(18px, #ffffff);
    height: 56px;
    background-color: $primary-black;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    min-width: 120px;
    transition: all .15s ease-in-out;
    border-radius: 8px;
    &:active {
      background-color: #000000;
    }
    &:disabled {
      background-color: $disabled;
      cursor: not-allowed;
    }
    &.large {
      width: 100%;
    }
    &.gray {
      background-color: #575757;
    }
    &.small {
      font-size: 16px;
      width: 200px;
    }
  }
</style>

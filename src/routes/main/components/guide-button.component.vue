<template>
  <div class="guide-button-wrapper">
    <label class="label">나만의 자동차 보험 설계하기</label>
    <button class="button" @click="clicked">시작</button>
  </div>
</template>

<script>
  export default {
    methods: {
      clicked () {
        this.$emit('click')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../style/variable';
  @import '../../../style/mixin';

  .guide-button-wrapper {
    z-index: 3;
    width: $min-width;
    left: 50%;
    transform: translate(-50%);
    height: 120px;
    background-color: $primary-black;
    border-radius: 18px;
    position: absolute;
    margin-top: -60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .label {
      @include fontAndColor(18px, #ffffff);
      margin-left: 34px;
    }
    .button {
      @include fontAndColor(18px, $primary-black);
      border-radius: 8px;
      height: 56px;
      width: 160px;
      background-color: #ffffff;
      margin-right: 34px;
      &:active {
        background-color: #eaeaea;
      }
      &:disabled {
        color: #bdbdbd;
      }
    }
  }
</style>

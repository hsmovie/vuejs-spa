<template>
  <div class="card-container-wrapper">
    <button class="button-icon" @click="openModal" v-if="help">
      <simple-svg
        filepath="/static/svg/btn_tip.svg"
        fill="#c8c8c8"
        stroke="none"
        height="20"
        width="20"
      />
    </button>
    <div class="title-box">
      <div v-html="title" class="title"></div>
      <div v-html="subTitle" v-if="subTitle" class="sub-title"></div>
    </div>
    <slot></slot>
    <div class="tip-box" v-if="tip">
      <img src="/static/png/ic_tip.png">
      {{ tip }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String,
    tip: String,
    help: Boolean
  },
  methods: {
    openModal () {
      this.$emit('openModal')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../style/variable';
@import '../../../style/mixin';

.card-container-wrapper {
  background-color: #fff;
  box-shadow: 14px 14px 14px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 75px 40px 64px;
  margin-bottom: 20px;
  position: relative;
  z-index: 0;

  .title-box {
    margin-bottom: 53px;
    text-align: center;

    .title {
      @include fontAndColor(30px, #151515);
    }

    .sub-title {
      @include fontAndColor(18px, #585858);
      margin-top: 12px;
    }
  }

  .tip-box {
    font-size: 14px;
    color: #8e8e8e;
    margin-top: 25px;
  }

  .button-icon {
    float: right;
    position: absolute;
    right: 20px;
    top: 20px;
  }
}
</style>

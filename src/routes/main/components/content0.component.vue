<template>
  <div class="content0-wrapper">
    <div class="title">
      설계는 한번에, 비교와 선택은 보다 합리적으로
    </div>
    <div class="sub-title">
      쉽고 편리한 자동차보험 선택의 여정을 경험하세요
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  @import '../../../style/mixin';
  @import '../../../style/variable';

  .content0-wrapper {
    width: $min-width;
    margin: 60px auto 0;
    height: 370px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      @include fontAndColor(40px, #151515);
    }
    .sub-title {
      @include fontAndColor(18px, #585858);
    }
  }
</style>

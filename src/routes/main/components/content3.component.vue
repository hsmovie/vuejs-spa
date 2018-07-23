<template>
  <div class="content3-wrapper" id="blogSlick">
    <div class="title">
      알면 알수록 유익한 자동차보험 사용법
    </div>
    <blog-slick></blog-slick>
  </div>
</template>

<script>
  import blogSlick from '../../../components/blog-slick.component'

  export default {
    components: {
      blogSlick
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../style/mixin';
  @import '../../../style/variable';

  .content3-wrapper {
    width: $min-width;
    margin: 120px auto;
    height: 556px;
    .title {
      @include fontAndColor(40px, #151515);
      text-align: center;
      margin-bottom: 100px;
    }
  }
</style>

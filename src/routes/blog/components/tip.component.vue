<template>
  <div class="tip" v-if="tip">
    <div class="img">
      <img src="/static/png/ic_blog_tip.png">
    </div>
    <div class="text" v-html="tip">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tip: String
    }
  }
</script>
<style scoped lang="scss">
  @import "../../../style/variable";

  .tip {
    margin-top: 18px;
    color: $primary-blue;
    overflow: hidden;

    .img {
      float: left;
      width: 30px;
      margin-top: 3px;
    }

    .text {
      float: left;
      width: calc(100% - 40px);
      padding-left: 10px;
    }
  }
</style>

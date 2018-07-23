<template>
  <div class="margin-bottom">
    <div class="title" v-html="title" v-if="title">

    </div>
    <div class="content" v-html="content" v-if="content">

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      content: String
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../style/variable";

  .border-box {
    // border: 1px solid $gray;
    // padding: 40px;
    color: $font-color-3;
    margin-bottom: 56px;

    .title {
      font-size: 30px;
      text-align: center;
    }

    .content {
      font-size: 16px;
      text-align: center;
    }
  }
</style>

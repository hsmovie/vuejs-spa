<template>
  <div class="article">
    <div class="title" v-html="title" v-if="title"></div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>
<style scoped lang="scss">
  @import "../../../style/variable";

  .article {
    font-size: 16px;
    margin-bottom: 56px;

    .title {
      font-size: 20px;
      color: $font-color-3;
    }

    .content {
      color: $font-color;
      margin-top: 10px;
    }
  }
</style>

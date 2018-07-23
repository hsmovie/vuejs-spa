<template>
  <div class="title-box">
    <img :src="'/static/blog/' + imgSrc" class="img">
    <div class="text-box">
      <div class="title" v-html="title">
      </div>
      <hr>
      <div class="tags">
        <div class="tag" v-for="(tag, index) of tags" :key="index">
          #{{tag}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      imgSrc: String,
      title: String,
      tags: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../style/variable";

  .title-box {
    position: relative;
    color: white;

    .img {
      width: 100%;
      height: 578px;
      object-fit: cover;
      display: block;
    }

    .text-box {
      bottom: 108px;
      left: 0;
      right: 0;
      margin: auto;
      position: absolute;
      width: 768px;
      text-align: left;

      .title {
        font-size: 48px;
        margin-bottom: 42px;
      }

      hr {
        width: 52px;
        height: 1px;
        background-color: #fff;
        margin-bottom: 24px;
      }

      .tags {
        font-size: 16px;
        color: $font-color-3;

        .tag {
          border-radius: 26px;
          height: 26px;
          padding: 0 10px;
          margin-bottom: 5px;
          background-color: rgba(255, 255, 255, .26);
          float: left;
          margin-right: 6px;

          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
</style>

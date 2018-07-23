<template>
  <div>
    <title-box :imgSrc="imgSrc" :title="title" :tags="tags">
    </title-box>
    <div class="body">
      <sub-title-box v-if="subTitle || subContent" :title="subTitle" :content="subContent">
      </sub-title-box>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import titleBox from './sub-components/title-box.component'
  import subTitleBox from './sub-components/sub-title-box.component'

  export default {
    props: {
      imgSrc: String,
      title: String,
      tags: {
        type: Array,
        default: []
      },
      subTitle: String,
      subContent: String
    },
    components: {
      titleBox,
      subTitleBox
    }
  }
</script>
<style lang="scss">
  @import "../../../style/blog";
</style>

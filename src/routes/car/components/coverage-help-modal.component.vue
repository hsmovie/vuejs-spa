<template>
  <modal ref="modal">
    <div class="contents-wrapper">
      <div class="title-wrapper">
        {{ data.title }}
      </div>
      <div class="sub-title-wrapper" v-html="data.subTitle"></div>
      <div class="info-wrapper" v-for="(item, index) in data.contents" :key="index">
        <img :src="item.img" class="img">
        <div class="info-content" v-html="item.content">
        </div>
      </div>
      <div class="tip-box" v-if="data.tip">
        <img src="/static/png/ic_tip.png">
        <span v-html="data.tip"></span>
      </div>
    </div>
    <div class="button-wrapper">
      <tutto-button large gray class="button" @click="close">닫기</tutto-button>
    </div>
  </modal>
</template>

<script>
import modal from '../../../tdk/modal/modal.component'
import button from '../../../components/button.component'
export default {
  props: {
    data: Object
  },
  methods: {
    open () {
      this.$refs.modal.open()
    },
    close () {
      this.$refs.modal.close()
    }
  },
  components: {
    modal,
    'tutto-button': button
  }
}
</script>

<style scoped lang="scss">
@import '../../../style/variable';
@import '../../../style/mixin';
.contents-wrapper {
  width: 550px;
  max-height: 480px;
  overflow: scroll;
  padding: 0 46px;
  text-align: center;
  .title-wrapper {
    margin-top: 44px;
    margin-bottom: 6px;
    font-size: 22px;
  }
  .sub-title-wrapper {
    font-size: 16px;
    margin-bottom: 36px;
  }
  .img {
    vertical-align: middle;
    width: 46px;
    height: 46px;
  }
  .info-content {
    width: 510px;
    overflow:hidden;
    word-wrap:break-word;
    vertical-align: middle;
    display: inline-block;
  }
}
.button-wrapper {
  height: 76px;
  background-color: #7d8084;
  border-radius: 0px 0px 8px 8px;
}
.button {
  margin-top: 20px;
}

.tip-box {
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 14px;
  color: #8e8e8e;
  text-align: center;
}

  .info-wrapper {
    min-height: 79px;
    padding: 38px 0;
    font-size: 16px;
    text-align: left;
    display: flex;
    align-items: center;
    border-bottom: 1px solid $gray;
    &:last-child {
      border-bottom: none;
    }
  }
  
</style>

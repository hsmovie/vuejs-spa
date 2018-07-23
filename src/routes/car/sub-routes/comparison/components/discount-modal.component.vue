<template>
  <modal ref="modal">
    <div class="contents-wrapper">

    </div>
    <div class="button-wrapper">
      <tutto-button width="310" class="button" @click="okay">보험사 바로가기</tutto-button>
      <tutto-button width="310" gray class="button close-button" @click="close">닫기</tutto-button>
    </div>
  </modal>
</template>

<script>
  import modal from '../../../tdk/modal/modal.component'
  import button from '../../components/button.component'

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
  @import '../../../../../style/variable';
  @import '../../../../../style/mixin';

  .contents-wrapper {
    width: 550px;
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

    .info-wrapper {
      min-height: 79px;
      padding: 38px 0;
      font-size: 16px;
      text-align: left;
      display: flex;
      align-items: center;
      border-bottom: 1px solid $gray;
      &:last-child {
        border: none;
      }
    }
    .img {
      vertical-align: middle;
      width: 46px;
      height: 46px;
      margin-left: 46px;
      margin-right: 34px;
    }
    .info-content {
      width: 390px;
      overflow: hidden;
      word-wrap: break-word;
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
</style>

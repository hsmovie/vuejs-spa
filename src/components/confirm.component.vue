<template>
  <div>
    <modal ref="modal">
      <div class="content-wrapper">
        <img src="../../static/png/img_popup_check.png" class="img">
        <div class="title">
          {{ title }}
        </div>
      </div>
      <div class="button-wrapper">
        <tutto-button small class="button" @click="okay">확인</tutto-button>
        <tutto-button small gray class="button" @click="close">취소</tutto-button>
      </div>
    </modal>
  </div>
</template>

<script>
import modal from '../tdk/modal/modal.component'
import button from './button.component'
export default {
  props: {
    title: String
  },
  methods: {
    open (okFn, closeFn) {
      this.okFn = okFn
      this.closeFn = closeFn
      this.$refs.modal.open()
    },
    close () {
      this.$refs.modal.close()
    },
    okay () {
      if (this.okFn) {
        this.okFn()
      }
      this.$emit('okay')
      this.close()
    }
  },
  components: {
    modal,
    'tutto-button': button
  }
}
</script>

<style scoped lang="scss">
.content-wrapper {
  padding-top: 64px;
  text-align: center;
  .img {
    height: 74px;
    width: 74px;
    margin-bottom: 18px;
  }
  .title {
    margin-bottom: 60px;
  }
}
.button-wrapper {
  height: 76px;
  width: 410.5px;
  background-color: #7d8084;
  .button {
    margin-top: 20px;
    &:last-child {
      margin-left: 6.5px;
    }
  }
}
</style>

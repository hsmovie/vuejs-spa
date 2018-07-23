<template>
  <modal ref="modal">
    <div id="top" class="contents-wrapper" v-if="data">
      <div class="title-wrapper" v-html="data.title">
      </div>
      <div class="info-wrapper" v-for="(item, index) in data.contents" :key="index">
        <div class="info-title">
          {{ item.title }}
        </div>
        <div class="info-content" v-html="item.content">
        </div>
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
  height: 748px;
  overflow: scroll;
  padding: 0 46px 0 46px;
  text-align: center;
  .title-wrapper {
    margin-top: 44px;
    margin-bottom: 6px;
    font-size: 22px;
  }
  .info-wrapper {
    min-height: 120px;
    font-size: 16px;
    text-align: left;
    border-bottom: 1px solid $gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:last-child {
      border: none;
    }
  }
  .info-title {
    margin-bottom: 6px;
  }
  .info-content {
    color: $font-color;
  }
}
.button-wrapper {
  height: 76px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0px 0px 8px 8px;
}
.button {
  margin-top: 20px;
}
</style>

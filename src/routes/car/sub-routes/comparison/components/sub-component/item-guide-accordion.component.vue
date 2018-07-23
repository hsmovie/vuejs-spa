<template>
  <accordion ref="accordion" @toggleHook="toogleHook">
    <div slot="header" :class="[{ opened : isAccordionOpened }, 'item-guide-header']">
      <img src="/static/png/btn_checkbox_on.png" class="checkbox-icon">
      <!-- <img src="/static/png/btn_checkbox_off.png"> -->
      <label class="item-guide-label">{{ data.title }}</label>
      <button class="arrow-down-icon" @click="openAccordion">
        <simple-svg
          filepath="/static/svg/btn_dropdown_down.svg"
          fill="#c0c0c0"
          stroke="none"
          height="18"
          width="12"
        />
      </button>
    </div>
    <div slot="body" class="item-guide-body" v-html="data.description">
    </div>
  </accordion>
</template>

<script>
import accordion from '../../../../../../tdk/accordion/accordion.component'
export default {
  props: {
    data: Object
  },
  data () {
    return {
      isAccordionOpened: false
    }
  },
  methods: {
    openAccordion () {
      this.$refs.accordion.toggle()
    },
    toogleHook (flag) {
      this.isAccordionOpened = flag
    }
  },
  components: {
    accordion
  }
}
</script>

<style scoped lang="scss">
@import "../../../../../../style/variable";
.item-guide-header {
  display: flex;
  padding: 0 16px;
  height: 56px;
  align-items: center;
  position: relative;
  border: 2px dashed $gray;
  // transition: border .5s;
  &.opened {
    border-bottom: none;
  }
  .checkbox-icon {
    height: 24px;
    width: 24px;
    margin-right: 16px;
  }
  .arrow-down-icon {
    position: absolute;
    right: 16px;
    cursor: pointer;
  }
}
.item-guide-body {
   border-left: 2px dashed $gray;
   border-right: 2px dashed $gray;
   border-bottom: 2px dashed $gray;
   padding: 0 30px 28px;
}
</style>

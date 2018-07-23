<template>
  <div class="item-card-wrap">
    <img :src="icon" class="background-icon">
    <div class="title" v-html="title">
    </div>
    <div class="description" v-html="description">
      <div class="line" v-if="tip">
      </div>
    </div>
    <div v-if="tip" class="tip">
      <div class="border"></div>
      <img src="/static/png/ic_tip.png" class="tip-icon">
      <span v-html="tip.title"></span>
      <div v-html="tip.content"></div>
    </div>
    <div class="question">
      {{question}}
    </div>

    <div v-if="accordionData">
      <radio-accordion :data="accordionData" @callback="radioAccordionCallback" itemCard>
      </radio-accordion>
    </div>

    <div class="radio" v-else>
      <t-radio class="radio" :title="leftLabel" v-model="radioValue"
               :t-value="true" @click="radioClick"></t-radio>
      <t-radio class="radio" :title="rightLabel" v-model="radioValue"
               :t-value="false" @click="radioClick"></t-radio>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
  import tRadio from '../../../../../../components/radio-inline.component'
  import radioAccordion from '../../../../../../components/radio-accordion.component'
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      question: {
        type: String,
        default: ''
      },
      tip: Object,
      icon: String,
      value: Boolean,
      accordionData: Object,
      leftLabel: {
        type: String,
        default: '네, 추가해주세요.'
      },
      rightLabel: {
        type: String,
        default: '아니오'
      }
    },
    data () {
      return {
        radioValue: this.value
      }
    },
    methods: {
      radioClick () {
        this.$emit('click', this.radioValue)
      },
      radioAccordionCallback (val) {
        this.$emit('radioAccordionCallback', val)
      }
    },
    components: {
      tRadio,
      radioAccordion
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../../../style/variable";

  .item-card-wrap {
    width: 550px;
    padding: 42px 30px;
    box-sizing: border-box;
    border: 2px dashed $gray;
    color: $font-color-2;
    margin-bottom: 30px;
    position: relative;
    &:last-child {
      margin-bottom: 0;
    }

    .background-icon {
      position: absolute;
      width: 180px;
      height: 180px;
      right: 0;
      top: 0;
      border: none;
    }

    .title {
      font-size: 22px;
      margin-bottom: 12px;
    }

    .description {
      font-size: 16px;
      margin-bottom: 30px;
      position: relative;
      font-weight: 300;
    }

    .line {
      height: 2px;
      width: 10px;
      position: absolute;
      background-color: $disabled;
      left: 0;
      bottom: -15px;
    }

    .tip {
      margin-bottom: 34px;
      font-size: 14px;
      color: $gray-3;
      .border {
        border-top: 2px solid $gray-2;
        width: 15px;
        margin-bottom: 20px;
      }
      .tip-icon {
        width: 16px;
        height: 16px;
        margin-bottom: -1px;
        margin-right: 4px;
      }
    }

    .question {
      font-size: 16px;
      margin-bottom: 18px;
    }
  }
</style>

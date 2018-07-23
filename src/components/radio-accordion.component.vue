<template>
  <div :class="[{ 'item-card': itemCard }, 'radio-accordion-wrapper']">
    <accordion ref="accordion">
      <div slot="header" class="radio-accordion-box">
        <div class="box">
          <div class="title">{{data.title}}</div>
          <div>
            <t-radio class="radio" :title="data.radio1.title" v-model="radioValue" :t-value="data.radio1.value"
                     @click="clickRadio"></t-radio>
            <t-radio class="radio" :title="data.radio2.title" v-model="radioValue" :t-value="data.radio2.value"
                     @click="clickRadio"></t-radio>
          </div>
        </div>
      </div>
      <div slot="body" class="sub-radio-accordion-box" v-if="data.sub">
        <div class="box">
          <div class="title">{{data.sub.title}}</div>
          <div>
            <t-radio class="radio" :title="data.sub.radio1.title" v-model="subRadioValue"
                     :t-value="data.sub.radio1.value" @click="clickSubRadio"></t-radio>
            <t-radio class="radio" :title="data.sub.radio2.title" v-model="subRadioValue"
                     :t-value="data.sub.radio2.value" @click="clickSubRadio"></t-radio>
          </div>
        </div>
      </div>
    </accordion>
  </div>
</template>

<script>
  import radio from './radio-inline.component'
  import accordion from '../tdk/accordion/accordion.component'

  export default {
    props: {
      data: Object,
      itemCard: Boolean
    },
    data () {
      return {
        radioValue: null,
        subRadioValue: null
      }
    },
    mounted () {
      this.setting()
    },
    methods: {
      setting () {
        this.radioValue = this.data.radioValue
        if (this.data.sub) {
          this.subRadioValue = this.data.sub.radioValue
        }
        this.clickRadio(this.radioValue)
      },
      clickRadio (param) {
        const data = this.data
        if (data.sub) {
          if (param === data.radio1.value) {
            this.subBoxToggle(data.radio1.isOpen)
          } else {
            this.subBoxToggle(data.radio2.isOpen)
          }

          if (!this.$refs.accordion.isSlideOpened) {
            this.subRadioValue = null
            this.$emit('callback', {base: this.radioValue})
          }
        } else {
          this.$emit('callback', {base: this.radioValue})
        }
      },
      clickSubRadio () {
        this.$emit('callback', {base: this.radioValue, sub: this.subRadioValue})
      },
      subBoxToggle (isOpen) {
        if (isOpen && this.data.sub) {
          this.$refs.accordion.open()
          this.subRadioValue = this.data.sub.radioValue
          if (this.subRadioValue) {
            this.clickSubRadio()
          }
        } else {
          this.$refs.accordion.close()
        }
      },
      subBoxClose () {
        this.$refs.accordion.close()
      }
    },
    components: {
      't-radio': radio,
      accordion
    }
  }
</script>

<style scoped lang="scss">
  .radio-accordion-wrapper {
    width: 550px;
    &.item-card {
      width: 500px;
      .sub-radio-accordion-box {
        background-color: white;
        border-top: 1px solid #e9e9e9;
        .box {
          padding-left: 0;
        }
      }
    }
    .radio-accordion-box {
      height: 144px;
      display: flex;
      align-items: center;
    }

    .sub-radio-accordion-box {
      height: 144px;
      width: 100%;
      display: flex;
      align-items: center;
      background-color: #f9f9f9;

      .box {
        padding-left: 30px;
        padding-right: 20px;
      }

    }

    .box {
      .title {
        margin-bottom: 18px;
      }
      .radio {
        width: 225px;

        &:first-child {
          margin-right: 20px;
        }
      }
    }
  }
</style>

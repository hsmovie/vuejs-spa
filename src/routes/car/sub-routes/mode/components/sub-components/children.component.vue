<template>
  <div class="children">
    <accordion ref="accordion">
      <div slot="header">
        <radio-accordion :data="children" @callback="clickRadioButton">
        </radio-accordion>
      </div>
      <div slot="body" class="select-age">
        <select-slider
          title="정확한 설계를 위해 연령대를 설정해주세요"
          v-model="childAge"
          :data="sliderData"></select-slider>
        <button class="checkbox-button-wrapper" @click="clickChildCheckbox">
          <img src="/static/png/btn_radio_on.png" v-if="child19Active" class="img">
          <img src="/static/png/btn_radio_off.png" v-else class="img">
          <label class="label">만 19세 이상 자녀 포함(해당 시 체크)</label>
        </button>
      </div>
    </accordion>
  </div>
</template>

<script>
  import selectSlider from '../../../../../../components/select-slider.component'
  import radioAccordion from '../../../../../../components/radio-accordion.component'
  import accordion from '../../../../../../tdk/accordion/accordion.component'

  export default {
    data () {
      return {
        isChild: false,
        children: {
          title: '우리 아이 사고에도 대비할 수 있는 자녀케어 조건을 추가할까요?',
          radio1: {title: '네, 추가해주세요.', value: 'child'},
          radio2: {title: '아니오', value: ''},
          radioValue: ''
        },
        childAge: {},
        childAgeData: {
          child12: ['child.12', 'child.13', 'child.14', 'child.18', 'child.518'],
          child13: ['child.13', 'child.14', 'child.18', 'child.518'],
          child14: ['child.14', 'child.18', 'child.518'],
          child18: ['child.18', 'child.518']
        },
        sliderData: [
          {title: '12세 이하', value: 'child12'},
          {title: '13세 이하', value: 'child13'},
          {title: '14세 이하', value: 'child14'},
          {title: '18세 이하', value: 'child18'}
        ],
        child19Active: false
      }
    },
    methods: {
      clickRadioButton (val) {
        if (val.base === 'child') {
          this.isChild = true
          this.$refs.accordion.open()
        } else {
          this.isChild = false
          this.$refs.accordion.close()
          this.$emit('callback', {sub: {remove: [...this.childAgeData.child12, 'chil.all']}})
        }
      },
      emitAge (val) {
        if (val) {
          const selected = this.childAgeData[val.value]
          if (!this.isChild) {
            this.$emit('callback', {sub: {remove: selected}})
          } else {
            const removeList = this.childAgeData.child12.filter(val => !selected.includes(val))
            this.$emit('callback', {sub: {add: selected, remove: removeList}})
          }
        }
      },
      clickChildCheckbox () {
        this.child19Active = !this.child19Active
        if (this.child19Active) {
          this.$emit('callback', {sub: {add: ['chil.all']}})
        } else {
          this.$emit('callback', {sub: {remove: ['chil.all']}})
        }
      }
    },
    watch: {
      childAge (val) {
        this.emitAge(val)
      }
    },
    components: {
      selectSlider,
      radioAccordion,
      accordion
    }
  }
</script>

<style scoped lang="scss">

  .select-age {
    padding: 0 30px;
    .checkbox-button-wrapper {
      display: flex;
      align-items: center;
      margin-top: 10px;
      .img {
        height: 24px;
        width: 24px;
        margin-right: 12px;
      }
      .label {
        font-size: 16px;
      }
    }
  }
</style>

<template>
  <div class="children">
    <radio-accordion ref="radio" :data="femaleSingle" @callback="clickRadioButton">
    </radio-accordion>
  </div>
</template>

<script>
  import radioAccordion from '../../../../../../components/radio-accordion.component'

  export default {
    data () {
      return {
        femaleSingle: {
          title: '여성이 사고에 안심할 수 있는 여성케어 조건을 추가할까요?',
          radio1: {title: '네, 추가해주세요.', value: {action: 'add', value: ['coup.fem']}},
          radio2: {title: '아니오', value: {action: 'remove', value: ['coup.fem']}},
          radioValue: {action: 'remove', value: ['coup.fem']}
        }
      }
    },
    methods: {
      clickRadioButton (val) {
        this.$emit('callback', val)
      },
      clear () {
        this.femaleSingle.radioValue = {action: 'remove', value: ['coup.fem']}
        this.$refs.radio.setting()
      }
    },
    computed: {},
    components: {
      radioAccordion
    }
  }
</script>

<style scoped lang="scss">
</style>

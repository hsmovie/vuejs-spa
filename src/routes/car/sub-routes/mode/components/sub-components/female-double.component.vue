<template>
  <div class="children">
    <radio-accordion ref="radio" :data="femaleDouble" @callback="clickRadioButton">
    </radio-accordion>
  </div>
</template>

<script>
  import radioAccordion from '../../../../../../components/radio-accordion.component'

  export default {
    data () {
      return {
        femaleDouble: {
          title: '여성이 사고에 안심할 수 있는 여성케어 조건을 추가할까요?',
          radio1: {title: '네, 추가해주세요.', value: {action: 'add', value: []}, isOpen: true},
          radio2: {title: '아니오', value: {action: 'remove', value: ['coup.fem', 'fam.fem']}},
          radioValue: {action: 'remove', value: ['coup.fem', 'fam.fem']},
          sub: {
            title: '여성케어의 보상범위를 선택해주세요',
            radio1: {title: '부부 중 여성', value: {remove: ['fam.fem'], add: ['coup.fem']}},
            radio2: {title: '가족 중 여성', value: {add: ['fam.fem'], remove: ['coup.fem']}},
            radioValue: {add: ['fam.fem'], remove: ['coup.fem']}
          }
        }
      }
    },
    methods: {
      clickRadioButton (val) {
        this.$emit('callback', val)
      },
      clear () {
        this.femaleDouble.radioValue = {action: 'remove', value: ['coup.fem', 'fam.fem']}
        this.femaleDouble.sub.radioValue = {add: ['fam.fem'], remove: ['coup.fem']}
        this.$refs.radio.setting()
        this.$refs.radio.subBoxClose()
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

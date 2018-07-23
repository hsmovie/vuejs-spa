<template>
  <div class="children">
    <radio-accordion ref="radio" :data="silver" @callback="clickRadioButton">
    </radio-accordion>
  </div>
</template>

<script>
  import radioAccordion from '../../../../../../components/radio-accordion.component'

  export default {
    data () {
      return {
        silver: {
          title: '50대 이상에게 든든한 실버케어 조건을 추가할까요?',
          radio1: {title: '네, 추가해주세요.', value: {action: 'add', value: []}, isOpen: true},
          radio2: {title: '아니오', value: {action: 'remove', value: ['fam.50', 'fam.65']}},
          radioValue: {action: 'remove', value: ['fam.50', 'fam.65']},
          sub: {
            title: '정확한 설계를 위해 연령대를 선택해주세요',
            radio1: {title: '만 50세 이상', value: {remove: ['fam.65'], add: ['fam.50']}},
            radio2: {title: '만 65세 이상', value: {add: ['fam.50', 'fam.65']}},
            radioValue: {add: ['fam.50', 'fam.65']}
          }
        }
      }
    },
    methods: {
      clickRadioButton (val) {
        this.$emit('callback', val)
      },
      clear () {
        this.silver.radioValue = {action: 'remove', value: ['fam.50', 'fam.65']}
        this.silver.sub.radioValue = {add: ['fam.50', 'fam.65']}
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

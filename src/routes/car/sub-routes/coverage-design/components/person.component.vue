<template>
  <div>
    <card-container title="대인배상I" sub-title="다른 사람이 다치거나 사망한 경우, 나의 배상책임에 대해 보상합니다">
      <div>
        <select-slider title="보상한도(의무가입)" v-model="selectedPerson" :disabled="true"
                       tip="대인배상I은 자동차손해보상보장법에서 정한 의무 보험으로 변경이 불가능합니다."
                       :isIcon="true"
                       :data="['2', '사망 1억 5천만원/부상 3천만원']" @clickIcon="openCoverageHelpModal(person1HelpData)"></select-slider>
      </div>
    </card-container>
  </div>
</template>

<script>
  import cardContainer from '../../../components/card-container.component'
  import selectSlider from '../../../../../components/select-slider.component'

  export default {
    data () {
      return {
        input: {},
        selectedPerson: '사망 1억 5천만원/부상 3천만원',
        person1HelpData: {
          title: '대인배상I 보상조건',
          subTitle: '사망/후유장애 1.5억원, 부상 3천만원을 최고 보상한도로 실제손해액을 보상합니다',
          contents: [
            {
              img: '/static/png/ic_popup_list_01.png',
              content: '<ul><li>보상한도는 1인당 적용됩니다</li><li>사망 시 장례비, 위자료, 상실수익액 등 실제손해를 보상합니다</li><li>부상 시 치료비, 위자료, 간병비, 휴업손해 등 실제손해를 보상합니다</li><li>후유장애 시 위자료, 상실수익액, 가정간호비 등 실제손해를 보상합니다</li></ul>'
            },
            {img: '/static/png/ic_popup_list_02.png', content: '<ul><li>무면허, 음주사고는 300만원의 본인부담금이 부과됩니다</li></ul>'}
          ]
        }
      }
    },
    methods: {
      selectParson () {
        this.$emit('selectedPerson', this.selectedPerson)
      },
      openCoverageHelpModal (data) {
        this.$emit('openCoverageHelpModal', data)
      }
    },
    watch: {
      selectedPerson (val) {
        this.selectParson()
      }
    },
    components: {
      cardContainer,
      selectSlider
    }
  }
</script>

<style scoped lang="scss">
</style>

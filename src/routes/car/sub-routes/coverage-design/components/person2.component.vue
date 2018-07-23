<template>
  <div>
    <card-container title="대인배상II" sub-title="다른 사람이 다치거나 사망하여 그 손해가 대인배상I의<br> 보상한도를 초과하는 경우 작동합니다">
      <div>
        <div class="select-person2">
          <select-slider title="보상한도 설정" v-model="selectedPerson2" :isIcon="true"
                         :data="person2Data" @clickIcon="openCoverageHelpModal(person2HelpData)"></select-slider>
        </div>
        <div v-if="!isPackage && selectedPerson2.value !== 0">
          <item-card title="사망, 중상해, 11대 중과실 사고 대비"
                     question="형사합의금, 변호사비용, 벌금을 보상하도록 특약을 추가하시겠습니까?"
                     description="상기사고는 보험처리와는 별도로 형사상 책임이 부가됩니다. 형사처벌에 대비한 법률비용지원특약에 가입하시면 저렴한 비용으로 운전자보험에 가입하신 효과를 볼 수 있습니다. 아직 운전자보험이 없으신 분은 추가하시는 것이 좋습니다."
                     icon="/static/png/img_boxbg_01.png"
                     :value="legalSupport"
                     @click="isLegalSupport">
          </item-card>
        </div>
      </div>
    </card-container>
  </div>
</template>

<script>
  import cardContainer from '../../../components/card-container.component'
  import selectSlider from '../../../../../components/select-slider.component'
  import itemCard from './sub-components/item-card.component'

  export default {
    props: {
      isPackage: Boolean,
      person2: Object,
      legalSupport: Boolean
    },
    data () {
      return {
        selectedPerson2: this.person2,
        person2Data: this.$store.getters.getInsurance('coverage').person2,
        person2HelpData: {
          title: '대인배상II 보상조건',
          subTitle: '선택하신 한도로 대인배상I을 초과하는 다른 사람의<br>실제손해액을 보상 합니다.',
          contents: [
            {img: '/static/png/ic_popup_list_01.png', content: '<ul><li>보상한도는 1인당 적용됩니다</li><li>사망 시 장례비, 위자료, 상실수익액 등 실제손해를 보상합니다</li><li>부상 시 치료비, 위자료, 간병비, 휴업손해 등 실제손해를 보상합니다</li><li>후유장애 시 위자료, 상실수익액, 가정간호비 등 실제손해를 보상합니다</li></ul>'},
            {img: '/static/png/ic_popup_list_03.png', content: '<ul><li>음주사고는 300만원의 본인부담금이 부과됩니다</li><li>무면허운전, 운전자범위/연령 위반 시에는 보상이 불가합니다</li></ul>'}
          ]
        }
      }
    },
    methods: {
      isLegalSupport (isLegalSupport) {
        this.$emit('selectedLegalSupport', isLegalSupport)
      },
      selectPerson2 () {
        if (this.selectedPerson2) {
          this.$emit('selectedPerson2', this.selectedPerson2)
        }
      },
      openCoverageHelpModal (data) {
        this.$emit('openCoverageHelpModal', data)
      }
    },
    watch: {
      selectedPerson2 () {
        this.selectPerson2()
      }
    },
    components: {
      cardContainer,
      selectSlider,
      itemCard
    }
  }
</script>

<style scoped lang="scss">
  .select-person2 {
    margin-bottom: 45px;
  }
</style>

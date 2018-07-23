<template>
  <div>
    <card-container title="긴급 출동 서비스" sub-title="긴급견인, 비상급유, 펑크수리 등 유사 시에 서비스를 받을 수 있습니다">
      <div>
        <div class="select-box">
          <select-slider title="견인 거리 설정" v-model="select" :isIcon="true"
                         :data="selectData" @clickIcon="openCoverageHelpModal(helpData)">
          </select-slider>
        </div>
        <div v-if="!isPackage && select.value !== 0">
          <item-card title="차량진단 및 부가서비스 혜택 추가"
                     description="30가지 주요항목에 대한 차량진단, 정비이력관리, 운반서비스 등 다양한 혜택을 받을 수 있는 특약이 있습니다"
                     question="이러한 서비스 특약을 추가하시겠습니까?"
                     :value="extraService"
                     icon="/static/png/img_boxbg_06-1.png"
                     @click="isExtraService">
          </item-card>

          <item-card title="잠금장치 해제 제외"
                     description="스마트키가 장착되었거나 최신 이모빌라이저가 장착된 차량의 경우 긴급출동 서비스에서 제공하는 잠금장치 해제가 불가할 수 있습니다."
                     question="잠금장치 해제를 제외하여 보험료를 할인 받으시겠습니까?"
                     icon="/static/png/img_boxbg_06-2.png"
                     :value="unlockService"
                     @click="isUnlockService">
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
      initDispatch: Object,
      extraService: Boolean,
      unlockService: Boolean
    },
    mounted () {
      this.isExtraService(this.extraService)
    },
    data () {
      return {
        select: this.initDispatch || {},
        selectData: this.$store.getters.getInsurance('coverage').dispatch,
        helpData: {
          title: '긴급출동서비스 보상조건',
          subTitle: '설정하신 견인거리를 기준으로 견인, 비상급유, 잠금해제,<br>펑크수리를 비롯한 다양한 긴급출동 서비스가 제공됩니다.',
          contents: [
            {img: '/static/png/ic_popup_list_01.png', content: '<ul><li>보험사별로 연간 이용횟수에 제한이 있을 수 있습니다.<br>(예: 1년 5~6회))</ul></li>'},
            {img: '/static/png/ic_popup_list_02.png', content: '<ul><li>수입차와 최신 이모빌라이저가 설치된 일부 차량의 경우 잠금해제가, 전기차의 경우 배터리 충전이 불가할 수 있습니다.</ul></li>'}
          ]
        }
      }
    },
    methods: {
      isExtraService (isExtraService) {
        this.$emit('selectedExtraService', isExtraService)
      },
      isUnlockService (isUnlockService) {
        this.$emit('selectedUnlockService', isUnlockService)
      },
      selectedDispatch () {
        if (this.select) {
          this.$emit('selectedDispatch', this.select)
        }
      },
      openCoverageHelpModal (data) {
        this.$emit('openCoverageHelpModal', data)
      }
    },
    watch: {
      select () {
        this.selectedDispatch()
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
  @import "../../../../../style/variable";

  .select-box {
    margin-bottom: 30px;
  }
</style>

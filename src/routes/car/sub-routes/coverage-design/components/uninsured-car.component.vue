<template>
  <div>
    <card-container title="무보험자동차에 의한 상해" sub-title="무보험 차량, 뺑소니 사고로 나와 내 가족이 상해를 당한 경우 보상합니다">
      <div>
        <div class="select-uninsured-car">
          <select-slider title="보상한도 설정" v-model="selectUninsuredCar" :isIcon="true" :initData="uninsuredCar"
                         :data="uninsuredCarData" @clickIcon="openCoverageHelpModal(uninsuredCarHelpData)"></select-slider>
        </div>
        <div v-if="!isPackage && this.selectUninsuredCar.value !== 0">
          <item-card title="다른 자동차 운전 중 사고 대비"
                     question="이 때 나의 자동차보험으로 보상 받을 수 있는 특약을 추가하시겠습니까?"
                     description="다른 사람의 차량을 운전하다가 사고를 내면 매우 곤란해집니다.<br>이는 운전자범위 한정 위반으로 보상이 안되기 때문입니다."
                     icon="/static/png/img_boxbg_04-1.png"
                     :value="driveOtherCar"
                     @click="isDriveOtherCar">
          </item-card>

          <item-card title="다른 자동차 차량손해 보상"
                     question="다른 자동차의 차량손해도 보상되는 조건을 추가하시겠습니까?"
                     description="다른 사람의 차량을 운전하던 중 발생한 차량손해의 경우 해당 차량의 보험 가입조건에 따라 보상이 불가할 수 있습니다."
                     icon="/static/png/img_boxbg_04-3.png"
                     :value="damageOtherCar"
                     @click="isDamageOtherCar">
          </item-card>

          <item-card title="다른 자동차 운전대상 확대"
                     question="내가족이 운전한 다른 차량도 보상되는 조건을 추가하시겠습니까?"
                     description="내 가족이 다른 사람의 자동차를 운전하던 중 발생한 사고의 경우 해당 차량의 보험 가입조건에 따라 보상이 불가할 수 있습니다."
                     icon="/static/png/img_boxbg_04-2.png"
                     :value="driverRangeOtherCar"
                     @click="isDriverRangeOtherCar">
          </item-card>

          <item-card title="대리운전 사고 보상"
                     question="대리운전 사고 시 안심할 수 있는 보상조건을 추가하시겠습니까?"
                     description="대리운전 중 사고로 대리기사가 가입한 보험을 초과하는 손해가 발생한 경우 초과분에 대한 손해배상 책임을 질 수 있습니다."
                     icon="/static/png/img_boxbg_04-5.png"
                     :value="substitutiveDriver"
                     @click="isSubstitutiveDriver">
          </item-card>

          <item-card title="보행 중/다른 자동차 탑승 중 사고 보상"
                     question="보행 중/다른 자동차 탑승 중 사고도 보상되는 조건을 추가하시겠습니까?"
                     description="보행 중 또는 다른 차량 탑승 중 사고의 경우 가해차량의 보험 가입 조건에 따라 충분한 보상이 어려울 수 있습니다."
                     icon="/static/png/img_boxbg_04-4.png"
                     :value="damageByOtherCar"
                     @click="isDamageByOtherCar">
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
      uninsuredCar: {
        type: Object,
        default: {}
      },
      driveOtherCar: Boolean, // 다른 자동차 운전 확대
      damageOtherCar: Boolean, // 다른 차 차량손해
      driverRangeOtherCar: Boolean, // 다른 차 보상에 대한 운전자범위 확대
      substitutiveDriver: Boolean, // 대리운전 운전담보
      damageByOtherCar: Boolean // 다른 차에 의한 사고에 대해 보상확대
    },
    data () {
      return {
        selectUninsuredCar: this.uninsuredCar,
        uninsuredCarData: this.$store.getters.getInsurance('coverage').uninsuredCar,
        uninsuredCarHelpData: {
          title: '무보험차상해 보상조건',
          subTitle: '무보험차 사고로 인해 가해자로부터 충분히 보상받지 못하는 경우 작동합니다',
          contents: [
            { img: '/static/png/ic_popup_list_01.png', content: '<ul><li>대인배상의 보상조건에 따라 실제 손해액을 지급합니다.</li></ul>' },
            { img: '/static/png/ic_popup_list_08.png', content: '<ul><li>보행 중 사고도 보상되며, 다수의 차량을 보유한 경우 1대만 가입하면 됩니다.</li></ul>' },
            { img: '/static/png/ic_popup_list_09.png', content: '<ul><li>대인I, 대인II, 대물, 자기신체사고(또는 자동차상해)에 모두 가입 해야만 가입할 수 있습니다.</li></ul>' },
            { img: '/static/png/ic_popup_list_04.png', content: '<ul><li>운전자범위, 최저연령을 위반한 경우 보상이 불가합니다.</li></ul>' }
          ]
        }
      }
    },
    methods: {
      isDriveOtherCar (isDriveOtherCar) {
        this.$emit('selectedDriveOtherCar', isDriveOtherCar)
      },
      isDamageOtherCar (isDamageOtherCar) {
        this.$emit('selectedDamageOtherCar', isDamageOtherCar)
      },
      isDriverRangeOtherCar (isDriverRangeOtherCar) {
        this.$emit('selectedDriverRangeOtherCar', isDriverRangeOtherCar)
      },
      isSubstitutiveDriver (isSubstitutiveDriver) {
        this.$emit('selectedSubstitutiveDriver', isSubstitutiveDriver)
      },
      isDamageByOtherCar (isDamageByOtherCar) {
        this.$emit('selectedDamageByOtherCar', isDamageByOtherCar)
      },
      selectedUninsuredCar () {
        if (this.selectUninsuredCar) {
          this.$emit('selectedUninsuredCar', this.selectUninsuredCar)
        }
      },
      openCoverageHelpModal (data) {
        this.$emit('openCoverageHelpModal', data)
      }
    },
    watch: {
      selectUninsuredCar () {
        this.selectedUninsuredCar()
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
  .select-uninsured-car {
    margin-bottom: 45px;
  }
</style>

<template>
  <div>
    <div class="sub-nav">
      <ul>
        <li @click="showNav(1)" :class="{active: isShow1}"></li>
        <li @click="showNav(2)" :class="{active: isShow2}"></li>
        <li @click="showNav(3)" :class="{active: isShow3}"></li>
        <li @click="showNav(4)" :class="{active: isShow4}"></li>
        <li @click="showNav(5)" :class="{active: isShow5}"></li>
        <li @click="showNav(6)" :class="{active: isShow6}"></li>
      </ul>
    </div>
    <car-header></car-header>
    <div class="car-content">
      <div v-if="isShow1">
        <person @openCoverageHelpModal="openCoverageHelpModal">
        </person>
        <person2 :legalSupport="input.matchingAttribute.legalSupport"
                 :person2="input.coverage.person2" :isPackage="!!input.selectedPackage"
                 @selectedPerson2="selectedPerson2" @selectedLegalSupport="selectedLegalSupport"
                 @openCoverageHelpModal="openCoverageHelpModal">
        </person2>
        <t-button large @click="showNav(2); saveInput()">설정 완료</t-button>
      </div>
      <div v-if="isShow2">
        <t-object :object="input.coverage.object" :isPackage="!!input.selectedPackage"
                  :surcharge="input.coverage.surcharge"
                  :foreignCarAccident="input.matchingAttribute.foreignCarAccident"
                  @selectedObject="selectedObject"
                  @selectedSurcharge="selectedSurcharge"
                  @selectedForeignCarAccident="selectedForeignCarAccident"
                  @openCoverageHelpModal="openCoverageHelpModal">
        </t-object>
        <t-button large @click="showNav(3); saveInput()">설정 완료</t-button>
      </div>
      <div v-if="isShow3">
        <accident :accidentMode="input.accidentMode" :isPackage="!!input.selectedPackage"
                  :accident="input.coverage.accident"
                  :initDeath="input.coverage.accident.death"
                  :initInjury="input.coverage.accident.injury"
                  :initWhat="input.matchingAttribute.subAttributes.what"
                  @openCoverageHelpModal="openCoverageHelpModal"
                  @selectedIsCar="selectedIsCar"
                  @selectedDeath="selectedDeath"
                  @selectedInjury="selectedInjury"
                  @selectedWhat="selectedWhat">
        </accident>
        <t-button large @click="showNav(4); saveInput()">설정 완료</t-button>
      </div>
      <div v-if="isShow4">
        <uninsured-car :driveOtherCar="input.matchingAttribute.driveOtherCar"
                       :damageOtherCar="input.matchingAttribute.damageOtherCar"
                       :driverRangeOtherCar="input.matchingAttribute.driverRangeOtherCar"
                       :substitutiveDriver="input.matchingAttribute.substitutiveDriver"
                       :damageByOtherCar="input.matchingAttribute.damageByOtherCar"
                       :uninsuredCar="input.coverage.uninsuredCar" :isPackage="!!input.selectedPackage"
                       :parents="input.condition.parents" :children="input.condition.children"
                       @selectedUninsuredCar="selectedUninsuredCar" @selectedDriveOtherCar="selectedDriveOtherCar"
                       @openCoverageHelpModal="openCoverageHelpModal" @selectedDamageOtherCar="selectedDamageOtherCar"
                       @selectedDriverRangeOtherCar="selectedDriverRangeOtherCar"
                       @selectedSubstitutiveDriver="selectedSubstitutiveDriver"
                       @selectedDamageByOtherCar="selectedDamageByOtherCar">
        </uninsured-car>
        <t-button large @click="showNav(5); saveInput()">설정 완료</t-button>
      </div>
      <div v-if="isShow5">
        <self-car :initMin="input.coverage.selfCar.min" :initMax="input.coverage.selfCar.max"
                  :initRate="input.coverage.selfCar.rate" :isPackage="!!input.selectedPackage"
                  :initSelfCarRage="input.matchingAttribute.expandRangeSelfCar && !input.matchingAttribute.limitRangeSelfCar"
                  :initTransOrRentCost="initTransOrRentCost"
                  :sevenYearsUpperForeignCar="input.matchingAttribute.sevenYearsUpperForeignCar"
                  :leisureGoods="input.matchingAttribute.leisureGoods"
                  :newCarCost="input.matchingAttribute.newCarCost"
                  :devaluateCarCost="input.matchingAttribute.devaluateCarCost"
                  :imprintSupport="input.matchingAttribute.imprintSupport"
                  :transportCarSupport="input.matchingAttribute.transportCarSupport"
                  @selectedSelfCarRage="selectedSelfCarRage" @selectedRate="selectedRate"
                  @selectedSevenYearsUpperForeignCar="selectedSevenYearsUpperForeignCar"
                  @selectedTransOrRentCost="selectedTransOrRentCost"
                  @selectedLeisureGoods="selectedLeisureGoods"
                  @selectedNewCarCost="selectedNewCarCost"
                  @selectedDevaluateCarCost="selectedDevaluateCarCost"
                  @selectedImprintSupport="selectedImprintSupport"
                  @selectedTransportCarSupport="selectedTransportCarSupport"
                  @selectedMax="selectedMax" @openCoverageHelpModal="openCoverageHelpModal">
        </self-car>
        <t-button large @click="showNav(6); saveInput()">설정 완료</t-button>
      </div>
      <div v-if="isShow6">
        <dispatch :init-dispatch="input.dispatch.dispatch" :extra-service="input.dispatch.extraService"
                  :isPackage="!!input.selectedPackage"
                  :unlockService="input.dispatch.unlockService"
                  @selectedExtraService="selectedExtraService" @selectedDispatch="selectedDispatch"
                  @selectedUnlockService="selectedUnlockService"
                  @openCoverageHelpModal="openCoverageHelpModal">
        </dispatch>
        <t-button large @click="submit">설정 완료</t-button>
      </div>
    </div>
    <coverage-help-modal ref="coverageHelpModal" :data="coverageHelpModalData">
    </coverage-help-modal>
  </div>
</template>

<script>
  import carHeader from '../../components/car-header.component'
  import tButton from '../../../../components/button.component'
  import person from './components/person.component'
  import person2 from './components/person2.component'
  import object from './components/object.component'
  import accident from './components/accident.component'
  import coverageHelpModal from '../../components/coverage-help-modal.component'
  import uninsuredCar from './components/uninsured-car.component'
  import selfCar from './components/self-car.component'
  import dispatch from './components/dispatch.component'

  export default {
    created () {
      if (this.input.matchingAttribute.transportationCost || this.input.matchingAttribute.rentCarCost) {
        if (this.input.matchingAttribute.transportationCost) {
          this.initTransOrRentCost = {base: true, sub: true}
        } else {
          this.initTransOrRentCost = {base: true, sub: false}
        }
      } else {
        this.initTransOrRentCost = {base: false}
      }
    },
    data () {
      return {
        input: this.$store.getters.getInsuranceInput,
        coverageHelpModalData: {},
        initTransOrRentCost: {},
        isShow1: true,
        isShow2: false,
        isShow3: false,
        isShow4: false,
        isShow5: false,
        isShow6: false
      }
    },
    methods: {
      openCoverageHelpModal (data) {
        this.coverageHelpModalData = data
        this.$refs.coverageHelpModal.open()
      },
      // 대인2
      selectedPerson2 (val) {
        this.input.coverage.person2 = val
        this.input.condition.person2 = val.value !== 0
      },
      selectedLegalSupport (val) {
        this.input.matchingAttribute.legalSupport = val
      },
      // 대물
      selectedObject (val) {
        this.input.coverage.object = val
      },
      selectedSurcharge (val) {
        const minValue = val.value * 0.1
        const minValueString = minValue.toString()
        this.input.coverage.selfCar.min.title = minValueString.substring(0, minValueString.length - 4) + '만원'
        this.input.coverage.selfCar.min.value = minValue
        this.input.coverage.surcharge = val
      },
      selectedForeignCarAccident (val) {
        this.input.matchingAttribute.foreignCarAccident = val
      },
      // 자손 / 자상
      selectedIsCar (val) {
        this.input.accidentMode = val ? 'car' : 'body'
        this.input.condition.bodyAccident = !val
        this.input.condition.carAccident = val
        this.input.coverage.accident.isCar = val
        this.input.coverage.accident.death = {}
        this.input.coverage.accident.injury = {}
      },
      selectedDeath (val) {
        this.input.coverage.accident.death = val
      },
      selectedInjury (val) {
        this.input.coverage.accident.injury = val
      },
      selectedWhat (val) {
        this.input.matchingAttribute.subAttributes.what = val
      },

      // 무보험
      selectedDriveOtherCar (val) {
        this.input.matchingAttribute.driveOtherCar = val
      },
      selectedDamageOtherCar (val) {
        this.input.matchingAttribute.damageOtherCar = val
      },
      selectedDriverRangeOtherCar (val) {
        this.input.matchingAttribute.driverRangeOtherCar = val
      },
      selectedSubstitutiveDriver (val) {
        this.input.matchingAttribute.substitutiveDriver = val
      },
      selectedDamageByOtherCar (val) {
        this.input.matchingAttribute.damageByOtherCar = val
      },
      selectedUninsuredCar (val) {
        this.input.condition.uninsuredCar = val.value !== 0
        this.input.coverage.uninsuredCar = val
      },

      // 자차
      selectedSelfCarRage (val) {
        if (val) {
          this.input.matchingAttribute.expandRangeSelfCar = true
          this.input.matchingAttribute.limitRangeSelfCar = false
        } else {
          this.input.matchingAttribute.expandRangeSelfCar = false
          this.input.matchingAttribute.limitRangeSelfCar = true
        }
      },
      selectedSevenYearsUpperForeignCar (val) {
        this.input.matchingAttribute.sevenYearsUpperForeignCar = val
      },
      selectedTransOrRentCost (val) {
        if (val.base) {
          if (val.sub) {
            this.input.matchingAttribute.transportationCost = true
            this.input.matchingAttribute.rentCarCost = false
          } else {
            this.input.matchingAttribute.transportationCost = false
            this.input.matchingAttribute.rentCarCost = true
          }
        } else {
          this.input.matchingAttribute.transportationCost = false
          this.input.matchingAttribute.rentCarCost = false
        }
      },
      selectedLeisureGoods (val) {
        this.input.matchingAttribute.leisureGoods = val
      },
      selectedNewCarCost (val) {
        this.input.matchingAttribute.newCarCost = val
      },
      selectedDevaluateCarCost (val) {
        this.input.matchingAttribute.devaluateCarCost = val
      },
      selectedImprintSupport (val) {
        this.input.matchingAttribute.imprintSupport = val
      },
      selectedTransportCarSupport (val) {
        this.input.matchingAttribute.transportCarSupport = val
      },

      selectedRate (val) {
        this.input.condition.selfCar = val.value !== 0
        this.input.coverage.selfCar.rate = val
      },
      selectedMax (val) {
        this.input.coverage.selfCar.max = val
      },

      // 긴급출동
      selectedExtraService (val) {
        this.input.dispatch.extraService = val
      },
      selectedDispatch (val) {
        this.input.dispatch.dispatch = val
      },
      selectedUnlockService (val) {
        this.input.dispatch.unlockService = val
      },
      // nav
      showNav (index) {
        this.isShow1 = false
        this.isShow2 = false
        this.isShow3 = false
        this.isShow4 = false
        this.isShow5 = false
        this.isShow6 = false

        this[`isShow${index}`] = true
        window.scrollTo(0, 0)
      },
      async saveInput () {
        await this.$store.dispatch('inputInsurance', this.input)
      },
      async submit () {
        if (this.input.accidentMode !== null) {
          await this.saveInput()
          await this.$store.dispatch('getDashboard', this.input)
        }
      },
      move () {
        this.$router.push('/car/comparison')
      }
    },
    computed: {
      getOutput () {
        return this.$store.getters.getOutput
      }
    },
    watch: {
      getOutput () {
        this.move()
      }
    },
    components: {
      carHeader,
      tButton,
      person,
      person2,
      accident,
      coverageHelpModal,
      uninsuredCar,
      selfCar,
      dispatch,
      tObject: object
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../style/car";
  @import "../../../../style/variable";

  .select-person2 {
    margin-bottom: 45px;
  }

  .sub-nav {
    position: fixed;
    top: 380px;
    z-index: 9;
    left: 450px;

    li {
      color: rgba(255, 255, 255, 0.3);
      cursor: pointer;
      width: 6px;

      &.active {
        color: rgb(255, 255, 255);
      }
    }
  }
</style>

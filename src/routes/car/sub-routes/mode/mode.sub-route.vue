<template>
  <div>
    <car-header></car-header>
    <div class="car-content">
      <!-- select-mode -->
      <select-mode @selectMode="selectMode"></select-mode>
      <!-- package -->
      <packages ref="packages" v-show="isPackage"
                @openPackageHelpModal="openPackageHelpModal"
                @selectPackage="selectPackage">
      </packages>
      <!-- design (직접설계) -->
      <div v-show="isDesign">
        <!-- when1 -->
        <when1 v-model="input.matchingAttribute.subAttributes.when1"
               @openAttributeHelpModal="openAttributeHelpModal"></when1>
        <!-- when2 -->
        <when2 v-model="input.matchingAttribute.subAttributes.when2"
               @openAttributeHelpModal="openAttributeHelpModal"></when2>
        <!-- who -->
        <who v-model="input.matchingAttribute.subAttributes.who"></who>
      </div>
      <tutto-button large :disabled="isDisabled" @click="submit()">설정 완료</tutto-button>
    </div>
    <attribute-help-modal ref="attributeHelpModal" :data="attributeHelpModalData"></attribute-help-modal>
    <package-help-modal ref="packageHelpModal" :data="packageHelpModalData"></package-help-modal>
  </div>
</template>

<script>
  import tuttoButton from '../../../../components/button.component'
  import carHeader from '../../components/car-header.component'
  import attributeHelpModal from '../../components/attribute-help-modal.component'
  import packageHelpModal from '../../components/package-help-modal.component'
  import selectMode from './components/select-mode.component'
  import packages from './components/package.component'
  import when1 from './components/when1.component'
  import when2 from './components/when2.component'
  import who from './components/who.component'

  export default {
    data () {
      return {
        input: this.$store.getters.getInsuranceInput,
        attributeHelpModalData: null,
        packageHelpModalData: null,
        isDisabled: true
      }
    },
    methods: {
      selectMode (mode) {
        this.isDisabled = true
        this.input.mode = mode
        if (this.isPackage) {
          this.$refs.packages.slick()
        } else if (this.isDesign) {
          this.isDisabled = false
        }
        this.input.selectedPackage = null
      },
      selectPackage (item) {
        if (item) {
          this.input.selectedPackage = item
          this.isDisabled = false
        }
      },
      openAttributeHelpModal (data) {
        this.attributeHelpModalData = data
        this.$refs.attributeHelpModal.open()
      },
      openPackageHelpModal (data) {
        this.packageHelpModalData = data
        this.$refs.packageHelpModal.open()
      },
      submit () {
        if (this.isPackage && this.input.selectedPackage) {
          this.input.coverage = this.input.selectedPackage.detail
          delete this.input.coverage.person1
          this.input.dispatch.dispatch = {
            title: '10km',
            value: 10
          }
          this.input.accidentMode = this.input.coverage.accident.isCar ? 'car' : 'body'
          this.input.matchingAttribute.limitRangeSelfCar = false
        }
        this.$store.dispatch('inputInsurance', this.input)
        this.$refs.packages.slick(!!this.input.selectedPackage, this.isPackage)
        this.$router.push('Customer')
      }
    },
    computed: {
      isPackage () {
        return this.input.mode === 'package'
      },
      isDesign () {
        return this.input.mode === 'design'
      }
    },
    components: {
      tuttoButton,
      carHeader,
      attributeHelpModal,
      packageHelpModal,
      selectMode,
      packages,
      when1,
      when2,
      who
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../style/car";
</style>

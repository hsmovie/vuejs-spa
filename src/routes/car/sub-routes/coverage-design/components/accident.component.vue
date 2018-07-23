<template>
  <div>
    <card-container title="보장종목 선택" sub-title="나와 나의 가족이 상해를 입은 경우 보상하는 담보입니다.<br>보상 받고자 하는 방식을 선택해주세요.">
      <button :class="[{ selected: mode === 'body'}, 'selection']" @click="selectIsCar('body')">
        <img src="/static/png/img_mode_body_nor.png" class="img" v-if="mode === 'body'">
        <img src="/static/png/img_mode_body_dim.png" class="img" v-else>
        <div class="selection-title">
          자기신체 사고
        </div>
        <div class="selection-content">
          약관에서 정의한 급수별 <br>한도 내에서 보상합니다
        </div>
      </button>
      <button :class="[{ selected: mode === 'car' }, 'selection', 'right']" @click="selectIsCar('car')">
        <img src="/static/png/img_mode_car_nor.png" class="img" v-if="mode === 'car'">
        <img src="/static/png/img_mode_car_dim.png" class="img" v-else>
        <div class="selection-title">
          자동차상해
        </div>
        <div class="selection-content">
          선택한 한도 내에서 실제손해를<br> 기준으로 폭넓게 보상합니다
        </div>
      </button>
    </card-container>
    <!-- 사망, 부상 -->
    <card-container :title="title" :subTitle="subTitle" v-if="mode === 'car' || mode === 'body'">
      <accident-body v-if="mode === 'body'" :init-injury="initInjury" :init-death="initDeath"
                     @selectedDeath="selectedDeath" @selectedInjury="selectedInjury" @openCoverageHelpModal="openCoverageHelpModal">
      </accident-body>
      <accident-car v-if="mode === 'car'" :init-injury="initInjury" :init-death="initDeath"
                    @selectedDeath="selectedDeath" @selectedInjury="selectedInjury" @openCoverageHelpModal="openCoverageHelpModal">
      </accident-car>
      <!-- what -->
      <what v-model="what" v-if="!isPackage && !noSelected">
      </what>
    </card-container>
  </div>
</template>

<script>
  import cardContainer from '../../../components/card-container.component'
  import what from './sub-components/what.component'
  import accidentBody from './sub-components/accident-body.component'
  import accidentCar from './sub-components/accident-car.component'

  export default {
    props: {
      accident: Object,
      isPackage: Boolean,
      accidentMode: String,
      initDeath: Object,
      initInjury: Object,
      initWhat: Array
    },
    mounted () {
      this.what = this.initWhat
      this.mode = this.accidentMode
      if (this.accidentMode === 'body') {
        this.title = '자기 신체 사고'
        this.subTitle = '나와 나의 가족이 상해를 당한 경우 보상합니다'
      } else {
        this.title = '자동차 상해'
        this.subTitle = '나와 내 가족이 상해를 입은 경우 가입한도 내에서 보상합니다.'
      }
    },
    data () {
      return {
        what: [],
        mode: '',
        isCar: null,
        title: '',
        subTitle: '',
        noSelected: false
      }
    },
    methods: {
      selectIsCar (mode) {
        this.mode = mode
        if (mode === 'body') {
          this.title = '자기 신체 사고'
          this.subTitle = '나와 내 가족이 상해를 입은 경우 가입한도 내에서 보상합니다.'
        } else {
          this.title = '자동차 상해'
          this.subTitle = '나와 내 가족이 상해를 입은 경우 가입한도 내에서 보상합니다.'
        }
        this.$emit('selectedIsCar', mode === 'car')
      },
      selectedDeath (val) {
        if (val.value === 0) {
          this.noSelected = true
        } else {
          this.noSelected = false
        }
        this.$emit('selectedDeath', val)
      },
      selectedInjury (val) {
        this.$emit('selectedInjury', val)
      },
      selectedWhat () {
        this.$emit('selectedWhat', this.what)
      },
      openCoverageHelpModal (data) {
        this.$emit('openCoverageHelpModal', data)
      }
    },
    computed: {
      coverage () {
        return this.$store.getters.getInsurance('coverage')
      }
    },
    watch: {
      what () {
        this.selectedWhat()
      }
    },
    components: {
      cardContainer,
      accidentBody,
      accidentCar,
      what
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../../style/car";
  @import "../../../../../style/variable";
  // select-mode
  .selection {
    display: inline-block;
    height: 320px;
    width: 265px;
    border-radius: 8px;
    border: 1px solid $gray;
    text-align: center;
    transition: background-color .2s;
    color: $gray-3;
    &.selected {
      background-color: $gray;
      div {
        color: #424242;
      }
    }
  }

  .img {
    margin-bottom: 12px;
  }

  .selection-title {
    font-size: 16px;
    margin-bottom: 12px;
  }

  .selection-content {
    font-size: 16px;
  }

  .right {
    float: right;
  }
</style>

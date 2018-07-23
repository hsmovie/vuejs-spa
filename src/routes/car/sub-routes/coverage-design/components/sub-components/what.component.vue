<template>
  <div class="item-card-wrap">
    <accordion ref="accordion">
      <div slot="header">
        <div class="title">
          나와 내 가족에 대한 보장 확대
        </div>
        <div class="description">
          누구든 예상치 못한 상황에서 교통사고를 당할 수 있습니다. 때로는 충분치 않은 보상으로 난감한 상황에 직면하기도 합니다.
        </div>
        <div class="question">
          사고 시 나와 내 가족이 다양한 보장을 받을 수 있도록 설계해보시겠습니까?
        </div>
        <div :class="{'radio-wrapper': isWhatOpen, 'border-bottom': isWhatOpen || isSummeryOpen}">
          <div>
          </div>
          <div class="radio">
            <t-radio class="radio" title="네, 추가해주세요." v-model="selectedAddWhat"
                     :t-value="true" @click="selectAddWhat">
            </t-radio>
            <t-radio class="radio" title="아니오" v-model="selectedAddWhat"
                     :t-value="false" @click="selectAddWhat">
            </t-radio>
          </div>
        </div>
      </div>
      <div slot="body">
        <div class="what-title">
          원하시는 보장의 유형을 선택해주세요
        </div>
        <!-- whatGroup1 -->
        <div class="question">
          위로금
        </div>
        <div class="radio-wrapper">
          <div class="radio">
            <radio-shape-checkbox
              v-for="(item, index) in whatGroup1Data"
              :key="index"
              class="radio" :title="item.title"
              v-model="selectedWhatGroup1"
              :t-value="item.value">
            </radio-shape-checkbox>
          </div>
        </div>
        <!-- whatGroup2 -->
        <div class="question">
          수술/치료비
        </div>
        <div class="radio-wrapper">
          <div class="radio">
            <radio-shape-checkbox
              v-for="(item, index) in whatGroup2Data"
              :key="index"
              class="radio" :title="item.title"
              v-model="selectedWhatGroup2"
              :t-value="item.value">
            </radio-shape-checkbox>
          </div>
        </div>
        <!-- whatGroup3 -->
        <div class="question">
          특수치료
        </div>
        <div class="radio-wrapper">
          <div class="radio">
            <radio-shape-checkbox
              v-for="(item, index) in whatGroup3Data"
              :key="index"
              class="radio" :title="item.title"
              v-model="selectedWhatGroup3"
              :t-value="item.value">
            </radio-shape-checkbox>
          </div>
        </div>
        <!-- whatGroup4 -->
        <div class="question">
          입원/간병비
        </div>
        <div class="radio-wrapper">
          <div class="radio">
            <radio-shape-checkbox
              v-for="(item, index) in whatGroup4Data"
              :key="index"
              class="radio" :title="item.title"
              v-model="selectedWhatGroup4"
              :t-value="item.value">
            </radio-shape-checkbox>
          </div>
        </div>
        <t-button width="240" @click="selectWhatData">선택완료</t-button>
        <t-button width="240" gray @click="deleteWhatData" class="right">선택제거</t-button>
      </div>
    </accordion>
    <div class="folded-what-data-wrapper" v-if="isSummeryOpen">
      <div class="what-data-wrapper">
        <div class="title">
          위로금
          <simple-svg
            filepath="/static/svg/btn_arr_next.svg"
            stroke="none"
            fill="#c0c0c0"
            width="20"
            height="20"
            class="arrow-icon"
          />
        </div>
        <div class="number" @click="openWhat">
          {{selectedWhatGroup1.length}}건
        </div>
      </div>
      <div class="what-data-wrapper">
        <div class="title">
          수술/치료비
          <simple-svg
            filepath="/static/svg/btn_arr_next.svg"
            stroke="none"
            fill="#c0c0c0"
            width="20"
            height="20"
            class="arrow-icon"
          />
        </div>
        <div class="number" @click="openWhat">
          {{selectedWhatGroup2.length}}건
        </div>
      </div>
      <div class="what-data-wrapper">
        <div class="title">
          특수치료
          <simple-svg
            filepath="/static/svg/btn_arr_next.svg"
            stroke="none"
            fill="#c0c0c0"
            width="20"
            height="20"
            class="arrow-icon"
          />
        </div>
        <div class="number" @click="openWhat">
          {{selectedWhatGroup3.length}}건
        </div>
      </div>
      <div class="what-data-wrapper">
        <div class="title">
          입원/간병비
          <simple-svg
            filepath="/static/svg/btn_arr_next.svg"
            stroke="none"
            fill="#c0c0c0"
            width="20"
            height="20"
            class="arrow-icon"
          />
        </div>
        <div class="number" @click="openWhat">
          {{selectedWhatGroup4.length}}건
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import radioShapeCheckbox from '../../../../components/radio-shape-checkbox.component'
  import tRadio from '../../../../../../components/radio-inline.component'
  import tButton from '../../../../../../components/button.component'
  import accordion from '../../../../../../tdk/accordion/accordion.component'

  export default {
    props: {
      value: Array
    },
    mounted () {
      if (this.value && this.value.length > 0) {
        let selectedWhatGroup1 = []
        let selectedWhatGroup2 = []
        let selectedWhatGroup3 = []
        let selectedWhatGroup4 = []
        for (const value of this.value) {
          selectedWhatGroup1 = [...selectedWhatGroup1, ...this.whatGroup1Data.filter(val => val.value === value).map(val => val.value)]
          selectedWhatGroup2 = [...selectedWhatGroup2, ...this.whatGroup2Data.filter(val => val.value === value).map(val => val.value)]
          selectedWhatGroup3 = [...selectedWhatGroup3, ...this.whatGroup3Data.filter(val => val.value === value).map(val => val.value)]
          selectedWhatGroup4 = [...selectedWhatGroup4, ...this.whatGroup4Data.filter(val => val.value === value).map(val => val.value)]
        }
        this.selectedWhatGroup1 = selectedWhatGroup1
        this.selectedWhatGroup2 = selectedWhatGroup2
        this.selectedWhatGroup3 = selectedWhatGroup3
        this.selectedWhatGroup4 = selectedWhatGroup4
        this.selectedAddWhat = true
        this.isSummeryOpen = true
        this.isWhatOpen = false
      }
    },
    data () {
      return {
        isWhatOpen: false,
        isSummeryOpen: false,
        selectedAddWhat: false,
        selectedWhatGroup1: [],
        selectedWhatGroup2: [],
        selectedWhatGroup3: [],
        selectedWhatGroup4: [],
        whatGroup1Data: [
          {title: '상해위로금', value: 'injury'},
          {title: '후유장애위로금', value: 'disable'},
          {title: '사망위로금', value: 'dead'},
          {title: '유산위험위로금', value: 'abort'},
          {title: '화상위로금', value: 'burn'}
        ],
        whatGroup2Data: [
          {title: '치아보정치료비', value: 'dental'},
          {title: '성형수술비', value: 'plastic'},
          {title: '선택진료비', value: 'hitreat'},
          {title: '무수혈치료비', value: 'bloodless'}
        ],
        whatGroup3Data: [
          {title: '뇌 관련 상해', value: 'brain'},
          {title: '성장판 관련 골절손상', value: 'growth'},
          {title: '골절 상해', value: 'fracture'}
        ],
        whatGroup4Data: [
          {title: '상급 병실료', value: 'hiroom'},
          {title: '입원비, 간병비', value: 'hospitalize'}
        ]
      }
    },
    methods: {
      selectAddWhat () {
        if (this.selectedAddWhat) {
          this.$refs.accordion.open()
          this.isWhatOpen = true
        } else {
          this.$refs.accordion.close()
          this.isWhatOpen = false
          this.isSummeryOpen = false
        }
        this.$emit('click', this.selectedAddWhat)
      },
      openWhat () {
        this.$refs.accordion.open()
        this.isWhatOpen = true
        this.isSummeryOpen = false
      },
      selectWhatData () {
        this.$refs.accordion.close()
        this.isWhatOpen = false
        this.isSummeryOpen = true
        const result = [...this.selectedWhatGroup1, ...this.selectedWhatGroup2, ...this.selectedWhatGroup3, ...this.selectedWhatGroup4]
        this.$emit('input', result)
      },
      deleteWhatData () {
        this.selectedWhatGroup1 = []
        this.selectedWhatGroup2 = []
        this.selectedWhatGroup3 = []
        this.selectedWhatGroup4 = []
        this.$emit('input', [])
      }
    },
    components: {
      tRadio,
      radioShapeCheckbox,
      tButton,
      accordion
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../../../style/variable";

  // what 카드 css
  .item-card-wrap {
    width: 550px;
    padding: 42px 30px;
    box-sizing: border-box;
    border: 2px dashed $gray;
    color: $font-color-2;

    .title {
      font-size: 22px;
      margin-bottom: 12px;
    }

    .description {
      font-size: 16px;
      margin-bottom: 30px;
    }

    .question {
      font-size: 16px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      div {
        margin-right: 4px;
      }
      .help-icon {
        cursor: pointer;
        margin-bottom: -5px;
      }
    }
    .radio-wrapper {
      margin-bottom: 42px;
    }
    .border-bottom {
      border-bottom: 1px solid $gray;
    }

    // folded-what-data-wrapper     what 데이터 접힌모습
    .folded-what-data-wrapper {
      display: flex;
      height: 122px;
      align-items: center;
      .what-data-wrapper {
        flex: 1;
      }
      .title {
        font-size: 16px;
        color: $gray-2;
      }
      .arrow-icon {
        display: inline-block;
        transform: translate(0, 3px);
      }
      .number {
        color: $primary-blue;
        font-size: 22px;
        cursor: pointer;
      }
    }
  }

  .what-title {
    margin-bottom: 20px;
    font-size: 18px;
  }
</style>

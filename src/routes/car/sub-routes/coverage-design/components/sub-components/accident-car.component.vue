<template>
  <div class="accident-death-injury">
    <div class="select-death">
      <select-slider title="사망/후유장애 보상한도 설정" v-model="selectedDeath" :isIcon="true"
                     :data="deathList" @clickIcon="openCoverageHelpModal(carAccidentHelpData)">
      </select-slider>
    </div>
    <div class="select-injury" v-if="injuryList.length > 0">
      <select-slider title="부상 보상한도 설정" v-model="selectedInjury"
                     :data="injuryList">
      </select-slider>
    </div>
  </div>
</template>

<script>
  import selectSlider from '../../../../../../components/select-slider.component'

  export default {
    props: {
      initInjury: Object,
      initDeath: Object
    },
    data () {
      return {
        selectedDeath: this.initDeath || {},
        selectedInjury: this.initInjury || {},
        deathList: [
          {title: '미가입', value: 0},
          {title: '1천5백만원', value: 15000000},
          {title: '3천만원', value: 30000000},
          {title: '5천만원', value: 50000000},
          {title: '7천만원', value: 70000000},
          {title: '1억원', value: 100000000},
          {title: '2억원', value: 200000000},
          {title: '3억원', value: 300000000},
          {title: '5억원', value: 500000000}
        ],
        selectedDeathList: {
          '1천5백만원': 'carInjuryGroup1',
          '3천만원': 'carInjuryGroup2',
          '5천만원': 'carInjuryGroup2',
          '7천만원': 'carInjuryGroup3',
          '1억원': 'carInjuryGroup4',
          '2억원': 'carInjuryGroup5',
          '3억원': 'carInjuryGroup6',
          '5억원': 'carInjuryGroup7'
        },
        initInjuryList: {
          carInjuryGroup1: [
            {title: '1천만원', value: 10000000},
            {title: '1천5백만원', value: 15000000}
          ],
          carInjuryGroup2: [
            {title: '1천만원', value: 10000000},
            {title: '1천5백만원', value: 15000000},
            {title: '2천만원', value: 20000000},
            {title: '3천만원', value: 30000000}
          ],
          carInjuryGroup3: [
            {title: '1천만원', value: 10000000},
            {title: '2천만원', value: 20000000},
            {title: '3천만원', value: 30000000}
          ],
          carInjuryGroup4: [
            {title: '1천만원', value: 10000000},
            {title: '1천5백만원', value: 15000000},
            {title: '2천만원', value: 20000000},
            {title: '3천만원', value: 30000000},
            {title: '5천만원', value: 50000000},
            {title: '1억원', value: 100000000}
          ],
          carInjuryGroup5: [
            {title: '1천만원', value: 10000000},
            {title: '2천만원', value: 20000000},
            {title: '3천만원', value: 30000000},
            {title: '5천만원', value: 50000000},
            {title: '1억원', value: 100000000}
          ],
          carInjuryGroup6: [
            {title: '2천만원', value: 20000000},
            {title: '3천만원', value: 30000000},
            {title: '5천만원', value: 50000000},
            {title: '1억원', value: 100000000}
          ],
          carInjuryGroup7: [
            {title: '2천만원', value: 20000000},
            {title: '3천만원', value: 30000000},
            {title: '5천만원', value: 50000000},
            {title: '1억원', value: 100000000}
          ]
        },
        injuryList: [],
        isInitInjury: false,
        carAccidentHelpData: {
          title: '자동차상해 보상조건',
          subTitle: '선택하신 한도 내에서 상해 정도에 상관없이 실제손해액을 보상합니다',
          tip: '자세한 설명은 블로그를 참고해주세요',
          contents: [
            { img: '/static/png/ic_popup_list_01.png', content: '<ul><li>가입금액 전체를 한도로 실제손해액을 보상합니다</li><li>사망 시 장례비, 위자료, 상실수익액 등 실제손해액을 보상합니다</li><li>부상 시 치료비, 위자료, 간병비, 휴업손해 등 실제손해액을 보상합니다</li><li>후유장애 시 위자료, 상실수익액, 가정간호비 등 실제손해액을 보상합니다</li></ul>' },
            { img: '/static/png/ic_popup_list_11.png', content: '<ul><li>보상받는 자는 사고 당시 실제 운전을 한 사람입니다. 단, 운전자범위 내에 있는 사람이어야 합니다</li><li>가족은 해당 운전자의 부모, 배우자, 자녀를 포함합니다</li></ul>' }
          ]
        }
      }
    },
    methods: {
      selectDeath () {
        if (this.selectedDeath) {
          this.injuryList = []
          const initInjuryKey = this.selectedDeathList[this.selectedDeath.title]
          setTimeout(() => {
            this.injuryList = this.initInjuryList[initInjuryKey] || []
            if (JSON.stringify(this.selectedDeath) === JSON.stringify(this.initDeath)) {
              if (!this.isInitInjury) {
                this.selectedInjury = this.initInjury
                this.isInitInjury = true
              } else {
                this.selectedInjury = {}
              }
            } else {
              this.selectedInjury = {}
            }
          })
          this.$emit('selectedDeath', this.selectedDeath)
        }
      },
      selectInjury () {
        if (this.selectedInjury) {
          this.$emit('selectedInjury', this.selectedInjury)
        }
      },
      openCoverageHelpModal (data) {
        this.$emit('openCoverageHelpModal', data)
      }
    },
    watch: {
      selectedDeath () {
        this.selectDeath()
      },
      selectedInjury () {
        this.selectInjury()
      }
    },
    components: {
      selectSlider
    }
  }
</script>

<style scoped lang="scss">
  .accident-death-injury {
    margin-bottom: 45px;

    .select-injury {
      margin-top: 60px;
    }
  }
</style>

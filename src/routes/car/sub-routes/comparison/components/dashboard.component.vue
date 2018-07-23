<template>
  <div>
    <!-- 원형 프로그래스 바 -->
    <div class="progress-bar-wrapper">
      <circle-progress title="담보적합도" :rate="coverageScore" class="progress-bar">
      </circle-progress>
      <circle-progress v-if="!selectedPackage" title="설계매칭율" :rate="Number(matchingScore)" class="progress-bar middle">
      </circle-progress>
      <circle-progress title="매칭 내역" v-if="!selectedPackage"
                       :rate="Number(matchingScore)"
                       :rateTitle="items ? items.length : 0"
                       class="progress-bar">
      </circle-progress>
    </div>
    <!-- 상단 담보적합도 -->
    <div class="matching-score-wrapper">
      <div class="matching-score-title">
        핵심담보 적합도
      </div>
      <div class="matching-score-percentage">
        {{coverageScore}}%
      </div>
    </div>
    <!-- 우측상단 핵사곤 가이드 -->
    <div class="hexagon-guide-wrapper">
      <div class="hexagon-guide">
        <div class="hexagon-guide-square"></div>
        <label class="hexagon-guide-label">나의 보험 한도</label>
      </div>
      <div class="hexagon-guide">
        <div class="hexagon-guide-line"></div>
        <label class="hexagon-guide-label">보험사 보유한도</label>
      </div>
    </div>
    <!-- 핵사곤 도형 -->
    <hexagon :companyCoverage="data.coverage" :inputCoverage="inputCoverage" :is-car="data.coverage.accident.isCar"
             class="hexagon">
    </hexagon>
    <!-- 담보 -->
    <div class="coverage-wrapper">
      <div class="coverage left">
        <div class="coverage-title">대인배상I</div>
        <div class="coverage-value">1억 5천만원/부상 3천만원</div>
      </div>
      <div class="coverage right">
        <div class="coverage-title">대인배상II</div>
        <div class="coverage-value">{{data.coverage.person2.title}}</div>
      </div>
      <div class="coverage left">
        <div class="coverage-title">대물배상</div>
        <div class="coverage-value">{{data.coverage.object.title}}</div>
      </div>
      <div class="coverage right">
        <div class="coverage-title" v-if="data.coverage.accident.isCar">자동차상해</div>
        <div class="coverage-title" v-if="!data.coverage.accident.isCar">자기신체사고</div>
        <div class="coverage-value">
          <div v-if="data.coverage.accident.death.value === 0">미가입</div>
          <div v-else>사망 {{data.coverage.accident.death.title}}/부상 {{data.coverage.accident.injury.title}}</div>
        </div>
      </div>
      <div class="coverage left">
        <div class="coverage-title">무보험차</div>
        <div class="coverage-value">{{data.coverage.uninsuredCar.title}}</div>
      </div>
      <div class="coverage right">
        <div class="coverage-title">자기차량손해</div>
        <div class="coverage-value">
          {{data.coverage.selfCar.rate.title}}
          ({{data.coverage.selfCar.min.title}} - {{data.coverage.selfCar.max.title}})
        </div>
      </div>
      <div class="coverage left last">
        <div class="coverage-title">긴급출동서비스</div>
        <div class="coverage-value">
          {{data.dispatch.length === 0 ? '미가입' : ''}}
          <div v-for="dispatch of data.dispatch">
            {{dispatch.title}}
          </div>
        </div>
      </div>
      <div class="coverage right last">
        <div class="coverage-title">물적사고할증기준</div>
        <div class="coverage-value">
          {{inputCoverage.surcharge.title}}
        </div>
      </div>
    </div>
    <!-- 중단 설계매칭율 -->
    <div v-if="!selectedPackage">
      <div class="matching-score-wrapper">
        <div class="matching-score-title">
          추가특약 적합도
        </div>
        <div class="matching-score-percentage">
          {{matchingScore}}%
        </div>
      </div>
      <!-- 해쉬태그 -->
      <div class="hashtags-wrapper">
        <div class="hashtag-label">
          대인사고
        </div>
        <div class="hashtags">
          <span :class="{selected: person.isOutput}" v-for="(person, index) of personTags"
                :keys="index" class="hashtag">
            #{{person.title}}
          </span>
        </div>
      </div>
      <div class="hashtags-wrapper">
        <div class="hashtag-label">
          대물 사고
        </div>
        <div class="hashtags">
          <span :class="{selected: object.isOutput}" v-for="(object, index) of objectTags"
                :keys="index" class="hashtag">
            #{{object.title}}
          </span>
        </div>
      </div>
      <div class="hashtags-wrapper">
        <div class="hashtag-label">
          자기신체사고
        </div>
        <div class="hashtags">
          <span :class="{selected: accident.isOutput}" v-for="(accident, index) of accidentTags"
                :keys="index" class="hashtag">
            #{{accident.title}}
          </span>
        </div>
      </div>
      <div class="hashtags-wrapper">
        <div class="hashtag-label">
          무보험차사고
        </div>
        <div class="hashtags">
          <span :class="{selected: uninsuredCar.isOutput}" v-for="(uninsuredCar, index) of uninsuredCarTags"
                :keys="index" class="hashtag">
            #{{uninsuredCar.title}}
          </span>
        </div>
      </div>
      <div class="hashtags-wrapper">
        <div class="hashtag-label">
          자차사고
        </div>
        <div class="hashtags">
          <span :class="{selected: selfCar.isOutput}" v-for="(selfCar, index) of selfCarTags"
                :keys="index" class="hashtag">
            #{{selfCar.title}}
          </span>
        </div>
      </div>
      <!-- 하단 매칭내역 -->
      <div class="matching-score-wrapper last">
        <div class="matching-score-title">
          추가특약 매칭내역
        </div>
        <div class="matching-score-percentage">
          <div v-if="!data.matchingItem.matchingItem">
            총 0개 특약 매칭
          </div>
          <div v-if="data.matchingItem.matchingItem">
            총 {{items.length}}개 특약 매칭
          </div>
        </div>
      </div>
      <!-- 하단 매칭내역 가이드 -->

      <div v-if="items">
        <div v-if="personOrObjectItems.length > 0">
          <div class="item-guide-title">배상책임 보상 확대 {{personOrObjectItems.length}}개</div>
          <item-guide-accordion class="item-guide-accordion"
                                v-for="item of personOrObjectItems" :key="item.id" :data="item">
          </item-guide-accordion>
        </div>
        <div v-if="accidentItems.length > 0">
          <div class="item-guide-title">
            {{data.coverage.accident.isCar ? '자동차상해' : '자기상해'}} 보상 확대 {{accidentItems.length}}개
          </div>
          <item-guide-accordion class="item-guide-accordion"
                                v-for="(item, index) of accidentItems" :key="index" :data="item">
          </item-guide-accordion>
        </div>
        <div v-if="uninsuredCarItems.length > 0">
          <div class="item-guide-title">교통사고 보상 확대 {{uninsuredCarItems.length}}개</div>
          <item-guide-accordion class="item-guide-accordion"
                                v-for="(item, index) of uninsuredCarItems" :key="index" :data="item">
          </item-guide-accordion>
        </div>
        <div v-if="selfCarItems.length > 0">
          <div class="item-guide-title">차량손해 보상 확대 {{selfCarItems.length}}개</div>
          <item-guide-accordion class="item-guide-accordion"
                                v-for="(item, index) of selfCarItems" :key="index" :data="item">
          </item-guide-accordion>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import hexagon from '../../../../../components/hexagon.component'
  import itemGuideAccordion from './sub-component/item-guide-accordion.component'
  import circleProgress from './sub-component/circle-progress.component'

  export default {
    props: {
      data: Object
    },
    data () {
      return {
        items: [],
        inputCoverage: this.$store.getters.getInsuranceInput.coverage,
        selectedPackage: this.$store.getters.getInsuranceInput.selectedPackage,
        tags: this.$store.getters.getInsurance('tags'),
        attributes: this.$store.getters.getInsuranceInput.matchingAttribute,
        coverageScore: 0,
        matchingScore: 0,
        personTags: [],
        objectTags: [],
        accidentTags: [],
        uninsuredCarTags: [],
        selfCarTags: [],
        personOrObjectItems: [],
        accidentItems: [],
        uninsuredCarItems: [],
        selfCarItems: []
      }
    },
    created () {
      this.init()
    },
    methods: {
      init () {
        if (this.data) {
          this.initData()
          this.getMatchingScore()
          this.getCoverageScore()
          this.concatItems()
          this.getTags()
          this.getItemGroup()
        }
      },
      initData () {
        this.items = []
        this.personTags = []
        this.objectTags = []
        this.accidentTags = []
        this.uninsuredCarTags = []
        this.selfCarTags = []
        this.personOrObjectItems = []
        this.accidentItems = []
        this.uninsuredCarItems = []
        this.selfCarItems = []
      },
      concatItems () {
        const matching = this.data.matchingItem.matchingItem
        if (matching) {
          const matchingItem = matching.items || []
          const matchingAutoItem = matching.autoAddItems || []
          const autoItems = this.data.matchingItem.autoAddItems || []
          const items = [...matchingItem, ...matchingAutoItem, ...autoItems]
          for (const item of items) {
            let has = false
            for (const subItem of this.items) {
              if (subItem.title === item.title) {
                has = true
              }
            }

            if (!has) {
              this.items.push(item)
            }
          }
        }
      },
      getMatchingScore () {
        const matchingItem = this.data.matchingItem.matchingItem
        if (matchingItem) {
          const total = matchingItem.selectAttribute.length
          const score = matchingItem.score
          const matchingScore = (total - score.needCount - score.sameCount - score.overCount) / total * 100
          this.matchingScore = matchingScore.toFixed(1)
        } else {
          this.matchingScore = 0
        }
      },
      getCoverageScore () {
        const coverage = this.data.coverage
        const companyTotal = coverage.accident.score + coverage.person2.score + coverage.object.score +
          coverage.selfCar.score + coverage.uninsuredCar.score
        const total = 48
        this.coverageScore = Math.round((total - companyTotal) / total * 100)
      },
      getItemGroup () {
        if (this.items) {
          this.selfCarItems = this.items.filter(item => item.group === 'selfCar')
          this.personOrObjectItems = this.items.filter(item => item.group === 'personOrObject')
          this.accidentItems = this.items.filter(item => item.group === 'accident')
          this.uninsuredCarItems = this.items.filter(item => item.group === 'uninsuredCar')
        }
      },
      getTags () {
        const attributes = Object.keys(this.attributes)
          .filter(attribute => attribute !== 'subAttributes' && this.attributes[attribute])
        const tagAttributes = [...attributes, ...this.attributes.subAttributes.when1]

        const person = new Set()
        const object = new Set()
        const accident = new Set()
        const uninsuredCar = new Set()
        const selfCar = new Set()
        for (const attribute of tagAttributes) {
          const matchingItem = this.data.matchingItem.matchingItem
          let isOutput = false
          if (matchingItem) {
            for (const item of matchingItem.attributes) {
              if (item.includes(attribute)) {
                isOutput = true
                break
              }
            }
          }
          if (this.tags.person[attribute]) {
            person.add({title: this.tags.person[attribute], isOutput})
          } else if (this.tags.object[attribute]) {
            object.add({title: this.tags.object[attribute], isOutput})
          } else if (this.tags.accident[attribute]) {
            accident.add({title: this.tags.accident[attribute], isOutput})
          } else if (this.tags.uninsuredCar[attribute]) {
            uninsuredCar.add({title: this.tags.uninsuredCar[attribute], isOutput})
          } else if (this.tags.selfCar[attribute]) {
            selfCar.add({title: this.tags.selfCar[attribute], isOutput})
          }
        }
        this.personTags = Array.from(person)
        this.objectTags = Array.from(object)
        this.accidentTags = Array.from(accident)
        this.uninsuredCarTags = Array.from(uninsuredCar)
        this.selfCarTags = Array.from(selfCar)
      }
    },
    watch: {
      data () {
        this.init()
      }
    },
    components: {
      hexagon,
      itemGuideAccordion,
      circleProgress
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../../style/variable";
  @import "../../../../../style/mixin";

  .card-container-wrapper {
    background-color: #fff;
    box-shadow: 14px 14px 14px rgba(255, 140, 140, 0.05);
    border-radius: 8px;
    padding: 40px;

    // 원형 프로그레스 바
    .progress-bar-wrapper {
      height: 148px;
      margin-bottom: 38px;
      display: flex;
      .progress-bar {
        flex: 1;
        display: flex;
        justify-content: center;

        &.middle {
          border-right: 1px solid $gray;
          border-left: 1px solid $gray;
        }
      }
    }
    // 담보적합도, 매칭설계율, 매칭내역
    .matching-score-wrapper {
      height: 58px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid $disabled;
      &.last {
        margin-top: 40px;
        margin-bottom: 44px;
      }
      .matching-score-title {
        font-size: 22px;
      }
      .matching-score-percentage {
        color: $primary-blue;
        font-size: 22px;
      }
    }
    // 핵사곤 가이드
    .hexagon-guide-wrapper {
      height: 78px;
      position: relative;
      .hexagon-guide {
        display: flex;
        align-items: center;
        position: absolute;
        right: 18px;
        top: 16px;
        &:first-child {
          right: 135px;
        }
      }
      .hexagon-guide-square {
        display: inline-block;
        margin-right: 5px;
        background-color: $primary-blue;
        opacity: 0.6;
        width: 18px;
        height: 18px;
      }
      .hexagon-guide-line {
        display: inline-block;
        margin-right: 5px;
        background-color: $primary-blue;
        width: 18px;
        height: 2px;
      }
      .hexagon-guide-label {
        color: #8e8e8e;
        font-size: 12px;
      }
    }
    // 핵사곤
    .hexagon {
      display: flex;
      justify-content: center;
    }
    // 담보
    .coverage-wrapper {
      margin-top: 10px;
      .coverage {
        vertical-align: top;
        width: 250px;
        min-height: 44px;
        padding-bottom: 26px;
        display: inline-block;
      }
      .left {
        border-right: 1px solid $gray;
        padding-right: 25px;
      }
      .right {
        margin-left: 40px;
        width: 230px;
      }
      .last {
        margin-bottom: 36px;
        padding-bottom: 10px;
      }
      .coverage-value {
        font-size: 16px;
      }
      .coverage-title {
        @include fontAndColor(12px, #8e8e8e);
      }
    }
    // 해쉬태그
    .hashtags-wrapper {
      height: 54px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid $gray;
      .hashtag-label {
        width: 100px;
        margin-right: 20px;
      }
      .hashtags {
        flex: 1;
        width: 100%;
        position: relative;
        overflow-x: auto;
        white-space: nowrap;
        height: 54px;
        display: flex;
        align-items: center;
      }
      .hashtag {
        margin-right: 20px;
        border: 1px solid $background-gray;
        border-radius: 24px;
        padding: 4px 10px 0;
        height: 24px;
        font-size: 12px;
        &:last-child {
          margin-right: 0;
        }
        &.selected {
          background-color: $primary-blue;
          color: #fff
        }
      }
    }
    // 하단 매칭내역 가이드
    .item-guide-title {
      margin-bottom: 18px;
      font-size: 16px;
    }
    .item-guide-accordion {
      margin-bottom: 10px;
    }
  }
</style>

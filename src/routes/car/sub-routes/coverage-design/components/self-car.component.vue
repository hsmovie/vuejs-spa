<template>
  <div>
    <card-container title="자기차량손해" sub-title="내 차에 생긴 직접손해를 보상합니다.">
      <div>
        <div class="select-box">
          <select-slider title="손해액 부담비 설정" v-model="selectRate" :isIcon="true"
                         :data="selectRateData" @clickIcon="openCoverageHelpModal(helpData)">
          </select-slider>
        </div>
        <div class="min-max-box" :class="{'bottom': !isPackage}" v-if="this.selectRate.value !== 0">
          <div class="title">
            자기부담금 설정
          </div>
          <div>
            <div class="select-lebel-box">
              <div class="label">최소금액</div>
              <select disabled>
                <option value="" v-if="!min">대물배상을 설정하세요.</option>
                <option :value="min.value" v-else>{{min.title}}</option>
              </select>
            </div>
            <div class="division">
              ~
            </div>
            <div class="select-lebel-box">
              <div class="label">최대금액</div>
              <select v-model="max.value" @change="changeMax">
                <option value="">선택하세요.</option>
                <option v-for="(item, index) of maxOptions" :key="index"
                        :value="item.value">{{item.title}}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div v-if="!isPackage && selectRate.value !== 0">
          <item-card title="자기차량손해 보장 범위 선택"
                     question="어떤 조건으로 자기차량손해를 설계하시겠습니까?"
                     description="자기차량손해는 차대차 사고로만 보상범위를 한정하거나, 차량단독사고를 포함시켜 보상범위를 넓힐 수 있습니다."
                     icon="/static/png/img_boxbg_05-1.png"
                     :tip="{title: '차량 단독사고란?', content: '가해자 불명사고나 타 물체와의 충돌, 차량 침수로 인한 손해, 풍력에 의해 차체에 생긴 손해까지 보상합니다. 합리적인 가격으로 다양한 차량손해에 대해 안심할 수 있습니다.'}"
                     :value="initSelfCarRage" left-label="차량 단독사고 포함" right-label="차대차 사고 한정"
                     @click="isIt">
          </item-card>

          <item-card title="자기차량손해 보상한도 확대"
                     question="내 차 수리 시 보상한도를 120~150%까지 확대하는 특약을 추가하시겠습니까?"
                     description="고액의 차량 수리비를 대비하는 특약 입니다. 기본 자차담보는 차량기준가액을 한도로 하고 있어, 고가의 수입차 또는 오래된 차량인 경우 충분한 보상이 안됩니다."
                     icon="/static/png/img_boxbg_05-2.png"
                     :tip="{title: '차량기준가액이란?', content: '보험개발원이 정한 차량별 기준금액을 말하며, 자차 보상은 사고 발생 시점의 최근 차량기준가액을 한도로 합니다. '}"
                     :value="sevenYearsUpperForeignCar"
                     @click="selectedSevenYearsUpperForeignCar">
          </item-card>

          <item-card title="대체교통비 또는 렌트비 보상"
                     description="사고로 내 차의 운행이 불가한 경우 대체교통비 또는 렌트비를 보상받을 수 있습니다."
                     :accordionData="{
                        title: '대체교통비 또는 렌트비 보상 특약을 추가하시겠습니까?',
                        radio1: {
                          title: '네, 추가해주세요.',
                          value: true,
                          isOpen: true
                        },
                        radio2: {
                          title: '아니오',
                          value: false
                        },
                        radioValue: initTransOrRentCost.base,
                        sub: {
                          title: '원하시는 보상조건을 선택해주세요. 중복보상은 불가합니다.',
                          radio1: {
                            title: '대체교통비',
                            value: true
                          },
                          radio2: {
                            title: '렌트비',
                            value: false
                          },
                          radioValue: initTransOrRentCost.sub
                        }
                      }"
                     @radioAccordionCallback="selectedTransOrRentCost"
                     icon="/static/png/img_boxbg_05-3.png">
          </item-card>

          <item-card title="레저용품 파손 보상"
                     question="레저용품 파손 시 보상받을 수 있는 특약을 추가하시겠습니까?"
                     description="사고로 인해 내 차에 있는 레저용품이 파손된 경우 보상받을 수 있습니다."
                     icon="/static/png/img_boxbg_05-4.png"
                     :tip="{title: '레저용품이란?', content: '등산, 여행, 스키, 인라인스케이트, 자전거, 모터보트, 골프, 낚시, 카메라 등 여가생활을 위한 물품을 말합니다.'}"
                     :value="leisureGoods"
                     @click="selectedLeisureGoods">
          </item-card>

          <item-card title="신차가액 보상"
                     question="신차가격 전부를 보상받는 특약을 추가하시겠습니까?"
                     description="1년 이내(또는 6개월 이내) 신차의 경우 대형사고 발생 시 신차가격 전부를 보상받을 수 있습니다. 전손사고 또는 수리비가 신차가격의 70%를 초과하는 경우에 한정됩니다."
                     icon="/static/png/img_boxbg_05-5.png"
                     :value="newCarCost"
                     @click="selectedNewCarCost">
          </item-card>

          <item-card title="자동차시세하락 손해 보상"
                     question="이러한 시세하락 손해를 보상받을 수 있는 특약을 추가하시겠습니까?"
                     description="중형 이상의 사고를 내게 되면 연식, 주행거리와 상관없이 중고차 가격이 떨어집니다. "
                     icon="/static/png/img_boxbg_05-6.png"
                     :value="devaluateCarCost"
                     :tip="{title: '차량 수리비의 10~15%를 지급합니다'}"
                     @click="selectedDevaluateCarCost">
          </item-card>

          <item-card title="교체차량에 대한 취등록세 지원"
                     question="교체차량에 대한 취등록세를 지원받는 특약을 추가하시겠습니까?"
                     description="내 차의 전부손해(또는 70% 이상 파손)로 차량을 교체하는 경우 취등록세를 지원받을 수 있습니다."
                     icon="/static/png/img_boxbg_05-7.png"
                     :value="imprintSupport"
                     @click="selectedImprintSupport">
          </item-card>

          <item-card title="원격지 차량사고 대비"
                     question="원격지 사고에 대비한 차량운반비 보상특약을 추가하시겠습니까?"
                     description="원격지에서 사고가 발생하면 차량운반에 따른 많은 비용이 청구됩니다. 거주지 인근 정비공장 운반, 수리 후 차량인도 등 장거리 이동이 불가피하기 때문입니다"
                     icon="/static/png/img_boxbg_05-8.png"
                     :value="transportCarSupport"
                     @click="selectedTransportCarSupport">
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
      initMin: Object,
      initMax: Object,
      initRate: Object,
      initSelfCarRage: Boolean,
      initTransOrRentCost: {
        type: Object,
        default: { base: false }
      },
      sevenYearsUpperForeignCar: Boolean,
      transportationCost: Boolean, // 교통비
      rentCarCost: Boolean, // 렌트용+렌터카
      leisureGoods: Boolean, // 레저
      newCarCost: Boolean, // 신차가액보상
      devaluateCarCost: Boolean, // 자동차시세하락 손해보상
      imprintSupport: Boolean, // 취등록세 지원
      transportCarSupport: Boolean // 사고차량 운반지원
    },
    mounted () {
      this.isIt(this.initSelfCarRage)
    },
    data () {
      return {
        min: this.initMin,
        max: this.initMax || {title: null, value: null},
        selectRate: this.initRate || {},
        selectRateData: [
          {title: '미가입', value: 0},
          {title: '20%', value: 20},
          {title: '30%', value: 30}
        ],
        maxOptions: [
          {title: '50만원', value: 500000},
          {title: '100만원', value: 1000000},
          {title: '200만원', value: 2000000}
        ],
        helpData: {
          title: '자기차량손해 보상조건',
          subTitle: '사고 발생 시점의 차량가액을 최고 한도로 내차에 생긴<br>직접 손해를 보상 받을 수 있습니다.',
          contents: [
            {img: '/static/png/ic_popup_list_01.png', content: '<ul><li>자기부담비율은 총 차량손해액에 대해 본인이 부담하는 비율을 말합니다</li><li>이때 자기부담금을 설정하여 본인이 부담하는 최소, 최대금액을 정합니다</li><li>자차사고에 대한 자기부담이 높을수록 보험료는 낮아집니다</li></ul>'},
            {img: '/static/png/ic_popup_list_01.png', content: '<ul><li>일부도난 사고는 보상하지 않습니다 (전부도난은 가능)</li></ul>'},
            {img: '/static/png/ic_popup_list_02.png', content: '<ul><li>무면허, 음주사고, 운전자한정 위반 시 보상하지 않습니다</li></ul>'},
            {img: '/static/png/ic_popup_list_10.png', content: '<ul><li>차량단독사고를 포괄하는 특약에 가입 시 침수피해도 보상받을 수 있습니다</li></ul>'}
          ]
        }
      }
    },
    methods: {
      isIt (isIt) {
        this.$emit('selectedSelfCarRage', isIt)
      },
      selectedRate () {
        if (this.selectRate) {
          this.$emit('selectedRate', this.selectRate)
        }
      },
      selectedSevenYearsUpperForeignCar (selectSevenYearsUpperForeignCar) {
        this.$emit('selectedSevenYearsUpperForeignCar', selectSevenYearsUpperForeignCar)
      },
      selectedTransOrRentCost (isIt) {
        this.$emit('selectedTransOrRentCost', isIt)
      },
      selectedLeisureGoods (selectLeisureGoods) {
        this.$emit('selectedLeisureGoods', selectLeisureGoods)
      },
      selectedNewCarCost (selectNewCarCost) {
        this.$emit('selectedNewCarCost', selectNewCarCost)
      },
      selectedDevaluateCarCost (selectDevaluateCarCost) {
        this.$emit('selectedDevaluateCarCost', selectDevaluateCarCost)
      },
      selectedImprintSupport (selectImprintSupport) {
        this.$emit('selectedImprintSupport', selectImprintSupport)
      },
      selectedTransportCarSupport (selectTransportCarSupport) {
        this.$emit('selectedTransportCarSupport', selectTransportCarSupport)
      },
      openCoverageHelpModal (data) {
        this.$emit('openCoverageHelpModal', data)
      },
      changeMax () {
        if (this.max.value) {
          const value = this.max.value.toString()
          const result = {
            value: this.max.value,
            title: value.substring(0, value.length - 4) + '만원'
          }
          this.$emit('selectedMax', result)
        }
      }
    },
    watch: {
      selectRate () {
        this.selectedRate()
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

  .min-max-box {
    font-size: 16px;
    color: $font-color-2;

    &.bottom {
      margin-bottom: 64px;
    }

    .title {
      margin-bottom: 24px;
    }

    .select-lebel-box {
      display: inline-block;
      box-sizing: border-box;
      height: 73px;
      width: 240px;
      .label {
        font-size: 14px;
      }
      select {
        font-size: 16px;
        border: none;
        background: #fff;
        width: 100%;
        height: 50px;
      }
    }
    .division {
      text-align: center;
      display: inline-block;
      width: 50px;
    }
  }
</style>

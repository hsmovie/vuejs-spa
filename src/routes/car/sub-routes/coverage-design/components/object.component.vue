<template>
  <div>
    <card-container title="대물배상" sub-title="상대방 차량 등 다른 사람의 재물을 훼손한 경우에 보상합니다">
      <div>
        <div class="select-object">
          <select-slider title="보상한도 설정(의무가입)" v-model="selectedObject" :isIcon="true"
                         :data="coverage.object" @clickIcon="openCoverageHelpModal(objectHelpData)"></select-slider>
        </div>
        <div class="select-surcharge">
          <select-slider title="물적사고 할증기준금액 설정" v-model="selectedSurcharge" :isIcon="true"
                         :data="coverage.surcharge" @clickIcon="openCoverageHelpModal(surchargeHelpData)"></select-slider>
        </div>
        <div v-if="!isPackage">
          <item-card title="고가의 외제차 사고 대비"
                     question="수입차에 대해서만 대물배상의 한도를 높이는 특약을 추가하시겠습니까?"
                     description="값비싼 수입차 사고 시 고액의 수리비로 난감한 경우가 많습니다. 주변도로에 수입차가 많고 대물배상의 한도를 낮게 가입하신 분은 이에 대비하셔야 합니다."
                     icon="/static/png/img_boxbg_02.png"
                     :value="foreignCarAccident"
                     @click="isForeignCarAccident">
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
      object: Object,
      surcharge: Object,
      foreignCarAccident: Boolean
    },
    data () {
      return {
        selectedObject: this.object,
        selectedSurcharge: this.surcharge,
        objectHelpData: {
          title: '대물배상 보상조건',
          subTitle: '선택하신 보상한도 내에서 상대방 재물에 대한<br> 직접손해와 간접손해를 보상합니다',
          contents: [
            { img: '/static/png/ic_popup_list_01.png', content: '<ul><li>보상한도는 1사고당 적용됩니다</li><li>수리비, 렌트비, 휴차료, 영업손실, 시세하락손해 등을 보상합니다</li></ul>' },
            { img: '/static/png/ic_popup_list_02.png', content: '<ul><li>무면허, 음주사고는 100만원의 본인부담금이 부과됩니다</li></ul>' },
            { img: '/static/png/ic_popup_list_05.png', content: '<ul><li>무면허사고는 2천만원(의무가입금액)을 한도로 보상합니다</li></ul>' },
            { img: '/static/png/ic_popup_list_06.png', content: '<ul><li>운전자범위, 최저연령을 위반한 경우 보상이 불가합니다</li></ul>' }
          ]
        },
        surchargeHelpData: {
          title: '물적할증기준금액 보상조건',
          subTitle: '선택하신 금액을 초과하는 사고를 낸 경우<br> 갱신 시에 보험료가 할증됩니다',
          contents: [
            { img: '/static/png/ic_popup_list_05.png', content: '<ul><li>물적사고란 대물사고 및 자기차량사고를 말합니다</li></ul>' },
            { img: '/static/png/ic_popup_list_06.png', content: '<ul><li>기준금액은 해당사고에 따른 할인할증등급의 조정여부를 결정하는 금액입니다</li></ul>' },
            { img: '/static/png/ic_popup_list_07.png', content: '<ul><li>기준금액 이하 사고도 1건을 초과하면 보험료가 할증됩니다</li><li>최근 3년 이내 다른 사고경력이 있는 경우 보험료가 올라갈 수 있습니다</li></ul>' }
          ]
        }
      }
    },
    methods: {
      isForeignCarAccident (ForeignCarAccident) {
        this.$emit('selectedForeignCarAccident', ForeignCarAccident)
      },
      selectObject () {
        this.$emit('selectedObject', this.selectedObject)
      },
      selectSurcharge () {
        this.$emit('selectedSurcharge', this.selectedSurcharge)
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
      selectedObject () {
        this.selectObject()
      },
      selectedSurcharge () {
        this.selectSurcharge()
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
  .select-object {
    margin-bottom: 45px;
  }
  .select-surcharge {
    margin-top: 30px;
    margin-bottom: 45px;
  }
</style>

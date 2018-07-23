<template>
  <div>
    <car-header></car-header>
    <div class="car-content">
      <div class="card-container-wrapper">
        <!-- 상단 보험사 선택 바 -->
        <select-company :companyList="companyList" @selectedCompany="selectedCompany"></select-company>
        <dashboard v-if="isShowDashboard" :data="dashboardData"></dashboard>
      </div>
      <t-button width="310">보험료 할인 정보</t-button>
      <t-button width="310" right @click="go()">보험사 바로가기</t-button>
    </div>
  </div>
</template>

<script>
  import carHeader from '../../components/car-header.component'
  import tButton from '../../../../components/button.component'
  import selectCompany from './components/select-company.component'
  import dashboard from './components/dashboard.component'

  export default {
    data () {
      return {
        output: this.$store.getters.getOutput,
        isShowDashboard: false,
        companyList: [],
        dashboardData: null,
        company: '',
        companyLinks: {
          samsung: 'https://direct.samsungfire.co.kr/CR_MyAnycarWeb/Index.do?method=CalcPage&pdName=car&static=NI&AX=Y',
          hyundai: 'https://direct.hi.co.kr/service.do?m=28680681ee&inpath=MB',
          axa: 'https://www.axa.co.kr/ActionControler.action?screenID=SHAI0000&actionID=I01',
          db: 'https://www.directdb.co.kr/product/at/pvuatarc/step1/formStepPre.do',
          hanwha: 'https://www.hanwhadirect.com/ccr/index.do?cmpgId=&cmpgCd=01&mediaCd=38&gdCsfcd=CA00102&ndArivCtmBjYn=',
          heungkuk: 'http://www.eyoudirect.co.kr/cm_web.jsp?ccid=0497002010#menu:CMWEBLM510',
          kb: ' http://direct.kbinsure.co.kr/home/#/WS/IS/COMN_4012M/',
          lotte: 'http://www.lottehowmuch.com/index2.jsp?EKAMS=yahoo.796.3539.1011.1467774195374.20160382&trackingDays=30&gclid=EAIaIQobChMI6eat64yC2gIVFJa9Ch3k8wKIEAAYASAAEgJmyPD_BwE',
          meritz: 'https://www.meritzdirect.com/auto-and-driver.do#!/',
          mg: 'https://mdirect.mggeneralins.com/MA010010DM.scp',
          thek: 'https://www.educar.co.kr/websquare/educar.jsp?w2xPath=/static/web/insurancepay/carInsCalcPopup.xml&sAffiliatedConcernKey=adIns&sJehuParam=1178958'
        }
      }
    },
    created () {
      this.companyList = Object.keys(this.output)
    },
    methods: {
      go () {
        window.open(this.companyLinks[this.company], '_blank')
      },
      selectedCompany (company) {
        this.company = company
        this.isShowDashboard = false
        this.dashboardData = this.output[company]
        this.isShowDashboard = true
      }
    },
    components: {
      carHeader,
      tButton,
      selectCompany,
      dashboard
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../style/car";
  @import "../../../../style/variable";
  @import "../../../../style/mixin";

  .card-container-wrapper {
    background-color: #fff;
    box-shadow: 14px 14px 14px rgba(255, 140, 140, 0.05);
    border-radius: 8px;
    padding: 40px;
    margin-bottom: 40px;

    // 원형 프로그레스 바
    .progress-bar-wrapper {
      height: 148px;
      margin-bottom: 38px;
      display: flex;
      .progress-bar {
        flex: 1;
        display: flex;
        justify-content: center;
        // &.left {
        //   margin-right: 20px;
        // }
        // &.right {
        //   float: right;
        //   margin-left: 20px;
        // }
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
        width: 250px;
        height: 44px;
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
        display: flex;
        align-items: center;
        overflow: scroll;
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

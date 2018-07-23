<template>
  <modal ref="modal">
    <div class="root-wrapper" v-if="data">
      <div class="content-wrapper">
        <div class="title">{{ data.title }}</div>
        <div class="subTitle">{{ data.subTitle }}</div>
        <hexagon :companyCoverage="data.detail" class="hexagon" :isCar="data.detail.accident.isCar"></hexagon>
        <div>6대 담보구성</div>
        <div class="coverage-wrapper">
          <div class="coverage left">
            <div class="coverage-title">대인배상I</div>
            <div class="coverage-value">1억 5천만원/부상 3천만원</div>
          </div>
          <div class="coverage right">
            <div class="coverage-title">대인배상II</div>
            <div class="coverage-value">{{ data.detail.person2.title }}</div>
          </div>
          <div class="coverage left">
            <div class="coverage-title">대물배상</div>
            <div class="coverage-value">{{ data.detail.object.title }}</div>
          </div>
          <div class="coverage right">
            <div class="coverage-title">{{ data.detail.accident.isCar ? '자동차 상해' : '자기신체 사고' }}</div>
            <div class="coverage-value">{{ data.detail.accident.death.title }} / 부상 {{ data.detail.accident.injury.title }}</div>
          </div>
          <div class="coverage left last">
            <div class="coverage-title">무보험차</div>
            <div class="coverage-value">{{ data.detail.uninsuredCar.title }}</div>
          </div>
          <div class="coverage right last">
            <div class="coverage-title">자기차량손해</div>
            <div class="coverage-value">{{ data.detail.selfCar.rate.title === '미가입' ? '미가입' : data.detail.selfCar.rate.title + '(' + data.detail.selfCar.min.title + '-' + data.detail.selfCar.max.title + ')'}}</div>
          </div>
          <div class="coverage left last">
            <div class="coverage-title">긴급출동서비스</div>
            <div class="coverage-value">기본</div>
          </div>
          <div class="coverage right last">
            <div class="coverage-title">물적사고할증기준</div>
            <div class="coverage-value">{{ data.detail.surcharge.title }}</div>
          </div>
        </div>
      </div>
      <div class="button-wrapper">
        <tutto-button width="310" class="button" @click="okay">선택</tutto-button>
        <tutto-button width="310" gray class="button close-button" @click="close">닫기</tutto-button>
      </div>
    </div>
  </modal>
</template>

<script>
  import modal from '../../../tdk/modal/modal.component'
  import button from '../../../components/button.component'
  import hexagon from '../../../components/hexagon.component'

  export default {
    props: {
      data: Object
    },
    methods: {
      open () {
        this.$refs.modal.open()
      },
      close () {
        this.$refs.modal.close()
      },
      okay () {
        this.close()
      }
    },
    components: {
      modal,
      hexagon,
      'tutto-button': button
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../style/variable';
  @import '../../../style/mixin';

  .root-wrapper {
    width: 630px;

    .content-wrapper {
      width: 550px;
      padding-top: 44px;
      padding-left: 40px;
      padding-right: 40px;
      .title {
        font-size: 22px;
        margin-bottom: 8px;
      }
      .subTitle {
        font-size: 16px;
        margin-bottom: 56px;
      }
      .hexagon, .subTitle, .title {
        text-align: center;
      }
      .coverage-wrapper {
        margin-top: 10px;
      }
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
    .button-wrapper {
      height: 76px;
      background-color: #7d8084;
      border-radius: 0px 0px 8px 8px;
      .button {
        margin-top: 20px;
      }
      .close-button {
        float: right;
      }
    }
  }
</style>

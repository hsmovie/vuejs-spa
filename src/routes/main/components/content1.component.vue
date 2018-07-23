<template>
  <div class="content1-wrapper">
    <carousel>
      <div v-for="(item, index) in slideData" :key="index">
        <img :src="item.imgPath" alt="" class="img">
        <div class="content">
          <img :src="item.backgroundImgPath" class="background-img">
          <div class="title">
            {{ item.title }}
          </div>
          <div class="sub-title" v-html="item.subTitle">
          </div>
        </div>
      </div>
    </carousel>
  </div>
</template>

<script>
  import carousel from '../../../tdk/carousel/carousel.component'

  export default {
    data () {
      return {
        slideData: [
          {
            title: '원하는 설계모드로 쉽고 간편하게',
            imgPath: 'static/png/img_main_info01_01.png',
            backgroundImgPath: 'static/png/img_number_01.png',
            subTitle: '복잡한 설명 대신 내게 맞는 설계모드로<br>필요한 보상조건을 담아보세요<br>검색 알고리즘이 당신에게 꼭 맞는 상품을 찾아 드립니다'
          },
          {
            title: '최소한의 정보로 더욱 안전하게',
            imgPath: 'static/png/img_main_info01_02.png',
            backgroundImgPath: 'static/png/img_number_02.png',
            subTitle: '민감한 개인정보와 번거로운 인증절차 없이<br>최소한의 정보만 알려주세요<br>당신의 설계정보는 최신의 보안기술로 보호되고 있습니다'
          },
          {
            title: '딱 맞는 최고의 조합을 알아서 척척',
            imgPath: 'static/png/img_main_info01_03.png',
            backgroundImgPath: 'static/png/img_number_03.png',
            subTitle: '일일이 찾아볼 필요 없이 추천된 보험설계 옵션만 확인하세요<br>매칭 알고리즘이 전 보험사의 상품구조를 이해하여<br>최상의 옵션을 제안합니다'
          },
          {
            title: '비교는 한눈에 선택은 한번에',
            imgPath: 'static/png/img_main_info01_04.png',
            backgroundImgPath: 'static/png/img_number_04.png',
            subTitle: '내 상황에 가장 적합한 보험사는 어디인지 비교해보세요<br>알고 비교해야 할 모든 기준과 정보를 한번에 담았습니다<br><br>'
          }
        ]
      }
    },
    components: {
      carousel
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../style/mixin';
  @import '../../../style/variable';
  .content1-wrapper {
    width: $min-width;
    margin: 0 auto 120px;
    height: 400px;
    .img {
      width: 452px;
      margin-right: 60px;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: 16px;
      .background-img {
        position: absolute;
        margin-top: -45px;
        margin-left: -10px;
        z-index: -1;
      }
    }
    .title {
      @include fontAndColor(22px, #151515);
      margin-top: 35px;
      margin-bottom: 12px;
    }
    .sub-title {
      @include fontAndColor(16px, #585858);
      text-align: left;
    }
  }
</style>

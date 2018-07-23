<template>
  <div class="content2-wrapper">
    <div class="title">
      복잡함을 덜어낸 간결한 사용자경험(UX)과<br>
      인공지능(AI) 기술이 함께 합니다
    </div>
    <div class="content-wrapper">
      <div class="content" v-for="(item, index) in contentsData" :key="index">
        <img :src="item.imgPath" class="img">
        <div class="content-title">
          {{ item.title }}
        </div>
        <div class="content-sub-title" v-html="item.subTitle">
        </div>
      </div>
    </div>
    <!-- <div v-for="(item, index) in data" :key="index">

    </div> -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        contentsData: [
          {
            title: '빅데이터의 가치를 활용',
            subTitle: '11개 전 손해보험사의 수백가지 상품을<br>학습/분석하는 데이터 플랫폼',
            imgPath: 'static/png/img_main_info02_01.png'
          },
          {
            title: '알고리즘을 통한 최적의 검색',
            subTitle: '수백만가지의 보험설계 옵션을<br>평가/조합하는 매칭 알고리즘',
            imgPath: 'static/png/img_main_info02_02.png'
          },
          {
            title: '비교, 분석을 위한 데이터 시각화',
            subTitle: '고객의 합리적 선택에 필요한<br> 모든 비교정보를 담은 대시보드',
            imgPath: 'static/png/img_main_info02_03.png'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../style/mixin';
  @import '../../../style/variable';

  .content2-wrapper {
    width: $min-width;
    margin: 120px auto;
    height: 520px;
    .title {
      @include fontAndColor(40px, #151515);
      text-align: center;
    }
    .content-wrapper {
      height: 430px;
      width: 1020px;
      display: flex;
    }
    .content {
      flex: 1;
      text-align: center;
    }
    .img {
      margin-top: 100px;
      margin-bottom: 30px;
      height: 100px;
    }
    .content-title {
      @include fontAndColor(22px, #424242);
      margin-bottom: 12px;
    }
    .content-sub-title {
      @include fontAndColor(16px, #585858);
    }
  }
</style>

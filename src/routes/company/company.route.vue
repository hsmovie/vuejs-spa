<template>
  <div class="main-wrapper">
    <main-header></main-header>
    <div class="title-box">
      <img src="/static/png/company_top_img_sample.jpg" class="img">
      <div class="text-box">
        <div class="sub-title">
          보험이 더 쉽고 가까워질 수 있도록<br>
          당신이 필요로 하는 단하나의 보험사를 찾을 수 있도록<br>
          나의 보상받을 권리를 당당하게 이야기 할 수 있도록
        </div>
        <div class="title">
          보험연구소는 보험 상품과 기술,<br>
          당신의 안전한 삶을 연구합니다.
        </div>
      </div>
    </div>
    <div class="body">
      <div class="text-img left">
        <div class="content">
          <img src="/static/png/img_number_01.png"/>
          <div class="title">
            고객의 편에서 보험상품을 연구합니다.
          </div>
          <div class="sub-title">
            객관적인 외부데이터와 보험사별 최신의 보험약관을 기초로<br> 보험상품을 연구하고 비교합니다.<br>
            어렵고 복잡한 보험을 고객이 쉽게 이해하고 비교해볼 수 있도록<br> 보험연구소 고유의 데이터 플랫폼을
            구축하기 위해서 입니다.
          </div>
        </div>
        <img src="/static/png/img_company_info_01.png" alt="" class="img">
      </div>
      <div class="text-img right">
        <img src="/static/png/img_company_info_02.png" alt="" class="img">
        <div class="content">
          <img src="/static/png/img_number_02.png"/>
          <div class="title">
            보험을 설계하고 비교할 수 있는 가장 쉽고 편리한 기술을 개발합니다.
          </div>
          <div class="sub-title">
            복잡한 보험상품을 축적/분석하여 고객이 직접 설계하고<br> 비교할 수 있도록 보험연구소는 최신 인공지능(AI)
            기술과<br> 소프트웨어엔지니어링 기술을 접목하고 있습니다.<br> 진화하는 보험시장의 변화에 대응할 수 있는
            최선의 선택이기 때문입니다.
          </div>
        </div>
      </div>
      <div class="text-img left">
        <div class="content">
          <img src="/static/png/img_number_03.png"/>
          <div class="title">
            더 나은 안전한 삶을 위해서라면 새로운 아이디어도 제안합니다.
          </div>
          <div class="sub-title">
            보험은 모두를 위한 사회적 안전판이었으면 좋겠습니다. <br>예상치 못한 위험으로 인해 삶의 질이 떨어지지
            않도록<br> 새로운 보험이 필요하다면 보험연구소는 당당히 보험시장에<br> 제안하겠습니다. 그 길이 한단계 성숙한
            보험시장을 만드는데<br> 도움이 될 것이라 믿기 때문입니다.
          </div>
        </div>
        <img src="/static/png/img_company_info_03.png" alt="" class="img">
      </div>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.7236980814337!2d127.02883487795218!3d37.49084609118441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca14f9353776d%3A0x48b280d65fb05cbc!2z65Oc66a87ZSM65-s7IqkIOqwleuCqA!5e0!3m2!1sko!2skr!4v1519792632466"
          width="1024" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
      <div class="info">
        <div class="address">
          <img src="/static/png/ic_company_gps.png">
          서울시 서초구 강남대로 311 드림플러스 1219
        </div>
        <div class="email first-child">
          <img src="/static/png/ic_company_alliance.png">
          <div class="label">서비스 문의</div>
          <div class="value">help@mytutto.com</div>
        </div>
        <div class="email">
          <img src="/static/png/ic_company_service.png">
          <div class="label">제휴 문의</div>
          <div class="value">contact@mytutto.com</div>
        </div>
        <div class="email">
          <img src="/static/png/ic_company_recruit.png">
          <div class="label">채용 문의</div>
          <div class="value">recruit@mytutto.com</div>
        </div>
      </div>
    </div>
    <global-footer></global-footer>
  </div>
</template>

<script>
  import mainHeader from '../../layout/header.layout'
  import globalFooter from '../../layout/footer.layout'

  export default {
    methods: {
      clickButton () {
        this.$router.push('/car')
      }
    },
    components: {
      globalFooter,
      mainHeader
    }
  }
</script>

<style scoped lang="scss">
  @import '../../style/variable';
  @import '../../style/mixin';

  .main-wrapper {
    .title-box {
      position: relative;
      color: white;

      .img {
        width: 100%;
        height: 488px;
        object-fit: cover;
        display: block;
      }

      .text-box {
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        text-align: center;
        padding-top: 95px;

        .sub-title {
          font-size: 18px;
          margin-bottom: 60px;
        }

        .title {
          font-size: 48px;
        }
      }
    }
    .body {
      width: $min-width;
      margin: 0 auto;

      .text-img {
        display: flex;
        margin: 0 auto 120px;
        height: 400px;
        align-items: center;
        justify-items: center;

        .content {
          width: 452px;
          position: relative;
          img {
            width: 64px;
            position: absolute;
            top: 10px;
            left: -10px;
            z-index: -1;
          }
        }

        &.left {
          padding-left: 112px;

          .content {
            margin-right: 60px;
          }
        }

        &.right {
          padding-right: 112px;

          .content {
            margin-left: 60px;
          }
        }

        img {
          width: 400px;
        }
        .title {
          @include fontAndColor(22px, #151515);
          margin-top: 35px;
          margin-bottom: 8px;
          z-index: 1;
        }
        .sub-title {
          @include fontAndColor(16px, #585858);
        }
      }

      .map {
        margin-bottom: 40px;
      }

      .info {
        margin-bottom: 78px;
        colore: #424242;
        font-size: 16px;

        .address {
          font-size: 20px;
        }
        .email {
          &.first-child {
            margin-top: 20px;
          }
          margin-top: 5px;
          overflow: hidden;

          img {
            float: left;
            width: 22px;
          }

          .label {
            float: left;
            width: 84px;
            margin: 0 16px;
          }

          .value {
            float: left;
            color: #828282
          }
        }
      }
    }
  }
</style>

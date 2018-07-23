<template>
  <div class="main-wrapper">
    <main-header></main-header>
    <div class="main-sub">
      <img src="../../../static/png/main_top_img_sample.jpg" class="img">
      <div class="text">
        <div class="title">
          제대로 된 설계로 보험의 가치를 더하다
        </div>
        <div class="sub">
          내 상황에 맞는 보상을 담아 나만의 자동차보험을 설계하세요
        </div>
      </div>
    </div>
    <guide-button @click="clickButton"></guide-button>
    <content0></content0>
    <content1></content1>
    <div class="hr"></div>
    <content2></content2>
    <div class="hr"></div>
    <content3></content3>
    <guide-button @click="clickButton"></guide-button>
    <global-footer @openModal="openModal"></global-footer>
    <terms-modal ref="termsModal"></terms-modal>
    <service-modal ref="serviceModal"></service-modal>
  </div>
</template>

<script>
  import mainHeader from '../main/components/header.component'
  import globalFooter from '../../layout/footer.layout'
  import content0 from './components/content0.component'
  import content1 from './components/content1.component'
  import content2 from './components/content2.component'
  import content3 from './components/content3.component'
  import guideButton from './components/guide-button.component'
  import serviceModal from '../../components/service-modal.component.vue'
  import termsModal from '../../components/terms-modal.component.vue'

  export default {
    methods: {
      clickButton () {
        this.$router.push('/car')
      },
      openModal (data) {
        this.$refs[data].open()
      }
    },
    data () {
      return {
        modalData: {}
      }
    },
    components: {
      'global-footer': globalFooter,
      'main-header': mainHeader,
      'guide-button': guideButton,
      content0,
      content1,
      content2,
      content3,
      termsModal,
      serviceModal
    }
  }
</script>

<style scoped lang="scss">
  .main-wrapper {
    .main-sub {
      position: relative;

      .text {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        text-align: center;
        position: absolute;
        width: 1024px;
        color: #fff;
        margin: auto;
        height: 102px;

        .title {
          font-size: 40px;
        }

        .sub {
          font-size: 18px;
          margin-top: 26px;
        }
      }
    }
    .img {
      width: 100%;
      height: 588px;
      object-fit: cover;
      display: block;
    }
    .hr {
      border-top: 1px solid #eaeaea;
    }
  }
</style>

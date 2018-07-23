<template>
  <div class="footer-wrapper">
    <div class="footer">
      <simple-svg
        filepath="/static/png/tutto.svg"
        stroke="none"
        fill="#000"
        height="50"
        width="100"
        class="logo-svg"
        @click="goTo('/')"
      />
      <div class="links-wrapper">
        <a @click="$emit('openModal', 'serviceModal')">서비스이용약관 ·</a>
        <a @click="$emit('openModal', 'termsModal')">개인정보취급방침</a>
        <!-- <a @click="goTo('/faq')">고객센터</a> -->
      </div>
      <div class="company" v-html="companyData">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        companyData: '(주)투토 · 대표 문형준 · 사업자 등록번호 116-86-00469 · 서울시 서초구 강남대로 311 드림플러스센터 강남 12층</br> E-mail contact@mytutto.com · FAX 02-520-1591<br>ⓒ2018 tutto Inc. Ltd. All rights reserved'
      }
    },
    methods: {
      goTo (url) {
        this.$router.push(url)
      },
      openModal () {
        this.$refs.modal.open()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../style/variable";
  @import '../style/variable';

  .footer-wrapper {
    background-color: $background-gray;
    height: 364px;
    position: relative;
    z-index: 2;
    .footer {
      width: $min-width;
      padding-top: 134px;
      margin: 0 auto;
      text-align: center;
    }
    .links-wrapper {
      margin-top: 10px;
      margin-bottom: 28px;
      font-size: 16px;
      color: #313131;
      cursor: pointer;
    }
    .company {
      text-align: center;
      font-size: 14px;
      color: #808080;
    }
  }
</style>

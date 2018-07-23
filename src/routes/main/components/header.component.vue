<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="logo-wrapper" @click="goTo('/')">
          <simple-svg
            filepath="/static/png/tutto.svg"
            stroke="none"
            fill="#fff"
            height="100"
            width="100"
            class="logo-svg"
          />
        <!-- <img class="logo" src="/static/png/tutto.svg" @click="goTo('/')" alt="logo"> -->
      </div>
      <div class="links">
        <a class="link" @click="goTo('/car/mode')">자동차보험</a>
        <a class="link" @click="scrollDown">블로그</a>
        <a class="link" @click="goTo('/company')">회사소개</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo (url) {
        this.$router.push(url)
      },
      scrollDown () {
        document.getElementById('blogSlick').scrollIntoView()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../style/variable';

  .header-wrapper {
    background-color: transparent;
    position: absolute;
    width: 100%;
    z-index: 1;
    .header {
      width: $min-width;
      height: 100px;
      margin: 0 auto;
      display: flex;
      .logo-wrapper {
        display: flex;
        align-items: center;
      }
      .logo {
        cursor: pointer;
      }
      justify-content: space-between;
      .links {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .link {
        font-size: 16px;
        color: #ffffff;
        margin-left: 60px;
        text-decoration: none;
        cursor: pointer;
        &:hover {
          border-bottom: 1px solid #ffffff
        }
      }
      .logo-svg {
        cursor: pointer;
      }
    }
  }
</style>

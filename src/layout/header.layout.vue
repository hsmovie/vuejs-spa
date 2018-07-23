<template>
  <div class="header-wrapper">
    <div class="header">
      <div @click="goTo('/')">
        <simple-svg
          filepath="/static/png/tutto.svg"
          stroke="none"
          fill="#000"
          height="100"
          width="100"
          class="logo-svg"
        />
      </div>
      <div class="links">
        <a class="link" :class="{active: isCar}" @click="goTo('/car/mode')">자동차보험</a>
        <a class="link" :class="{active: isBlog}" @click="goTo('/blog')">블로그</a>
        <a class="link" :class="{active: isCompany}" @click="goTo('/company')">회사소개</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo (url) {
        this.$router.push(url)
      }
    },
    computed: {
      isCar () {
        return this.$route.path.includes('car')
      },
      isBlog () {
        return this.$route.path.includes('blog')
      },
      isCompany () {
        return this.$route.path.includes('company')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../style/variable';

  .header-wrapper {
    border-bottom: 1px solid #eaeaea;
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
        color: #8e8e8e;
        margin-left: 60px;
        text-decoration: none;
        cursor: pointer;
        &:hover {
          border-bottom: 2px solid #282826
        }

        &.active {
          border-bottom: 2px solid #282826
        }
      }
      .logo-svg {
        cursor: pointer;
      }
    }
  }
</style>

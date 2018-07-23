<template>
  <div class="header-wrap">
    <global-header></global-header>
    <div class="sub-header">
      <ul>
        <li @click="router('/car/mode')" :class="{active: isEnable('Mode')}">
          <simple-svg
            filepath="/static/svg/ic_step_mode.svg"
            fill="#cccccc"
            stroke="none"
            height="30"
            width="30"
            v-show="!isEnable('Mode')"
          />
          <simple-svg
            filepath="/static/svg/ic_step_mode.svg"
            stroke="none"
            fill="#1766eb"
            width="30"
            height="30"
            v-show="isEnable('Mode')"
          />
          <div class="label">모드설정</div>
        </li>
        <li class="dot">
          <img src="/static/svg/img_step_dot.svg">
        </li>
        <li @click="enableCustomer && router('/car/customer')" :class="{active: isEnable('Customer')}">
          <simple-svg
            :filepath="enableCoverage ? '/static/svg/ic_step_info.svg' : '/static/svg/ic_step_info_next.svg'"
            fill="#cccccc"
            stroke="none"
            height="30"
            width="30"
            v-show="!isEnable('Customer')"
          />
          <simple-svg
            filepath="/static/svg/ic_step_info.svg"
            stroke="none"
            fill="#1766eb"
            width="30"
            height="30"
            v-show="isEnable('Customer')"
          />
          <div class="label">고객정보</div>
        </li>
        <li class="dot">
          <img src="/static/svg/img_step_dot.svg">
        </li>
        <li @click="enableCoverage && router('/car/coverage')" :class="{active: isEnable('Coverage')}">
          <simple-svg
            :filepath="enableComparison ? '/static/svg/ic_step_plan.svg' : '/static/svg/ic_step_plan_next.svg'"
            fill="#cccccc"
            stroke="none"
            height="30"
            width="30"
            v-show="!isEnable('Coverage')"
          />
          <simple-svg
            filepath="/static/svg/ic_step_plan.svg"
            stroke="none"
            fill="#1766eb"
            width="30"
            height="30"
            v-show="isEnable('Coverage')"
          />
          <div class="label">담보설계</div>
        </li>
        <li class="dot">
          <img src="/static/svg/img_step_dot.svg">
        </li>
        <li @click="enableComparison" :class="{active: isEnable('Comparison')}">
          <simple-svg
            filepath="/static/svg/ic_step_comparison_next.svg"
            fill="#cccccc"
            stroke="none"
            height="30"
            width="30"
            v-show="!isEnable('Comparison')"
          />
          <simple-svg
            filepath="/static/svg/ic_step_comparison.svg"
            stroke="none"
            fill="#1766eb"
            width="30"
            height="30"
            v-show="isEnable('Comparison')"
          />
          <div class="label">보험사 비교</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import globalHeader from '../../../layout/header.layout'

  export default {
    data () {
      return {
        nowRoute: ''
      }
    },
    mounted () {
      this.nowRoute = this.$route.fullPath.toLowerCase()
    },
    methods: {
      router (route) {
        this.$router.push(route)
      }
    },
    computed: {
      isEnable () {
        return (route) => this.nowRoute.includes(route.toLowerCase())
      },
      ...mapGetters([
        'enableCustomer',
        'enableCoverage',
        'enableComparison'
      ])
    },
    watch: {
      '$route' (to) {
        this.nowRoute = to.name
      }
    },
    components: {
      globalHeader
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../style/media";
  @import '../../../style/variable';
  .header-wrap {
    background-color: #fff;
    position: fixed;
    width: 100%;
    min-width: $min-width;
    height: 180px;
    top: 0;
    left: 0;
    z-index: 4;

    .sub-header {
      height: 80px;
      width: 630px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      margin: 0 auto;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        width: 100%;

        li {
          display: flex;
          align-items: center;
          justify-content: center;
          float: left;
          cursor: pointer;

          &.active {
            .label {
              color: #424242;
            }
          }

          .label {
            margin-left: 10px;
            color: #acacac;
          }

          &.dot {
            cursor: default;
            width: 50px;
            margin: 0 14px;
          }
        }
      }
    }
  }

  @include min-width {
    .header-wrap {
      position: absolute;
    }
  }
</style>

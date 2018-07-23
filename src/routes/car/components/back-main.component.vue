<template>
  <div class="back-wrap" :class="type">
    <div class="right-box"></div>
    <div class="back-content">
      <div class="route-box left">
        <div class="page">
          <span class="first">{{preNumber}}</span><span class="last">/04</span>
        </div>
        <div class="title">
          {{preTitle}}
        </div>
        <div class="icon">
          <simple-svg
            filepath="/static/svg/img_step_arr_l.svg"
            stroke="#ffffff"
            height="20"
            width="85"
          />
        </div>
      </div>
      <div class="route-box right" v-if="nextRoute" @click="router(nextRoute)">
        <div class="page">
          <span class="first">{{nextNumber}}</span><span class="last">/04</span>
        </div>
        <div class="title">
          {{nextTitle}}
        </div>
        <div class="icon">
          <simple-svg
            filepath="/static/svg/img_step_arr_r.svg"
            stroke="#ffffff"
            height="20"
            width="85"
          />
        </div>
      </div>
      <div class="page"></div>
      <div class="title"></div>
      <div class="icon"></div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      preNumber: String,
      preTitle: String,
      preRoute: String,
      nextNumber: String,
      nextTitle: String,
      nextRoute: String,
      type: String
    },
    methods: {
      router (route) {
        if (this[`enable${route}`]) {
          this.$router.push(route)
        }
      }
    },
    computed: {
      ...mapGetters([
        'enableCustomer',
        'enableCoverage',
        'enableComparison',
        'enableMode'
      ])
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../style/variable";
  @import "../../../style/media";

  .back-wrap {
    height: 588px;
    width: 100%;
    background-color: $secondary-cyan;
    position: relative;

    &.mode {
      background-color: $secondary-cyan;

      .right-box {
        background-color: $secondary-green;
      }
    }

    &.customer {
      background-color: #57bc90;

      .right-box {
        background-color: #015249;
      }
    }

    &.coverage {
      background-color: #015249;

      .right-box {
        background-color: #002924;
      }
    }

    &.comparison {
      background-color: #002924;

      .right-box {
        background-color: #002924;
      }
    }

    .right-box {
      position: absolute;
      right: 0;
      top: 0;
      width: 5%;
      height: 100%;
      background-color: $secondary-green;
    }

    .back-content {
      width: $min-width;
      height: 100%;
      margin: 0 auto;
      position: relative;

      .route-box {
        color: #fff;
        position: absolute;
        top: 228px;
        width: 102px;

        .page {
          font-size: 16px;
        }
        .title {
          padding-top: 16px;
          padding-bottom: 60px;
          font-size: 22px;
        }
        .icon {
          height: 20px;
        }

        &.left {
          left: 0;

          .title {
            opacity: 0.7;
          }

          .first {
            opacity: 0.7;
          }

          .last {
            opacity: 0.3;
          }

          .icon {
            opacity: 0.5;
          }
        }

        &.right {
          right: 0;
          cursor: pointer;

          .title {
            opacity: 0.4;
          }

          .first {
            opacity: 0.4;
          }

          .last {
            opacity: 0.2;
          }

          .icon {
            opacity: 0.4;
          }
        }
      }
    }
  }

  @include min-width {
    .right-box {
      display: none;
    }
  }
</style>

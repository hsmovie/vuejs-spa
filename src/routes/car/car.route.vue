<template>
  <div class="car">
    <div class="background">
      <slick ref="slick" :options="slickOptions">
        <div>
          <back-main pre-title="모드설정" pre-number="01"
                     next-title="고객정보" next-number="02" next-route="Customer" type="mode"></back-main>
        </div>
        <div>
          <back-main pre-title="고객정보" pre-number="02" type="customer"
                     next-title="담보설계" next-number="03" next-route="Coverage"></back-main>
        </div>
        <div>
          <back-main pre-title="담보설계" pre-number="03" type="coverage"
                     next-title="보험사비교" next-number="04" next-route="Comparison"></back-main>
        </div>
        <div>
          <back-main pre-title="보험사비교" pre-number="04" type="comparison"></back-main>
        </div>
      </slick>
    </div>
    <router-view/>
    <global-footer></global-footer>
  </div>
</template>

<script>
  import backMain from './components/back-main.component'
  import globalFooter from '../../layout/footer.layout'
  import Slick from '../../tdk/slick/slick-carousel.component'

  export default {
    mounted () {
      this.$refs.slick.create(this.route[this.$route.name])
    },
    data () {
      return {
        slickOptions: {
          slidesToShow: 1,
          swipe: false
        },
        route: {
          Mode: 0,
          Customer: 1,
          Coverage: 2,
          Comparison: 3
        }
      }
    },
    beforeRouteUpdate (to, from, next) {
      let index = this.route[to.name]
      if (to.fullPath.toLowerCase().includes('coverage')) {
        index = 2
      }
      this.$refs.slick.goTo(index)
      next()
    },
    components: {
      globalFooter,
      backMain,
      Slick
    }
  }
</script>

<style lang="scss">
  @import "../../style/variable";
  @import "../../style/media";

  .car {
    background-color: $background-gray;

    .background {
      height: 588px;
      width: 100%;
      position: fixed;
      min-width: $min-width;
      top: 180px;
      left: 0;
      z-index: 1;
    }

    @include min-width {
      .background {
        position: absolute;
      }
    }
  }
</style>

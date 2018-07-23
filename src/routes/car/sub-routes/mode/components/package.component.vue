<template>
  <div>
    <card-container slot="body" title="드라이빙 환경에 적합한<br> 패키지를 선택해주세요.">
      <slick ref="slick" :options="slickOptions" @afterChange="selectPackage">
        <div v-for="(item, index) of packages" :key="index">
          <div class="package-wrapper">
            <button class="button-icon" @click="openPackageHelpModal(item)">
              <simple-svg
                filepath="/static/svg/btn_tip.svg"
                fill="#c8c8c8"
                stroke="none"
                height="18"
                width="18"
              />
            </button>
            <div>
              <div class="title">{{ item.title }}</div>
              <div class="sub-title">{{ item.subTitle }}</div>
            </div>
          </div>
        </div>
      </slick>
    </card-container>
  </div>
</template>

<script>
  import slick from '../../../../../tdk/slick/slick-carousel.component'
  import cardContainer from '../../../components/card-container.component'

  export default {
    data () {
      return {
        slickOptions: {
          dots: true,
          slidesToShow: 1,
          centerMode: true,
          focusOnSelect: true,
          infinite: true,
          centerPadding: '117px'
        },
        packages: this.$store.getters.getPackages,
        isCreateSlick: false,
        selectedIndex: null
      }
    },
    methods: {
      slick (selected, isPackage) {
        if (!this.isCreateSlick) {
          this.$refs.slick.create()
          this.isCreateSlick = true
        }
        if (!selected && isPackage) {
          this.selectPackage(null, null, 0)
        }
      },
      openPackageHelpModal (item) {
        this.$emit('openPackageHelpModal', item)
      },
      selectPackage (event, slick, currentSlide) {
        this.selectedIndex = currentSlide
        this.$emit('selectPackage', this.packages[currentSlide])
      }
    },
    components: {
      slick,
      cardContainer
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../../style/variable";

  // package
  .package-wrapper {
    height: 184px;
    border: 1px solid $gray;
    border-radius: 8px;
    margin: 20px 10px;
    position: relative;
    text-align: center;
    padding: 0 33px;
    cursor: pointer;
    .title {
      margin-top: 33px;
      margin-bottom: 5px;
      border-bottom: 1px solid $gray-3;
    }
    .button-icon {
      position: absolute;
      right: 15px;
      top: 15px;
    }
  }
</style>

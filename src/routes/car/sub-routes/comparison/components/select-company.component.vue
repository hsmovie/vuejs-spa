<template>
  <div>
    <div class="company-bar-wrapper">
      <slick ref="slick" :options="slickOptions" @afterChange="selectCompany">
        <div v-for="(company, index) of companyList" :key="index" class="icon-wrapper"
             @click="selectCompany(null, null, index)">
          <img :src="`/static/png/img_comparison_logo_${company}_on.png`" class="company-icon"
               v-if="index === selectedIndex">
          <img :src="`/static/png/img_comparison_logo_${company}_off.png`" class="company-icon" v-else>
        </div>
      </slick>
    </div>
  </div>
</template>

<script>
  import slick from '../../../../../tdk/slick/slick-carousel.component'

  export default {
    props: {
      companyList: Array
    },
    data () {
      return {
        slickOptions: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: false,
          centerMode: true,
          focusOnSelect: true
        },
        selectedIndex: null
      }
    },
    mounted () {
      this.$refs.slick.create()
      this.selectCompany(null, null, 0)
    },
    methods: {
      selectCompany (event, slick, currentSlide) {
        if (this.selectedIndex !== currentSlide) {
          this.selectedIndex = currentSlide
          this.$emit('selectedCompany', this.companyList[currentSlide])
        }
      }
    },
    components: {
      slick
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../../style/variable";
  @import "../../../../../style/mixin";

  // 상단 보험사 바
  .company-bar-wrapper {
    margin-bottom: 60px;

    .icon-wrapper {
      margin-right: 20px;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>

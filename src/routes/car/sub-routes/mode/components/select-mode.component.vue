<template>
  <div>
    <card-container title="상황에 맞는 설계모드를 선택해주세요" @openModal="openAttributeHelpModal">
      <button class="selection" @click="selectMode('package')" :class="{active: isPackage}">
        <img src="/static/png/img_mode_package_nor.png" class="img">
        <div class="selection-title">
          패키지 선택
        </div>
        <div class="selection-content">
          원하는 패키지를 선택하여 쉽고 <br>간편하게 종합보험을 설계합니다
        </div>
        <!-- <div class="tip-content" v-if="isPackage">
          <img src="/static/png/ic_tip.png">
          6대 표준담보와 긴급출동서비스만<br> 설계에 반영됩니다
        </div> -->
      </button>
      <button class="selection right" @click="selectMode('design')" :class="{active: isDesign}">
        <img src="/static/png/img_mode_self_nor.png" class="img">
        <div class="selection-title">
          맞춤형 설계
        </div>
        <div class="selection-content">
          예상되는 위험에 다양한 보험상품을<br> 매치시켜 최적의 보상을 설계합니다
        </div>
        <!-- <div class="tip-content" v-if="isDesign">
          <img src="/static/png/ic_tip.png">
          폭넓은 보상혜택이 있는 특약상품까지<br> 설계에 반영됩니다
        </div> -->
      </button>
      <div class="tip-content" v-if="isDesign">
        <img src="/static/png/ic_tip.png">
        폭넓은 보상혜택이 있는 특약상품까지 설계에 반영됩니다
      </div>
      <div class="tip-content" v-if="isPackage">
        <img src="/static/png/ic_tip.png">
        6대 표준담보와 긴급출동서비스만 설계에 반영됩니다
      </div>
    </card-container>
  </div>
</template>

<script>
  import cardContainer from '../../../components/card-container.component'

  export default {
    data () {
      return {
        mode: null
      }
    },
    methods: {
      selectMode (mode) {
        if (this.mode !== mode) {
          this.$emit('selectMode', mode)
          this.mode = mode
        }
      },
      openAttributeHelpModal (data) {
        this.$emit('openAttributeHelpModal', data)
      }
    },
    computed: {
      isPackage () {
        return this.mode === 'package'
      },
      isDesign () {
        return this.mode === 'design'
      }
    },
    components: {
      cardContainer
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../../style/variable";

  // select-mode
  .selection {
    background-color: #fff;
    display: inline-block;
    height: 320px;
    width: 265px;
    border-radius: 8px;
    border: 1px solid $gray;
    text-align: center;
    transition: background-color .2s;
    &.active {
      background-color: $gray;
    }
  }

  .img {
    margin-bottom: 12px;
  }

  .selection-title {
    font-size: 16px;
    margin-bottom: 12px;
  }

  .selection-content {
    font-size: 16px;
  }

  .tip-content {
    margin-top: 10px;
    font-size: 14px;
    color: #8e8e8e;
    margin-top: 15px;
  }

  .right {
    float: right;
  }
</style>

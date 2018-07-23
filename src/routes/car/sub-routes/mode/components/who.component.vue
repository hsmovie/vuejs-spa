<template>
  <div>
    <card-container title="누구의 교통사고가 가장 걱정되시나요" subTitle="필요한 추가특약을 반영하여 더욱 든든한 보험으로 바꿔드립니다">
      <div class="buttons-wrapper">
        <button class="button" @click="selectWho('me')">
          <img src="/static/png/img_plan_me_on.png" class="img" v-if="isMe">
          <img src="/static/png/img_plan_me_off.png" class="img" v-if="!isMe">
          <div class="label">본인</div>
        </button>
        <button class="button" @click="selectWho('coup')">
          <img src="/static/png/img_plan_partner_on.png" class="img" v-if="isCoup">
          <img src="/static/png/img_plan_partner_off.png" class="img" v-if="!isCoup">
          <div class="label">부부</div>
        </button>
        <button class="button" @click="selectWho('family')">
          <img src="/static/png/img_plan_family_on.png" class="img" v-if="isFamily">
          <img src="/static/png/img_plan_family_off.png" class="img" v-if="!isFamily">
          <div class="label">가족</div>
        </button>
      </div>
      <div v-if="isMe || isCoup">
        <female-single ref="femaleSingle" @callback="clickRadioButton"></female-single>
        <silver ref="silver" @callback="clickRadioButton"></silver>
      </div>
      <div v-if="isFamily">
        <female-double @callback="clickRadioButton"></female-double>
        <silver ref="silver2" @callback="clickRadioButton"></silver>
        <children @callback="clickRadioButton"></children>
      </div>
    </card-container>
  </div>
</template>

<script>
  import cardContainer from '../../../components/card-container.component'
  import children from './sub-components/children.component'
  import femaleSingle from './sub-components/female-single.component'
  import silver from './sub-components/silver.component'
  import femaleDouble from './sub-components/female-double.component'

  export default {
    props: {
      value: Array
    },
    data () {
      return {
        selectedWho: null
      }
    },
    methods: {
      selectWho (who) {
        this.selectedWho = who
        if (this.$refs.femaleSingle) {
          this.$refs.femaleSingle.clear()
        }
        if (this.$refs.silver) {
          this.$refs.silver.clear()
        }
        if (this.$refs.silver2) {
          this.$refs.silver2.clear()
        }
        this.$emit('input', [])
      },
      clickRadioButton (who) {
        let whoList = this.value || []
        const set = new Set(whoList)
        if (who.sub) {
          if (who.sub.add) {
            for (const val of who.sub.add) {
              set.add(val)
            }
          }
          if (who.sub.remove) {
            for (const val of who.sub.remove) {
              set.delete(val)
            }
          }
        } else if (who.base.action === 'add') {
          for (const val of who.base.value) {
            set.add(val)
          }
        } else if (who.base.action === 'remove') {
          for (const val of who.base.value) {
            set.delete(val)
          }
        }
        this.$emit('input', Array.from(set))
      }
    },
    computed: {
      isMe () {
        return this.selectedWho === 'me'
      },
      isCoup () {
        return this.selectedWho === 'coup'
      },
      isFamily () {
        return this.selectedWho === 'family'
      }
    },
    components: {
      cardContainer,
      children,
      femaleSingle,
      silver,
      femaleDouble
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../../style/variable";
  // design
  .buttons-wrapper {
    height: 114px;
    display: flex;
    .button {
      flex: 1;
      border: 1px solid blue;
      margin-right: 20px;
      border-radius: 8px;
      border: 1px solid $gray;
      &:last-child {
        margin-right: 0;
      }
      &.who-button-active {
        color: $unselected-font-color;
      }
    }
    .img {
      margin-bottom: 12px;
    }
    .label {
      font-size: 16px;
    }

    .radio-accordion-box {
      height: 144px;
      display: flex;
      align-items: center;
    }

    .box {
      .title {
        margin-bottom: 18px;
      }
      .radio {
        width: 225px;

        &:first-child {
          margin-right: 20px;
        }
      }
    }
  }
</style>

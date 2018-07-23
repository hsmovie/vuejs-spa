<template>
  <div class="select-slider-wrapper">
    <div class="title">
      {{ title }}
      <button @click="clickIcon">
        <simple-svg
          filepath="/static/svg/btn_tip.svg"
          fill="#c8c8c8"
          stroke="none"
          v-if="isIcon"
          width="18"
          height="18"
        />
      </button>
    </div>
    <div class="selected-data">
      {{ typeof value === 'object' ? value.title : value }}
    </div>
    <vueSlider
      v-bind="options"
      :data="valueList"
      :disabled="disabled"
      v-model="selectedData"
    >
    </vueSlider>
    <div class="min-value">
      {{data[0].title}}
    </div>
    <div class="max-value">
      {{data[valueList.length - 1].title}}
    </div>
    <div class="tip" v-if="tip">
      <img src="/static/png/ic_tip.png">
      {{ tip }}
    </div>
  </div>
</template>

<script>
  import vueSlider from 'vue-slider-component'

  export default {
    props: {
      title: String,
      tip: String,
      value: [Object, String, Number],
      data: Array,
      disabled: Boolean,
      isIcon: {
        type: Boolean,
        default: false
      }
    },
    created () {
      this.addValueList()
    },
    data () {
      return {
        valueList: [],
        selectedData: '',
        options: {
          dotSize: 18,
          tooltip: 'false',
          piecewise: true,
          piecewiseStyle: {
            'backgroundColor': '#ccc',
            'visibility': 'visible',
            'width': '12px',
            'height': '12px'
          },
          piecewiseActiveStyle: {
            'backgroundColor': '#1766eb'
          },
          labelActiveStyle: {
            'color': '#1766eb'
          },
          sliderStyle: {
            'backgroundColor': '#1766eb'
          }
        }
      }
    },
    methods: {
      addValueList () {
        if (this.data) {
          this.valueList = []
          if (this.data[0] && typeof this.data[0] === 'object' && typeof this.value === 'object') {
            this.selectedData = this.value.value || this.data[0].value
          } else {
            this.selectedData = this.value
          }
          for (const data of this.data) {
            this.valueList.push(typeof data === 'object' ? data.value : data)
          }
        }
      },
      settingValue (selectedData) {
        let result = selectedData
        if (this.data && typeof this.data[0] === 'object') {
          const data = [...this.data]
          result = data.filter(data => data.value === selectedData)[0]
        }
        this.$emit('input', result)
      },
      clickIcon () {
        this.$emit('clickIcon')
      }
    },
    watch: {
      selectedData: function (val) {
        this.settingValue(val)
      },
      data (val) {
        this.addValueList()
      }
    },
    components: {
      vueSlider
    }
  }
</script>

<style scoped lang="scss">
  @import '../style/variable';
  @import '../style/mixin';

  .select-slider-wrapper {
    position: relative;
    margin-bottom: 40px;

    .max-value {
      position: absolute;
      top: 110px;
      right: 0px;
      color: $font-color-4;
    }

    .min-value {
      position: absolute;
      top: 110px;
      left: 0px;
      color: $font-color-4;
    }

    .title {
      height: 18px;
      @include fontAndColor(16px, #424242);
      margin-bottom: 8px;
      display: flex;
      align-items: center;

      .simple-svg-wrapper {
        display: flex;
        align-items: center;
        margin-left: 4px;
        cursor: pointer;
      }
    }
    .selected-data {
      height: 24px;
      @include fontAndColor(22px, $primary-blue);
      margin-bottom: 34px;
    }
    .tip {
      margin-top: 40px;
      @include fontAndColor(14px, #8e8e8e);
    }
  }
</style>

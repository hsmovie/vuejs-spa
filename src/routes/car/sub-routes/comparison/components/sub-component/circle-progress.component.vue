<template>
  <radial-progress-bar :diameter="148"
                       :completed-steps="rate"
                       :total-steps="100"
                       :strokeWidth="8"
                       innerStrokeColor="#cccccc"
                       startColor="#1766eb"
                       stopColor="#1766eb">
    <div class="progress-title">{{ title }}</div>
    <div class="progress-rate">
      <span v-if="title === '매칭 내역'">{{ rateTitle }}개</span>
      <span v-else>{{ rate }}%</span>
    </div>
  </radial-progress-bar>
</template>

<script>
  import radialProgressBar from '../../../../../../tdk/redial-progress-bar/radial-progress-bar.component'

  export default {
    props: {
      title: String,
      rate: Number,
      rateTitle: {
        type: [String, Number],
        default: ''
      }
    },
    components: {
      radialProgressBar
    }
  }
</script>
<style scoped lang="scss">
  .progress-title {
    font-size: 14px;
    color: #8e8e8e;
  }

  .progress-rate {
    font-size: 22px;
    color: #1766eb;
  }
</style>

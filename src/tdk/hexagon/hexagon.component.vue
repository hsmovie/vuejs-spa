<template>
  <svg width="312" height="260" viewBox='-44 -29 312 260'>
    <g>
      <polygon :points="fill" v-if="fillData" fill="#1766eb" stroke-opacity=".3" fill-opacity=".6"></polygon>
      <polygon :points="line" v-if="lineData" stroke="#1766eb" stroke-width="2" fill="transparent"></polygon>
      <g>
        <polygon
          points="100,20 169.28203230275508,59.99999999999999 169.2820323027551,140 100.00000000000001,180 30.717967697244916,140.00000000000003 30.717967697244873,60.00000000000006"
          stroke="#999999" stroke-opacity=".7" fill="transparent"></polygon>
        <polygon
          points="100,60 134.64101615137753,80 134.64101615137756,120 100,140 65.35898384862246,120.00000000000001 65.35898384862244,80.00000000000003"
          stroke="#999999" stroke-opacity=".7" fill="transparent"></polygon>
        <polygon
          points="100,60 134.64101615137753,80 134.64101615137756,120 100,140 65.35898384862246,120.00000000000001 65.35898384862244,80.00000000000003"
          stroke="#999999" stroke-opacity=".7" fill="transparent"></polygon>
        <polygon
          points="100,40 151.96152422706632,70 151.96152422706632,130 100.00000000000001,160 48.038475772933694,130.00000000000003 48.03847577293366,70.00000000000004"
          stroke="#999999" stroke-opacity=".7" fill="transparent"></polygon>
      </g>
      <line x1="100" y1="20" x2="100" y2="180"
            stroke="#999999" stroke-opacity=".7"></line>
      <line x1="169.28203230275508" y1="59.99999999999999 " x2="30.717967697244916" y2="140"
            stroke="#999999" stroke-opacity=".7"></line>
      <line x1="169.2820323027551" y1="140" x2="30.717967697244873" y2="60"
            stroke="#999999" stroke-opacity=".7"></line>
      <circle cx="100" cy="100" r="80" fill="transparent" stroke="#999"></circle>
      <axis-label
        v-for="(label, index) in labels"
        :key="index"
        :label="label">
      </axis-label>
    </g>
  </svg>
</template>

<script>
  import axisLabel from './component/axis-label.component'

  export default {
    props: {
      lineData: Array,
      fillData: Array,
      labels: Array
    },
    computed: {
      fill () {
        function valueToPoint (value, index, total) {
          const x = 0
          const y = -value * 0.8
          const angle = Math.PI * 2 / total * index
          const cos = Math.cos(angle)
          const sin = Math.sin(angle)
          const tx = x * cos - y * sin + 100
          const ty = x * sin + y * cos + 100
          return {
            x: tx,
            y: ty
          }
        }

        const total = this.fillData.length
        return this.fillData.map((stat, i) => {
          const point = valueToPoint(stat, i, total)
          return point.x + ',' + point.y
        }).join(' ')
      },
      line () {
        function valueToPoint (value, index, total) {
          const x = 0
          const y = -value * 0.8
          const angle = Math.PI * 2 / total * index
          const cos = Math.cos(angle)
          const sin = Math.sin(angle)
          const tx = x * cos - y * sin + 100
          const ty = x * sin + y * cos + 100
          return {
            x: tx,
            y: ty
          }
        }

        const total = this.lineData.length
        return this.lineData.map(function (stat, i) {
          const point = valueToPoint(stat, i, total)
          return point.x + ',' + point.y
        }).join(' ')
      }
    },
    components: {
      'axis-label': axisLabel
    }
  }
</script>

<style scoped>
  text {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 12px;
    fill: #666;
  }

  label {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
  }
</style>

<template>
  <div>
    <hexagon :lineData="lineData" :fillData="fillData" :labels="labels" v-if="isShow"></hexagon>
  </div>
</template>

<script>
  import hexagon from '../tdk/hexagon/hexagon.component'

  export default {
    props: {
      inputCoverage: Object,
      companyCoverage: Object,
      isCar: Boolean
    },
    data () {
      return {
        isShow: false,
        labels: [],
        lineData: [],
        fillData: [],
        coverage: this.$store.getters.getInsurance('coverage'),
        accidentCar: this.$store.getters.getInsurance('accidentCar'),
        accidentBody: this.$store.getters.getInsurance('accidentBody'),
        selfCar: this.$store.getters.getInsurance('selfCar')
      }
    },
    mounted () {
      if (this.inputCoverage) {
        this.fillData = this.settingData(this.inputCoverage)
      }
      if (this.companyCoverage) {
        this.lineData = this.settingData(this.companyCoverage)
      }
      this.settingLabel()
    },
    methods: {
      settingData (params) {
        const person1 = 100
        const person2Index = this.getIndex(params.person2.value, this.coverage.person2)
        const objectIndex = this.getIndex(params.object.value, this.coverage.object)
        let data = this.accidentBody

        if (this.inputCoverage.accident.isCar) {
          data = this.accidentCar
        }

        const accidentIndex = this.getAccidentIndex(params.accident, data)
        const uninsuredIndex = this.getIndex(params.uninsuredCar.value, this.coverage.uninsuredCar)
        const selfCarIndex = this.getSelfCarIndex(params.selfCar, this.selfCar)

        return [
          person1,
          Math.round(person2Index / this.coverage.person2.length * 100),
          Math.round(objectIndex / this.coverage.object.length * 100),
          Math.round(accidentIndex / data.length * 100),
          Math.round(uninsuredIndex / this.coverage.uninsuredCar.length * 100),
          Math.round(selfCarIndex / this.selfCar.length * 100)
        ]
      },
      getIndex (value, list) {
        let length = list.length
        for (let i = 0; i < length; i++) {
          const person2 = list[i]
          if (person2.value === value) {
            return i + 1
          }
        }
        return 0
      },
      getAccidentIndex (accident, list) {
        let length = list.length
        for (let i = 0; i < length; i++) {
          const item = list[i]
          if (item.death === accident.death.value && item.injury === accident.injury.value) {
            return i + 1
          }
        }
        return 0
      },
      getSelfCarIndex (selfCar, list) {
        if (selfCar.rate.value === 0) {
          return 0
        }
        const sortList = list.sort((a, b) =>
          b.rate - a.rate || a.max - b.max || a.min - b.min)

        let length = sortList.length
        for (let i = 0; i < length; i++) {
          const item = sortList[i]
          if (item.rate === selfCar.rate.value && item.max === selfCar.max.value) {
            return i + 1
          }
        }
        return 0
      },
      settingLabel () {
        let accident = '자기신체'
        let accidentX = 82
        if (this.isCar) {
          accident = '자동차상해'
          accidentX = 75
        }

        this.labels = [
          {title: '대인배상I', x: 82, y: 11},
          {title: '대인배상II', x: 180, y: 62},
          {title: '대물배상', x: 180, y: 146},
          {title: accident, x: accidentX, y: 197},
          {title: '무보험차', x: -20, y: 146},
          {title: '자기차량', x: -20, y: 62}
        ]

        this.isShow = true
      }
    },
    watch: {
      inputCoverage () {
        this.fillData = this.settingData(this.inputCoverage)
        this.settingLabel()
      },
      companyCoverage () {
        this.lineData = this.settingData(this.companyCoverage)
        this.settingLabel()
      }
    },
    components: {
      hexagon
    }
  }
</script>

<style scoped>
</style>

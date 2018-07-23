<template>
  <div>
    <card-container
      title="자동차보험으로 커버하고 싶은 <br>사고위험을 선택해주세요"
      subTitle="제대로된 자동차보험으로 여러사고에 대비할 수 있습니다"
      @openModal="openAttributeHelpModal(when1HelpData)"
      help>
      <checkbox
        v-model="selectedWhen1Data"
        v-for="(item, index) in subAttributes.when1"
        :key="index"
        :title="item.title"
        :tValue="item.code"
      ></checkbox>
    </card-container>
  </div>
</template>

<script>
  import cardContainer from '../../../components/card-container.component'
  import checkbox from '../../../../../components/checkbox.component'

  export default {
    props: {
      value: Array
    },
    mounted () {
      this.selectedWhen1Data = this.value
    },
    data () {
      return {
        selectedWhen1Data: [],
        when1HelpData: {
          title: '자동차보험으로 커버하고 싶은 사고위험을 선택해주세요',
          contents: [
            {title: '내 차 운행(탑승) 중 사고', content: '피보험자동차를 운행하거나 탑승 중에 발생한 사고'},
            {title: '보행 중 사고', content: '보행 중 다른 자동차에 의해 발생한 사고'},
            {title: '대중교통 이용 중 사고', content: '지하철, 버스, 일반택시 등 대중교통을 이용하던 중 발생한 사고'},
            {title: '다른차 운행(탑승) 중 사고', content: '가족 외 다른 사람 소유의 자동차를 운행하거나 탑승 중 발생한 사고'},
            {title: '해외 운전 중 사고', content: '내가 해외에서 운전하던 중 발생한 사고'},
            {title: '종교버스 탑승 중 사고', content: '교회(성당)버스에 탑승 중 발생한 사고'}
          ]
        }
      }
    },
    methods: {
      openAttributeHelpModal (data) {
        this.$emit('openAttributeHelpModal', data)
      }
    },
    watch: {
      selectedWhen1Data (val) {
        this.$emit('input', val)
      }
    },
    computed: {
      subAttributes () {
        return this.$store.getters.getInsurance('subAttributes')
      }
    },
    components: {
      cardContainer,
      checkbox
    }
  }
</script>

<style scoped lang="scss">
</style>

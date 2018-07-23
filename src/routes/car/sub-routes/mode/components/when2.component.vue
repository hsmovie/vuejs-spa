<template>
  <div>
    <card-container
      title="어떤 상황에서 발생한<br> 사고에 추가보상을 필요하신가요?"
      subTitle="원하는 사고유형에 따라 적합한 보상을 추천합니다"
      @openModal="openAttributeHelpModal(when2HelpData)"
      help>
      <checkbox
        v-model="selectedWhen2Data"
        v-for="(item, index) in subAttributes.when2"
        :key="index"
        :title="item.title"
        :tValue="item.code">
      </checkbox>
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
    data () {
      return {
        selectedWhen2Data: [],
        when2HelpData: {
          title: '어떤 상황에서 발생한 사고에 추가보상을 필요하신가요?',
          contents: [
            {title: '주말/휴일', content: '주말 또는 법정공휴일, 근로자의 날 전날 18시부터 다음날 06시 사이에 발생한 사고'},
            {title: '출퇴근시간', content: '월요일~금요일 05시부터 10시, 17시부터 22시 이내 사고(단, 법정공휴일 및 근로자의 날 제외)'},
            {title: '골프장 가는 길', content: '회원제 및 퍼블릭 골프장(골프연습장 제외)으로 이동하던 중 발생한 사고'},
            {title: '스쿨존', content: '유치원, 초등학교, 특수학교 등 출입문 반경 300m 이내에 어린이보호구역 표시가 있는 도로에서 발생한 사고'},
            {title: '안전벨트 착용 중', content: '사고 당시 운전석 또는 조수석에서 안전벨트를 착용했음을 증명할 수 있는 사고'},
            {title: '시간/장소 제약없이 언제나', content: '시간이나 장소 등 사고상황에 제한없이 발생한 모든 사고'}
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
      selectedWhen2Data (val) {
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

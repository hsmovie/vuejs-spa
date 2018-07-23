<template>
  <div>
    test route

    <ra :data="data" @callback="cb"></ra>
    <hx :stats="stats" :isCar="true"></hx>
  </div>
</template>

<script>
  import hx from '../components/hexagon.component'
  import ra from '../components/radio-accordion.component'

  export default {
    data () {
      return {
        test: [1, 2, 3],
        slickOptions: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          focusOnSelect: true
        },
        data: {
          title: '여성이라 더 든든한 여성케어 보상조건을 추가 할까요?',
          radio1: {
            title: '네. 해주세요',
            value: true,
            isOpen: true
          },
          radio2: {
            title: '아니오',
            value: false,
            isOpen: false
          },
          sub: {
            title: '정확인 조건 반영을 위해 선택해주세요.',
            radio1: {
              title: '50세 이상',
              value: 50
            },
            radio2: {
              title: '60세 이상',
              value: 60
            }
          }
        },
        stats: [
          {value: 100, value2: 30},
          {value: 100, value2: 80},
          {value: 100, value2: 90},
          {value: 100, value2: 10},
          {value: 100, value2: 80},
          {value: 100, value2: 50}
        ]
      }
    },
    methods: {
      cb (data) {
        console.log(data)
      }
    },
    components: {
      hx,
      ra
    }
  }
</script>

<style scoped lang="scss">
</style>

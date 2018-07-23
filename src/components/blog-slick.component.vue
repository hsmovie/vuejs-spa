<template>
  <div class="blog-slick">
    <button class="before" @click="before"><</button>
    <slick ref="slick" :options="slickOptions">
      <div v-for="(item, index) of contentsData" :key="index" class="content" @click="move(item.route)">
        <div class="box">
          <img :src="item.imgPath" class="img">
          <div class="content-title" v-html="item.title">
          </div>
          <button v-for="(tag, index) in item.tags" :key="index" class="content-tags">
            #{{ tag }}
          </button>
        </div>
      </div>
    </slick>
    <button class="next" @click="next">></button>
  </div>
</template>

<script>
  import slick from '../tdk/slick/slick-carousel.component'

  export default {
    data () {
      return {
        slickOptions: {
          slidesToShow: 3
          // centerMode: true,
        },
        contentsData: [
          {
            imgPath: '/static/blog/blog1-no.jpg',
            title: '초보운전자가 알아야 할<br>자동차보험에 대한 기초지식',
            tags: ['자동차보험기초', '자동차보험구성', '6대핵심보장담보'],
            route: '/blog/1'
          },
          {
            imgPath: '/static/blog/blog2-no.jpg',
            title: '자동차보험에 가입하지 않거나<br>의무보험만 가입했을 때의 위험',
            tags: ['자동차보험', '의무보험', '미가입과태료', '미가입차량운행벌금'],
            route: '/blog/2'
          },
          {
            imgPath: '/static/blog/blog3-no.jpg',
            title: '자동차보험 가입을 위한<br>판매채널별 장단점 비교분석',
            tags: ['자동차보험가입채널', '전속설계사', '보험대리점(GA)', '텔레마케팅(TM)', '온라인 다이렉트(CM)'],
            route: '/blog/3'
          },
          {
            imgPath: '/static/blog/blog4-no.jpg',
            title: '교통사고 현장의 조치 방법',
            tags: ['교통사고', '현장조치방법', '사설견인차이용법', '긴급출동서비스 특약 비교'],
            route: '/blog/4'
          },
          {
            imgPath: '/static/blog/blog5-no.jpg',
            title: '자동차 보험료 절감을 위한 첫걸음,<br>제대로 된 운전자범위 설정',
            tags: ['보험료 절감방법', '운전자범위 한정', '운전자연령 한정', '운전자한정 위반사고', '가입(운전)경력 인정제도'],
            route: '/blog/5'
          },
          {
            imgPath: '/static/blog/blog6-no.jpg',
            title: '과거 운전경력을 인정받아 보험료<br>절감하기: 가입(운전)경력 인정제도',
            tags: ['보험료절감', '가입(운전)경력인정제도', '인정경력의종류', '등록절차및서류', '과납보험료확인방법'],
            route: '/blog/6'
          },
          {
            imgPath: '/static/blog/blog7-no.jpg',
            title: '선택의 갈림길에서, 자기신체사고와<br> 자동차상해의 차이를 바로 알자',
            tags: ['합리적자동차보험', '자기신체사고및자동차상해', '보상대상/방식', '실제손해액', '신속한보상처리'],
            route: '/blog/7'
          },
          {
            imgPath: '/static/blog/blog8-no.jpg',
            title: '보행 중 뺑소니 사고를 당한 당신,<br> 무보험차상해 담보가 지켜드립니다. ',
            tags: ['무보험차상해', '나와나의가족의필수담보', '무보험차사고', '보행 중 사고', '뺑소니 사고', '다른 차 탑승 중 사고'],
            route: '/blog/8'
          },
          {
            imgPath: '/static/blog/blog9-no.jpg',
            title: '운전자보험의 핵심을 담다.<br>자동차보험의 제대로 된 설계방법',
            tags: ['자동차보험 설계방법', '운전자보험', '사망/중상해사고', '11대 중과실 사고', '형사합의금', '벌금', '변호사비용'],
            route: '/blog/9'
          },
          {
            imgPath: '/static/blog/blog10-no.jpg',
            title: '지진 등 천재지변에 대비하기 위한<br> 자동차보험 설계 방법',
            tags: ['포항지진', '천재지변', '자동차보험', '화재보험', '풍수해보험', '질병·상해보험', '실손의료보험'],
            route: '/blog/10'
          }
        ]
      }
    },
    mounted () {
      this.$refs.slick.create()
    },
    methods: {
      move (route) {
        this.$router.push(route)
      },
      before () {
        this.$refs.slick.prev()
      },
      next () {
        this.$refs.slick.next()
      }
    },
    components: {
      slick
    }
  }
</script>

<style scoped lang="scss">
  @import '../style/mixin';
  @import '../style/variable';

  .blog-slick {
    position: relative;

    > button {
      position: absolute;
      font-size: 30px;
      height: 35px;
      top: 0;
      bottom: 0;
      margin: auto;
      background-color: transparent;
      cursor: pointer;

      &.before {
        left: -40px;
      }

      &.next {
        right: -40px;
      }
    }
  }

  .content {
    width: 314px;
    cursor: pointer;
  }

  .box {
    padding: 0 5px;
  }

  .img {
    width: 100%;
    height: 200px;
    margin-bottom: 18px;
  }

  .content-title {
    font-size: 20px;
    margin-bottom: 16px;
  }

  .content-tags {
    @include fontAndColor(12px, #8e8e8e);
    margin-right: 4px;
    border-radius: 20px;
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: 5px;
    height: 20px;
    background-color: #f2f2f2;
  }
</style>

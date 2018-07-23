<template>
  <div class="main-wrapper">
    <main-header></main-header>
    <div class="body">
      <div class="title-box">
        <div class="title">
          무엇을 도와드릴까요?
        </div>
        <div class="sub">
          궁금한 카테고리를 선택하여 FAQ 내용을 확인해주세요.
        </div>
      </div>
      <div class="menu">
        <div v-for="(faq, index) of faqList" :class="{active: selectFaq.title === faq.title}" :key="index"
             @click="selectedFaq(faq)">
          {{faq.title}}
        </div>
      </div>
      <div class="faq">
        <div v-for="(faq, index) of selectFaq.contents" :key="index">
          <accordion :ref="`faq${index}`">
            <div slot="header" class="faq-header" :class="{open: faqsOpen[index]}" @click="showFaq(index)">
              <img src="/static/png/ic_q.png" class="question">
              <div class="title">
                {{faq.title}}
              </div>
              <div class="down">
                <simple-svg
                  v-if="!faqsOpen[index]"
                  filepath="/static/svg/btn_dropdown_down.svg"
                  fill="#c0c0c0"
                  stroke="none"
                  height="14"
                  width="12"
                />
                <simple-svg
                  v-else
                  filepath="/static/svg/btn_dropdown_up.svg"
                  fill="#c0c0c0"
                  stroke="none"
                  height="14"
                  width="12"
                />
              </div>
            </div>
            <div slot="body" class="faq-body">
              <img src="/static/png/ic_a.png" class="question">
              <div class="content">
                {{faq.content}}
              </div>
            </div>
          </accordion>
        </div>
      </div>
      <div class="last-box">
        <div class="text">
          <div class="title">
            아직 해결이 안되셨나요?
          </div>
          <div class="sub">
            추가로 궁금하시거나 FAQ로 해결되지 않으신 경우 <br>
            <a href="mailto:help@mytutto.com">help@mytutto.com</a>으로 메일을 보내주시면 최대한 빨리 도와 드리겠습니다.
          </div>
        </div>
        <div>
          <img src="/static/png/img_center_bottom.png" alt="">
        </div>
      </div>
    </div>
    <global-footer></global-footer>
  </div>
</template>

<script>
  import mainHeader from '../../layout/header.layout'
  import globalFooter from '../../layout/footer.layout'
  import accordion from '../../tdk/accordion/accordion.component'

  export default {
    data () {
      return {
        faqsOpen: {},
        faqList: [
          {
            title: '보험상품',
            contents: [
              {title: 'test', content: 'test'},
              {title: 'test', content: 'test'},
              {title: 'test', content: 'test'},
              {title: 'test', content: 'test'},
              {title: 'test', content: 'test'},
              {title: 'test', content: 'test'},
              {title: 'test', content: 'test'}
            ]
          },
          {
            title: '담보/특약 설계',
            contents: [
              {title: 'test', content: 'test'}
            ]
          },
          {
            title: '보험사 이동/가입',
            contents: [
              {title: 'test', content: 'test'}
            ]
          },
          {
            title: '최근설계내역',
            contents: [
              {title: 'test', content: 'test'}
            ]
          },
          {
            title: '개인정보/보안관리',
            contents: [
              {title: 'test', content: 'test'}
            ]
          },
          {
            title: '시스템 오류',
            contents: [
              {title: 'test', content: 'test'}
            ]
          },
          {
            title: '서비스 제휴',
            contents: [
              {title: 'test', content: 'test'}
            ]
          },
          {
            title: '기타',
            contents: [
              {title: 'test', content: 'test'}
            ]
          }
        ],
        selectFaq: {}
      }
    },
    mounted () {
      this.selectFaq = this.faqList[0]
    },
    methods: {
      selectedFaq (faq) {
        this.selectFaq = faq
        this.closeAll()
      },
      showFaq (index) {
        this.closeAll()
        const ref = this.$refs[`faq${index}`][0]
        ref.toggle()
        this.faqsOpen[index] = ref.isSlideOpened
        this.faqsOpen = {...this.faqsOpen}
      },
      closeAll () {
        const refs = Object.keys(this.$refs)
        for (const ref of refs) {
          if (this.$refs[ref].length > 0) {
            this.$refs[ref][0].close()
          }
        }
      }
    },
    components: {
      globalFooter,
      mainHeader,
      accordion
    }
  }
</script>

<style scoped lang="scss">
  @import '../../style/variable';
  @import '../../style/mixin';

  .body {
    width: $min-width;
    margin: 124px auto 0;

    .title-box {
      text-align: center;
      margin-bottom: 75px;

      .title {
        color: $font-color-3;
        font-size: 40px;
      }

      .sub {
        color: $font-color;
        font-size: 18px;
      }
    }

    .menu {
      overflow: hidden;
      width: 100%;
      color: $font-color-4;
      padding: 24px 0 4px;
      border: 1px solid #eaeaea;

      div {
        width: 25%;
        float: left;
        text-align: center;
        padding-bottom: 20px;
        cursor: pointer;
        color: $font-color-4;

        &.active {
          color: $font-color-5;
        }

        &:hover {
          color: $font-color-5;
        }
      }
    }

    .faq {
      margin-bottom: 80px;
      .faq-header {
        width: 100%;
        height: 80px;
        padding: 0 16px 0 24px;
        display: flex;
        justify-items: center;
        align-items: center;
        font-size: 16px;
        color: $gray-3;
        cursor: pointer;
        border-bottom: 1px solid $gray-4;

        &.open {
          border-bottom: 0px;
        }
        .question {
          margin-right: 20px;
        }

        .down {
          text-align: right;
        }

        .title {
          width: 890px;
        }
      }

      .faq-body {
        padding: 44px 68px 37px 24px;
        width: 100%;
        border-bottom: 1px solid $gray-4;
        display: flex;
        color: $gray-3;
        background-color: #f9f9f9;

        img {
          margin-right: 20px;
        }
      }
    }

    .last-box {
      padding: 0 128px 0 64px;
      display: flex;
      align-items: center;
      justify-items: center;
      height: 200px;

      .text {
        margin-right: 40px;
        .title {
          font-size: 22px;
          color: $font-color-2;
        }
        .sub {
          font-size: 16px;
          color: $font-color-2;

          a {
            color: $primary-blue;
          }
        }
      }
    }
  }
</style>

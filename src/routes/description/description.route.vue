<template>
  <div>
    <div class="item-wrap">
      <div class="list-wrap" v-if="!isShow">
        <div class="button-group">
          <button @click="get('삼성화재')">삼성화재</button>
          <button @click="get('현대해상화재보험')">현대해상화재보험</button>
          <button @click="get('KB손해보험')">KB손해보험</button>
          <button @click="get('메리츠화재보험')">메리츠화재보험</button>
          <button @click="get('롯데손해보험')">롯데손해보험</button>
          <button @click="get('한화손해보험')">한화손해보험</button>
          <button @click="get('AXA손해보험')">AXA손해보험</button>
          <button @click="get('흥국화재')">흥국화재</button>
          <button @click="get('더케이손해보험')">더케이손해보험</button>
          <button @click="get('MG손해보험')">MG손해보험</button>
          <button @click="get('동부화재')">동부화재</button>
        </div>
        <div class="list-box">
          <div class="item header">
            <div class="company">
              회사
            </div>
            <div class="title">
              상품명
            </div>
            <div class="check">
              설명 여부
            </div>
          </div>
          <div class="item" v-for="item of list" :key="item.id" @click="openEdtior(item)">
            <div class="company">
              {{item.company}}
            </div>
            <div class="title">
              {{item.title}}
            </div>
            <div class="check">
              {{item.description ? '설명 있음': '설명 없음'}}
            </div>
          </div>
        </div>
      </div>
      <div v-if="isShow">
        <h4>{{selected.company}}-{{selected.title}}</h4>
        <vue-html5-editor :content="selected.description" @change="changeDescription"></vue-html5-editor>
        <div class="button">
          <button @click="closeEditor">되돌아가기</button>
          <button @click="save">저장하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VueHtml5Editor from 'vue-html5-editor'
  import * as es6Promise from 'es6-promise'
  /* eslint-disable */
  es6Promise.polyfill()
  import axios from 'axios'

  const vueHtml5Editor = new VueHtml5Editor({})
  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/item'
    : 'http://api.mytutto.com/api/item'
  export default {
    data () {
      return {
        description: '',
        isShow: false,
        list: [],
        selected: null
      }
    },
    methods: {
      async get (company) {
        const result = await axios.get(url, {
          params: {
            company
          }
        })

        this.list = result.data
      },
      openEdtior (item) {
        this.selected = item
        this.description = this.selected.description
        this.isShow = true
      },
      closeEditor () {
        this.isShow = false
        this.selected = null
      },
      changeDescription (val) {
        this.description = val
      },
      async save () {
        if (!confirm('저장 하시겠습니까?')) {
          return
        }
        await axios.post(url, {
          id: this.selected.id,
          description: this.description
        })

        this.get(this.selected.company)
      }
    },
    components: {
      vueHtml5Editor
    }
  }
</script>

<style scoped lang="scss">
  @import "../../style/variable";

  .item-wrap {
    width: $min-width;
    height: 100%;
    margin: 0 auto;

    button {
      border: 1px solid #000;
      padding: 5px;
      border-radius: 15px;
    }

    .list-wrap {
      padding: 5px 0;

      .list-box {
        margin-top: 20px;
        border: 1px solid #000;
        overflow: hidden;

        .item {
          overflow: hidden;
          cursor: pointer;
          border-bottom: 1px solid #000;
          width: 100%;

          &.header {
            cursor: default;
            background-color: #e2e2e2;
          }

          &:hover {
            background-color: #e2e2e2;
          }

          &:last-child {
            border-bottom: 0px;
          }

          div {
            float: left;
            padding: 5px;
          }

          .company {
            width: 20%;
          }

          .title {
            width: 60%;
          }
          .check {
            width: 10%;
          }
        }
      }
    }
    .button {
      margin-top: 10px;
      text-align: center;
    }
  }
</style>

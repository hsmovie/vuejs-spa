<template>
  <div>
    <car-header></car-header>
    <div class="car-content">
      <card-container title="생년월일과 성별을 알려주세요" tip="자동차등록증에 명시된 소유자를 기명피보험자로 합니다">
        <div class="birthday-age-box">
          <div class="input-box">
            <input type="input" v-numeric-only maxlength="8" v-model="input.birthday" autofocus
                   placeholder="생년월일을 입력해주세요(예: 19830123)"/>
            <div class="age">
              <div v-show="age">만 {{age}}세</div>
            </div>
          </div>
          <div class="gender-box">
            <div class="gender" :class="{'active': input.gender === 'male'}" @click="toggleGender('male')">남</div>
            <div class="gender" :class="{'active': input.gender === 'female'}" @click="toggleGender('female')">여</div>
          </div>
        </div>
      </card-container>
      <card-container title="차량의 제조사는 어디인가요?">
        <div class="select-box">
          <div class="select-group">
            <div class="select" :class="{'active': company.value === input.selectedCompany.value}"
                 v-for="(company, index) of companyList.first" :key="index" @click="selectCompany(company)">
              <div class="select-title">
                <img :src="`/static/png/img_logo_${company.value}_on.png`"
                     v-if="company.value === input.selectedCompany.value">
                <img :src="`/static/png/img_logo_${company.value}_off.png`"
                     v-if="company.value !== input.selectedCompany.value">
                <div class="name">
                  {{company.name}}
                </div>
              </div>
            </div>
          </div>
          <div class="select-group">
            <div class="select" :class="{'active': company.value === input.selectedCompany.value}"
                 v-for="(company, index) of companyList.second" :key="index" @click="selectCompany(company)">
              <div class="select-title">
                <img :src="`/static/png/img_logo_${company.value}_on.png`"
                     v-if="company.value === input.selectedCompany.value">
                <img :src="`/static/png/img_logo_${company.value}_off.png`"
                     v-if="company.value !== input.selectedCompany.value">
                <div class="name">
                  {{company.name}}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="electron">
          <radio-accordion :data="electricCar" @callback="checkedElectronCar"></radio-accordion>
        </div>
      </card-container>
      <card-container title="최초등록일 이후 얼마나 된 차량인가요?">
        <div class="date-box">
          <select-slider title="차량의 연령을 지정해주세요" v-model="input.selectedDate"
                         tip="최초등록일이란 신차 구입 후 최초로 명의등록이 완료된 시점입니다"
                         :data="dateList"></select-slider>
        </div>
      </card-container>
      <card-container title="실제 정기적으로 운전하실 <br>분을 지정해주세요" subTitle="운전자범위가 넓고 최저연령이 낮을수록 보험료 부담이 높아집니다">
        <div class="select-box">
          <div class="select-group">
            <div class="select" :class="{'active': input.condition[driver.value]}"
                 v-for="(driver, index) of driverList.first" :key="index" @click="selectDriver(driver)">
              <div class="select-title">
                <img :src="`/static/png/img_plan_${driver.img}_on.png`">
                <div class="name">
                  {{driver.name}}
                </div>
              </div>
            </div>
          </div>
          <div class="select-group">
            <div class="select" :class="{'active': input.condition[driver.value]}"
                 v-for="(driver, index) of driverList.second" :key="index" @click="selectDriver(driver)">
              <div class="select-title">
                <img :src="`/static/png/img_plan_${driver.img}_on.png`">
                <div class="name">
                  {{driver.name}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </card-container>
      <t-button large :disabled="isDisable" @click="submit">설정 완료</t-button>
    </div>
  </div>
</template>

<script>
  import packageHelpModal from '../../components/package-help-modal.component'
  import carHeader from '../../components/car-header.component'
  import cardContainer from '../../components/card-container.component'
  import radioAccordion from '../../../../components/radio-accordion.component'
  import selectSlider from '../../../../components/select-slider.component'
  import tButton from '../../../../components/button.component'

  export default {
    data () {
      return {
        input: this.$store.getters.getInsuranceInput,
        companyList: {
          first: [
            {name: '현대 자동차', value: 'hyundai'},
            {name: '기아 자동차', value: 'kia'},
            {name: '르노 삼성 자동차', value: 'samsung'}
          ],
          second: [
            {name: '쌍용 자동차', value: 'ssangyong'},
            {name: 'GM대우(쉐보레)', value: 'gm'},
            {name: '외산 자동차', value: 'foreign'}
          ]
        },
        dateList: [
          {title: '6개월 이하', value: 'sixMonthsBelow'},
          {title: '1년 이하', value: 'twelveMonthsBelow'},
          {title: '3년 이하', value: 'threeYearsBelow'},
          {title: '5년 이하', value: 'fiveYearsBelow'},
          {title: '7년 이하', value: 'sevenYearsBelow'},
          {title: '7년 초과', value: 'sevenYearsUpper'}
        ],
        driverList: {
          first: [
            {name: '본인', img: 'me', value: 'me'},
            {name: '배우자', img: 'partner', value: 'couple'},
            {name: '자녀', img: 'child', value: 'children'}
          ],
          second: [
            {name: '부모님', img: 'parents', value: 'parents'},
            {name: '누구나', img: 'anyone', value: 'anyone'},
            {name: '추가 1인', img: 'add1', value: 'designatePerson'}
          ]
        },
        electricCar: {
          title: '전기배터리와 모터만 사용하는 전기 자동차 인가요?',
          radio1: {
            title: '네, 맞습니다.',
            value: true
          },
          radio2: {
            title: '아니오.',
            value: false
          },
          radioValue: this.$store.getters.getInsuranceInput.condition.electricCar
        }
      }
    },
    methods: {
      toggleGender (gender) {
        this.input.gender = gender
      },
      selectCompany (company) {
        this.input.selectedCompany = company
        const condition = this.input.condition
        if (company.value !== 'foreign') {
          condition.domesticCar = true
          condition.foreignCar = false
        } else {
          condition.domesticCar = false
          condition.foreignCar = true
        }
      },
      selectDriver (driver) {
        this.input.selectedDriver = driver
        const condition = this.input.condition
        if (driver.value === 'me') {
          condition.me = !condition.me
        }

        if (driver.value === 'couple') {
          condition.couple = !condition.couple
        }

        if (driver.value === 'children') {
          condition.children = !condition.children
        }

        if (driver.value === 'parents') {
          condition.parents = !condition.parents
        }

        if (driver.value === 'anyone') {
          condition.anyone = !condition.anyone
        }

        if (driver.value === 'designatePerson') {
          condition.designatePerson = !condition.designatePerson
        }
      },
      checkedElectronCar (isElectron) {
        this.input.condition.electricCar = isElectron.base
      },
      selectDate () {
        if (this.input.selectedDate) {
          const value = this.input.selectedDate.value
          const condition = this.input.condition

          if (value === 'sixMonthsBelow') {
            condition.sixMonthsBelow = true
          } else {
            condition.sixMonthsBelow = false
          }
          if (value === 'twelveMonthsBelow') {
            condition.twelveMonthsBelow = true
          } else {
            condition.twelveMonthsBelow = false
          }
          if (value === 'threeYearsBelow') {
            condition.threeYearsBelow = true
          } else {
            condition.threeYearsBelow = false
          }
          if (value === 'fiveYearsBelow') {
            condition.fiveYearsBelow = true
          } else {
            condition.fiveYearsBelow = false
          }
          if (value === 'sevenYearsBelow') {
            condition.sevenYearsBelow = true
          } else {
            condition.sevenYearsBelow = false
          }
          if (value === 'sevenYearsUpper') {
            condition.sevenYearsUpper = true
          } else {
            condition.sevenYearsUpper = false
          }
        }
      },
      submit () {
        if (!this.isDisable) {
          this.selectDate()
          this.$store.dispatch('inputInsurance', this.input)
          this.$router.push('/car/coverage')
        }
      }
    },
    computed: {
      age () {
        if (this.input.birthday && this.input.birthday.length === 8) {
          const birthday = new Date(`${this.input.birthday.substr(0, 4)}-${this.input.birthday.substr(4, 2)}-${this.input.birthday.substr(6, 2)}`)
          const today = new Date()
          let age = today.getFullYear() - birthday.getFullYear()

          birthday.setFullYear(today.getFullYear())

          if (today < birthday) {
            age--
          }

          return age
        }

        return null
      },
      isDisable () {
        const input = this.input
        return !(input.birthday && input.gender && input.selectedCompany.value &&
          input.selectedDriver.value && input.selectedDate.value && input.condition.electricCar !== null)
      }
    },
    directives: {
      numericOnly: {
        bind (el, binding, vnode) {
          el.addEventListener('keyup', (e) => {
            let regex = /^[0-9]*$/
            if (!regex.test(el.value)) {
              el.value = el.value.slice(0, -1)
            }
          })
        }
      }
    },
    components: {
      packageHelpModal,
      cardContainer,
      carHeader,
      radioAccordion,
      selectSlider,
      tButton
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../../style/car";
  @import "../../../../style/variable";

  .birthday-age-box {
    overflow: hidden;

    .input-box {
      height: 56px;
      padding: 0 16px;
      width: 400px;
      box-sizing: border-box;
      border: 1px solid $gray;
      border-radius: $round-px;
      display: flex;
      align-items: center;
      float: left;

      input {
        flex: 8;
        height: 30px;
        border: none;
        font-size: 16px;
      }

      .age {
        text-align: right;
        flex: 2;
        color: #acacac;
      }
    }

    .gender-box {
      float: left;
      margin-left: 20px;
      width: 130px;

      .gender {
        float: left;
        width: 60px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border-radius: $round-px;
        border: 1px solid $gray;
        color: $gray-3;
        font-size: 16px;
        cursor: pointer;

        &:first-child {
          margin-right: 10px;
        }

        &.active {
          background-color: $gray;
          color: $primary-blue
        }

        &:hover {
          background-color: $gray;
          color: $primary-blue
        }
      }
    }
  }

  .select-box {
    .select-group {
      display: flex;
      height: 114px;

      &:first-child {
        margin-bottom: 20px;
      }

      .select {
        flex: 1;
        height: 114px;
        box-sizing: border-box;
        border: 1px solid $gray;
        border-radius: $round-px;
        margin-left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &.active {
          background-color: $gray;
        }

        &:hover {
          background-color: $gray;
        }

        &:first-child {
          margin-left: 0;
        }

        .select-title {
          text-align: center;

          .name {
            font-size: 16px;
            margin-top: 12px;
            color: $font-color-2;
          }
        }
      }
    }
  }

  .date-box {
    height: 202px;
  }

  .electron {
    margin-top: 30px;
    border-top: 1px solid $gray;
  }
</style>

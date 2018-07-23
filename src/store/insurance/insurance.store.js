import * as es6Promise from 'es6-promise'
/* eslint-disable */
es6Promise.polyfill()
import axios from 'axios'

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/' : 'http://api.mytutto.com/api/'

export const insurance = {
  state: {
    input: {
      coverage: {
        // 대인2
        person2: {title: null, value: null},
        // 대물
        object: {title: null, value: null},
        accident: {
          isCar: null,
          death: {title: null, value: null}, // 사망
          injury: {title: null, value: null} // 부상
        },
        // 무보험
        uninsuredCar: {title: null, value: null},
        // 물적할증금액
        surcharge: {title: null, value: null},
        // 자기차량손해
        selfCar: {
          rate: {title: null, value: null},
          min: {title: null, value: null},
          max: {title: null, value: ''}
        }
      },
      matchingAttribute: {
        subAttributes: {
          who: [],
          when1: [],
          when2: [],
          what: []
        },
        // 대인2 속성
        legalSupport: false, // 형사상 책임 포괄
        // 대물 속성
        foreignCarAccident: false, // 외산차 사고

        // 무보험 속성
        driveOtherCar: false, // 다른 자동차 운전 확대.
        driverRangeOtherCar: false, // 다른 차 보상에 대한 운전자범위 확대.
        damageOtherCar: false, // 다른 차 차량손해.
        substitutiveDriver: false, // 대리운전 운전담보.
        damageByOtherCar: false, // 다른 차에 의한 사고에 대해 보상확대

        // 자기차량손해
        expandRangeSelfCar: false, // 차량단독사고 범위 확대. from 보상범위 확대 또는 한정
        limitRangeSelfCar: true, // 차대차 및 도난사고 한정. from 보상범위 확대 또는 한정
        limitUninsuredCar: false, // 무보험자동차에 의한 사고 한정 보상
        sevenYearsUpperForeignCar: false, // 자차 보상한도 확대
        transportationCost: false, // 대체교통비 지금. from 대체교통비 또는 렌트비용 선택
        rentCarCost: false, // 렌트비용+렌터카 차량손해(손해담보). from 대체교통비 또는 렌트비용 선택
        leisureGoods: false, // 레저용품 손해보상
        newCarCost: false, // 신차가액보상
        devaluateCarCost: false, // 자동차시세하락 손해보상
        imprintSupport: false, // 취등록세 지원
        transportCarSupport: false // 사고차량 운반지원
      },
      condition: {
        person2: null, // 대인2
        bodyAccident: null, // 자기신체사고
        carAccident: null, // 자동차상해
        uninsuredCar: null, // 무보험
        selfCar: null, // 자기차량손해

        // 운전자범위
        me: false, // 본인
        couple: false, // 배우자
        children: false, // 자녀
        parents: false, // 부모
        anyone: false, // 누구나
        designatePerson: false, // 지정 1인

        // 전기차, 외산차, 국내차
        domesticCar: null,
        foreignCar: null,
        electricCar: false,
        // 연식
        sixMonthsBelow: false,
        twelveMonthsBelow: false,
        threeYearsBelow: false,
        fiveYearsBelow: false,
        sevenYearsBelow: false,
        sevenYearsUpper: false
      },
      dispatch: {
        dispatch: null,
        extraService: false, // 차량진단 등 부가서비스 제공
        unlockService: false, // 잠금장치해체, 배터리 충전 서비스 제외
        electricCar: false // 전기차 대상 대체특약
      },
      gender: null,
      birthday: null,
      accidentMode: null,
      selectedPackage: null,
      selectedCompany: {title: null, value: null},
      selectedDriver: {title: null, value: null},
      selectedDate: {title: null, value: null},
      mode: null
    },
    coverage: null,
    packages: [],
    subAttributes: null,
    accidentCar: [
      {
        death: 15000000,
        injury: 10000000
      },
      {
        death: 15000000,
        injury: 15000000
      },
      {
        death: 30000000,
        injury: 10000000
      },
      {
        death: 30000000,
        injury: 15000000
      },
      {
        death: 30000000,
        injury: 20000000
      },
      {
        death: 30000000,
        injury: 30000000
      },
      {
        death: 50000000,
        injury: 10000000
      },
      {
        death: 50000000,
        injury: 15000000
      },
      {
        death: 50000000,
        injury: 20000000
      },
      {
        death: 50000000,
        injury: 30000000
      },
      {
        death: 70000000,
        injury: 10000000
      },
      {
        death: 70000000,
        injury: 20000000
      },
      {
        death: 70000000,
        injury: 30000000
      },
      {
        death: 100000000,
        injury: 10000000
      },
      {
        death: 100000000,
        injury: 15000000
      },
      {
        death: 100000000,
        injury: 20000000
      },
      {
        death: 100000000,
        injury: 30000000
      },
      {
        death: 100000000,
        injury: 50000000
      },
      {
        death: 100000000,
        injury: 100000000
      },
      {
        death: 200000000,
        injury: 10000000
      },
      {
        death: 200000000,
        injury: 20000000
      },
      {
        death: 200000000,
        injury: 30000000
      },
      {
        death: 200000000,
        injury: 50000000
      },
      {
        death: 200000000,
        injury: 100000000
      },
      {
        death: 300000000,
        injury: 20000000
      },
      {
        death: 300000000,
        injury: 30000000
      },
      {
        death: 300000000,
        injury: 50000000
      },
      {
        death: 300000000,
        injury: 100000000
      },
      {
        death: 300000000,
        injury: 300000000
      },
      {
        death: 500000000,
        injury: 20000000
      },
      {
        death: 500000000,
        injury: 30000000
      },
      {
        death: 500000000,
        injury: 50000000
      },
      {
        death: 500000000,
        injury: 100000000
      }
    ],
    accidentBody: [
      {
        death: 15000000,
        injury: 15000000
      },
      {
        death: 15000000,
        injury: 20000000
      },
      {
        death: 15000000,
        injury: 30000000
      },
      {
        death: 15000000,
        injury: 50000000
      },
      {
        death: 30000000,
        injury: 15000000
      },
      {
        death: 30000000,
        injury: 20000000
      },
      {
        death: 30000000,
        injury: 30000000
      },
      {
        death: 30000000,
        injury: 50000000
      },
      {
        death: 50000000,
        injury: 15000000
      },
      {
        death: 50000000,
        injury: 20000000
      },
      {
        death: 50000000,
        injury: 30000000
      },
      {
        death: 50000000,
        injury: 50000000
      },
      {
        death: 100000000,
        injury: 15000000
      },
      {
        death: 100000000,
        injury: 20000000
      },
      {
        death: 100000000,
        injury: 30000000
      },
      {
        death: 100000000,
        injury: 50000000
      },
      {
        death: 100000000,
        injury: 100000000
      }
    ],
    selfCar: [
      {
        rate: 20,
        max: 500000
      },
      {
        rate: 20,
        max: 1000000
      },
      {
        rate: 20,
        max: 2000000
      },
      {
        rate: 30,
        max: 500000
      },
      {
        rate: 30,
        max: 1000000
      },
      {
        rate: 30,
        max: 2000000
      }
    ],
    tags: {
      person: {legalSupport: '중과실사고'},
      // 외산차 사고 대물
      object: {foreignCarAccident: '수입차 사고'},
      // when 자손사고
      accident: {
        mycar: '내 차의 운행(탑승)중 사고',
        public: '다른 차의 운행(탑승)중 사고',
        othercar: '다른 차의 운행(탑승)중 사고',
        overseas: '나의 해외 운전 중 사고',
        church: '교회(성당)버스 탑승 중 사고',
        hitrun: '뺑소니 사고'
      },
      // 무보험
      uninsuredCar: {
        driveOtherCar: '다른 차 운전담보',
        damageOtherCar: '다른 차 차량손해',
        driverRangeOtherCar: '차른 차 운전자범위 확대',
        substitutiveDriver: '대리운전 중 사고',
        damageByOtherCar: '보행 중 또는 다른 차 탑승 중 사고'
      },
      // 자차
      selfCar: {
        sevenYearsUpperForeignCar: '내 차의 수리비가 보험가액을 초과하는 사고',
        expandRangeSelfCar: '단독 사고, 가해자불명사고, 침수사고',
        newCarCost: '신차가액보상',
        imprintSupport: '차량교체 시 취등록세',
        devaluateCarCost: '신차가격의 20-30%를 초과하는 사고',
        leisureGoods: '레저용품 손해보상',
        transportationCost: '대체교통비',
        rentCarCost: '렌트비용',
        transportCarSupport: '사고차량 운반비'
      }
    },
    output: null
  },
  getters: {
    getOutput: state => state.output,
    getInsurance: state => key => state[key] ? state[key] : {},
    getPackages: state => state.packages.sort((a,b)=> a.rank - b.rank),
    getInsuranceInput: state => {
      return state.input
    },
    enableMode: () => {
      return true
    },
    enableCustomer: state => {
      const input = state.input
      if (input.mode === 'package') {
        if (input.selectedPackage) {
          return true
        } else {
          return false
        }
      } else if (input.mode === 'design') {
        return true
      }

      return false
    },
    enableCoverage: (state, getters) => {
      if (!getters.enableCustomer) {
        return false
      }
      const input = state.input
      if (input.birthday && input.gender && input.selectedCompany.value &&
        input.selectedDriver.value && input.selectedDate.value) {
        return true
      }
      return false
    },
    enableComparison: (state, getters) => {
      if (!getters.enableCustomer || !getters.enableCoverage) {
        return false
      }
      if (state.input.accidentMode === null) {
        return false
      }
      if (!state.output) {
        return false
      }
      return true
    }
  },
  actions: {
    clearInput: ({commit}) => {
      commit('clearInput')
    },
    getInsuranceBaseData: async ({commit}, key) => {
      const res = await axios.get(url + key)
      return commit('saveInsurance', {key, value: res.data})
    },
    inputInsurance: async ({commit}, parameter) => {
      commit('inputInsurance', parameter)
    },
    getDashboard: async ({commit, state}, input) => {
      const res = await axios.post(`${url}dashboard`, input)
      commit('setOutput', res.data)
    }
  },
  mutations: {
    saveInsurance: (state, data) => {
      state[data.key] = data.value
    },
    inputInsurance: (state, inputInsurances) => {
      state.input = inputInsurances
    },
    setOutput: (state, outputInsurances) => {
      state.output = outputInsurances
    },
    clearInput: (state) => {
      state.input = {
        coverage: {
          // 대인2
          person2: {title: null, value: null},
          // 대물
          object: {title: null, value: null},
          accident: {
            isCar: null,
            death: {title: null, value: null}, // 사망
            injury: {title: null, value: null} // 부상
          },
          // 무보험
          uninsuredCar: {title: null, value: null},
          // 물적할증금액
          surcharge: {title: null, value: null},
          // 자기차량손해
          selfCar: {
            rate: {title: null, value: null},
            min: {title: null, value: null},
            max: {title: null, value: ''}
          }
        },
        matchingAttribute: {
          subAttributes: {
            who: [],
            when1: [],
            when2: [],
            what: []
          },
          // 대인2 속성
          legalSupport: false, // 형사상 책임 포괄
          // 대물 속성
          foreignCarAccident: false, // 외산차 사고

          // 무보험 속성
          driveOtherCar: false, // 다른 자동차 운전 확대.
          driverRangeOtherCar: false, // 다른 차 보상에 대한 운전자범위 확대.
          damageOtherCar: false, // 다른 차 차량손해.
          substitutiveDriver: false, // 대리운전 운전담보.
          damageByOtherCar: false, // 다른 차에 의한 사고에 대해 보상확대

          // 자기차량손해
          expandRangeSelfCar: false, // 차량단독사고 범위 확대. from 보상범위 확대 또는 한정
          limitRangeSelfCar: true, // 차대차 및 도난사고 한정. from 보상범위 확대 또는 한정
          limitUninsuredCar: false, // 무보험자동차에 의한 사고 한정 보상
          sevenYearsUpperForeignCar: false, // 자차 보상한도 확대
          transportationCost: false, // 대체교통비 지금. from 대체교통비 또는 렌트비용 선택
          rentCarCost: false, // 렌트비용+렌터카 차량손해(손해담보). from 대체교통비 또는 렌트비용 선택
          leisureGoods: false, // 레저용품 손해보상
          newCarCost: false, // 신차가액보상
          devaluateCarCost: false, // 자동차시세하락 손해보상
          imprintSupport: false, // 취등록세 지원
          transportCarSupport: false // 사고차량 운반지원
        },
        condition: {
          person2: null, // 대인2
          bodyAccident: null, // 자기신체사고
          carAccident: null, // 자동차상해
          uninsuredCar: null, // 무보험
          selfCar: null, // 자기차량손해

          // 운전자범위
          me: false, // 본인
          couple: false, // 배우자
          children: false, // 자녀
          parents: false, // 부모
          anyone: false, // 누구나
          designatePerson: false, // 지정 1인

          // 전기차, 외산차, 국내차
          domesticCar: null,
          foreignCar: null,
          electricCar: false,
          // 연식
          sixMonthsBelow: false,
          twelveMonthsBelow: false,
          threeYearsBelow: false,
          fiveYearsBelow: false,
          sevenYearsBelow: false,
          sevenYearsUpper: false
        },
        dispatch: {
          dispatch: null,
          extraService: false, // 차량진단 등 부가서비스 제공
          unlockService: false, // 잠금장치해체, 배터리 충전 서비스 제외
          electricCar: false // 전기차 대상 대체특약
        },
        gender: null,
        birthday: null,
        accidentMode: null,
        selectedPackage: null,
        selectedCompany: {title: null, value: null},
        selectedDriver: {title: null, value: null},
        selectedDate: {title: null, value: null},
        mode: null
      }
    }
  }
}

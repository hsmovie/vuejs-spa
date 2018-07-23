import Vue from 'vue'
import Vuex from 'vuex'
import { insurance } from './insurance/insurance.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    insurance
  }
})

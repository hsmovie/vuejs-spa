// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app'
import router from './router.js'
import store from './store'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import VueSimpleSVG from 'vue-simple-svg'

Vue.use(VueSimpleSVG)
Vue.config.productionTip = false

async function main () {
  // await store.dispatch('getInsuranceBaseData', 'coverage')
  // await store.dispatch('getInsuranceBaseData', 'packages')
  // await store.dispatch('getInsuranceBaseData', 'subAttributes')
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    store,
    router,
    template: '<app/>',
    components: {app}
  })
}

main()

import Vue from 'vue'
import Router from 'vue-router'
import mainRouter from './routes/main/main.router'
import faqRouter from './routes/faq/faq.router'
import testRouter from './routes/test.router'
import descriptionRouter from './routes/description/description.router'
import carRouter from './routes/car/car.router'
import blogRouter from './routes/blog/blog.router'
import companyRouter from './routes/company/company.router'
import termsOfUse from './routes/terms-of-use/terms-of-use.router'
import privacyPolicy from './routes/privacy-policy/privacy-policy.router'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    ...mainRouter,
    ...testRouter,
    ...carRouter,
    ...descriptionRouter,
    ...companyRouter,
    ...faqRouter,
    ...blogRouter,
    ...termsOfUse,
    ...privacyPolicy
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})

const checkRoutes = [
  'Customer',
  'Coverage',
  'Comparison'
]
router.beforeEach((to, from, next) => {
  const routeName = to.name
  if (routeName === 'Mode') {
    if (store.getters.enableCustomer) {
      if (confirm('처음으로 돌아가시면 초기화 됩니다.\n이동하시겠습니까?')) {
        store.dispatch('clearInput')
        next()
      }
    } else {
      store.dispatch('clearInput')
      next()
    }
  } else if (checkRoutes.includes(routeName)) {
    if (!store.getters[`enable${routeName}`]) {
      router.back()
    } else {
      next()
    }
  } else {
    store.dispatch('clearInput')
    next()
  }
})

export default router

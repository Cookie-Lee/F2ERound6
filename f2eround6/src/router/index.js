import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Reservation from '../views/Reservation.vue'

Vue.use(VueRouter)

const mixProps = function () {
  return route => {
    return Object.assign({}, route.params, route.query)
  }
}

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: Reservation,
    props: mixProps(),
  },
  {
    path: '*',
    redirect: '/',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//讓頁面跳轉後可以維持在最上方
router.afterEach((to, from) => {
  window.scrollTo(0, 0);
})

export default router

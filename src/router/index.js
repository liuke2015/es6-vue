import Vue from 'vue'
import Router from 'vue-router'
import enter from '@/components/enter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'enter',
      component: enter,
      redirect: "/testES6",
      children: [
        {
          path: "/testES6",
          name: "testES6", //es6js练习文件入口
          component: () => import("@/components/testES6/testES6"),
        }
      ]
    }
  ]
})

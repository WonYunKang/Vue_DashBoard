import Vue from 'vue'
import Router from 'vue-router'
import Body from '@/components/Body'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import Page4 from '@/components/Page4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Body',
      component: Body
    },
    {
      path: '/Page1',
      name: 'Page1',
      component: Page1
    },
    {
      path: '/Page2',
      name: 'Page2',
      component: Page2
    },
    {
      path: '/Page3',
      name: 'Page3',
      component: Page3
    },
    {
      path: '/Page4',
      name: 'Page4',
      component: Page4
    }
  ]
})

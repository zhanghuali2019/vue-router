import Vue from 'vue'
import Router from 'vue-router'
import Dashboard1 from '@/components/Dashboard/dashboard1'
import Dashboard2 from '@/components/Dashboard/dashboard2'
import Dashboard3 from '@/components/Dashboard/dashboard3'
import Menu1 from '@/components/menu/menu1'
import Menu2 from '@/components/menu/menu2'
import Menu3 from '@/components/menu/menu3'
import List1 from '@/components/list/list1'
import List2 from '@/components/list/list2'
import List3 from '@/components/list/list3'
import List4 from '@/components/list/list4'
import Detail1 from '@/components/detail/detail1'
import Detail2 from '@/components/detail/detail2'
import Result1 from '@/components/result/result1'
import Result2 from '@/components/result/result2'
import Abnormal1 from '@/components/abnormal/abnormal1'
import Abnormal2 from '@/components/abnormal/abnormal2'
import Personal1 from '@/components/personal/personal1'
import Personal2 from '@/components/personal/personal2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard1'
    },
    {
      path: '/dashboard1',
      component: Dashboard1
    },
    {
      path: '/dashboard2',
      component: Dashboard2
    },
    {
      path: '/dashboard3',
      component: Dashboard3
    },
    {
      path: '/menu1',
      component: Menu1
    },
    {
      path: '/menu2',
      component: Menu2
    },
    {
      path: '/menu3',
      component: Menu3
    },
    {
      path: '/list1',
      component: List1
    },
    {
      path: '/list2',
      component: List2
    },
    {
      path: '/list3',
      component: List3
    },
    {
      path: '/list4',
      component: List4
    },
    {
      path: '/detail1',
      component: Detail1
    },
    {
      path: '/detail2',
      component: Detail2
    },
    {
      path: '/result1',
      component: Result1
    },
    {
      path: '/result2',
      component: Result2
    },
    {
      path: '/abnormal1',
      component: Abnormal1
    },
    {
      path: '/abnormal2',
      component: Abnormal2
    },
    {
      path: '/personal1',
      component: Personal1
    },
    {
      path: '/personal2',
      component: Personal2
    }
  ]
})

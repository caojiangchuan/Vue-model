import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['../components/HelloWorld'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../view/login'], resolve)
    },
    {
      path: '/main',
      name: 'main',
      component: resolve => require(['../view/main'], resolve),
      redirect: '/main/index',
      children: [
        {
          path: 'index',
          name: 'index',
          component: resolve => require(['../components/index'], resolve)
        },
        {
          path: 'component',
          name: 'component',
          component: resolve => require(['../components/component'], resolve)
        },
        {
          path: 'function',
          name: 'function',
          component: resolve => require(['../components/function'], resolve)
        },
        {
          path: 'my',
          name: 'my',
          component: resolve => require(['../components/my'], resolve)
        },
        {
          path: 'about',
          name: 'about',
          component: resolve => require(['../components/about'], resolve)
        }

      ]

    },


  ]
})

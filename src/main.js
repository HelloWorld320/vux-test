// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import hello from './components/Hello'

import  { ConfirmPlugin } from 'vux'//引入确认按钮组件
Vue.use(ConfirmPlugin)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/hello',
    component: hello
  },
  {
    path:"/test1/:id",
    name:"test1",
    component: function(resolve) {
      require(['./components/test1.vue'], resolve)
    }
  },
  //布局(Grid & Scroller)测试
  {
    path:"/test2",
    name:"test2",
    component: function(resolve) {
      require(['./components/test2.vue'], resolve)
    }
  },
  //确认按钮测试
  {
    path:"/test3",
    name:"test3",
    component: function(resolve) {
      require(['./components/test3.vue'], resolve)
    }
  },
  //图片展示功能测试
  {
    path:"/test4",
    name:"test4",
    component: function(resolve) {
      require(['./components/test4.vue'], resolve)
    }
  },
  //按钮测试(x-button)
  {
    path: "/test5",
    name: "test5",
    component: function(resolve) {
      require(['./components/test5.vue'], resolve)
    }
  },
  //图片广告(masker)
  {
    path: "/test6",
    name: "test6",
    component: function(resolve) {
      require(['./components/test6.vue'], resolve)
    }
  },
  //标签导航
  {
    path: "/test7",
    name: "test7",
    component: function(resolve) {
      require(['./components/test7.vue'], resolve)
    }
  }
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

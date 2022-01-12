import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 老人的组件
const elder_community = () => import("../views/elder/community")
const elder_voice = () => import("../views/elder/voice")
const elder_profile = () => import("../views/elder/profile")

// 志愿者的组件
const volunteer_home = () => import("../views/volunteer/home")
const volunteer_org = () => import("../views/volunteer/organization")
const volunteer_publish = () => import("../views/volunteer/publish")
const volunteer_messages = () => import("../views/volunteer/messages")
const volunteer_profile = () => import("../views/volunteer/profile")


const routes = [
  {
    path: '',
    // ----暂未完成：redirect这里需要根据登录者的身份动态确定
    // redirect:'/elder/community'
    redirect:'/volunteer/home'
  },
  // 老人页面的路径配置
  {
    path:'/elder/community',
    component:elder_community
  },
  {
    path:'/elder/voice',
    component:elder_voice
  },
  {
    path:'/elder/profile',
    component:elder_profile
  },
  
  // 志愿者界面的路径配置
  {
    path: '/volunteer/home',
    name: '/volunteer/home',
    component:volunteer_home
  },
  {
    path: '/volunteer/organization',
    name: '/volunteer/organization',
    component:volunteer_org
  },
  {
    path: '/volunteer/publish',
    name: '/volunteer/publish',
    component:volunteer_publish
  },
  {
    path: '/volunteer/messages',
    name: '/volunteer/messages',
    component:volunteer_messages
  },
  {
    path: '/volunteer/profile',
    name: '/volunteer/profile',
    component:volunteer_profile
  },
  
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

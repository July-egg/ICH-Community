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

// 引入各个页面对应的组件
const homepage = () => import("../views/homepage/homepage")
const community = () => import("../views/community/community")
const games = () => import("../views/games/games")
const shopping = () => import("../views/shopping/shopping")
const profile = () => import("../views/profile/profile")


const routes = [
  {
    // 默认跳转页面为首页
    path: '',
    redirect:'/homepage'
  },
  
  //具体各个页面路径配置
  
  // 首页
  {
    path:'/homepage',
    component:homepage
  },
  
  // 社区
  {
    path:'/community',
    component:community
  },
  
  // 游戏
  {
    path: '/games',
    component:games
  },
  
  // 商城
  {
    path: '/shopping',
    component:shopping
  },
  
  // 我的
  {
    path: '/profile',
    component:profile
  },
  
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

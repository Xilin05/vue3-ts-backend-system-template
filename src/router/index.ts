import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
// 扩展继承属性
interface EXTEND_ROUTES {
  hidden?: boolean
}

import systemRouter from './modules/system'

export const asyncRoutes = [...systemRouter]
const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import('../views/HomeView.vue')
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue')
  // }
]

/**
 * path ==> 路由路径
 * name ==> 路由名称
 * component ==> 路由组件
 * redirect ==> 路由重定向
 * alwaysShow ==> 如果设置为true，将始终显示根菜单，无论其子路由长度如何
 * hidden ==> 如果“hidden:true”不会显示在侧边栏中（默认值为false）
 * keepAlive ==> 设为true 缓存
 * meta ==> 路由元信息
 * meta.title ==> 路由标题
 * meta.icon ==> 菜单icon
 * meta.affix ==> 如果设置为true将会出现在 标签栏中
 * meta.breadcrumb ==> 如果设置为false，该项将隐藏在breadcrumb中（默认值为true）
 */

export const constantRoutes: Array<RouteRecordRaw & EXTEND_ROUTES> = [
  {
    path: '/404',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/function-pages/404/index.vue'),
    hidden: true
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/function-pages/403/index.vue'),
    hidden: true
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    hidden: true,
    meta: { title: '登录' }
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
    meta: { title: '首页', icon: 'House' },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: { title: '首页', icon: 'House', affix: true, role: ['other'] }
      }
    ]
  }
]

/**
 * notFoundRouter(找不到路由)
 */
export const notFoundRouter = {
  path: '/:pathMatch(.*)',
  name: 'notFound',
  redirect: '/404',
  hidden: true
}

const router = createRouter({
  history: createWebHashHistory(), // 本项目采用了哈希模式
  routes: constantRoutes
})

export default router

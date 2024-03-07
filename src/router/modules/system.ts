/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout/index.vue'

const systemRouter: Record<string, any>[] = [
  {
    path: '/system',
    component: Layout,
    redirect: '/system/log',
    name: 'system',
    meta: {
      title: '系统管理',
      icon: 'Setting'
    },
    children: [
      {
        path: '/system/log',
        component: () => import('@/views/system/operation-logs/index.vue'),
        name: 'log',
        meta: { title: '操作日志', icon: 'MenuIcon' }
      },
      {
        path: '/system/setting',
        component: () => import('@/views/system/setting/index.vue'),
        name: 'setting',
        meta: { title: '系统配置', icon: 'MenuIcon' }
      }
      // {
      //     path: '/system/user',
      //     component: () => import('@/views/system/user/index.vue'),
      //     name: 'user',
      //     meta: { title: '用户管理' , icon: 'MenuIcon'}
      // },
      // {
      //     path: '/system/dept',
      //     component: () => import('@/views/system/dept/index.vue'),
      //     name: 'dept',
      //     meta: { title: '部门管理' , icon: 'MenuIcon'}
      // },
      // {
      //     path: '/system/role',
      //     component: () => import('@/views/system/role/index.vue'),
      //     name: 'role',
      //     meta: { title: '角色管理', icon: 'MenuIcon' }
      // },
      // {
      //     path: '/system/menu',
      //     component: () => import('@/views/system/menu/index.vue'),
      //     name: 'menu',
      //     meta: { title: '菜单管理',  icon: 'MenuIcon'}
      // },
      // {
      //     path: '/system/dictionary',
      //     component: () => import('@/views/system/dictionary/index.vue'),
      //     name: 'dictionary',
      //     meta: { title: '字典管理',  icon: 'MenuIcon'}
      // },
    ]
  }
]

export default systemRouter

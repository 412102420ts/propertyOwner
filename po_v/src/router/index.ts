import { createRouter, createWebHashHistory } from 'vue-router'

const affairList = () => import('@/pages/affair/affairList/index.vue')
const regionList = () => import('@/pages/region/regionList/index.vue')
const noticeList = () => import('@/pages/notice/noticeList/index.vue')
const noticeTemplate = () => import('@/pages/notice/noticeTemplate/index.vue')
const message = () => import('@/pages/message/index.vue')

export default createRouter({
  history: createWebHashHistory(), // Hash路由
  routes: [
    {
      path: '/',
      redirect: "/noticeList",
      component: import('@/pages/main.vue'),
      meta:{transition: 'fade', isAlive: true },
      children: [
        { path: '/noticeList', component: noticeList, name: 'noticeList', meta: { title: '公告列表', transition: 'fade' } },
        { path: '/noticeTemplate', component: noticeTemplate, name: 'noticeTemplate', meta: { title: '模板管理', transition: 'fade' } },
        { path: '/affairList', component: affairList, name: 'affairList', meta: { title: '事务列表', transition: 'fade' } },
        { path: '/regionList', component: regionList, name: 'regionList', meta: { title: '区域管理', transition: 'fade' } },
        { path: '/message', component: message, name: 'message', meta: { title: '客服', transition: 'fade' } },
      ]
    },
    // { path: '/find', component: Find },
    // { path: '/user', component: User },
    // { path: '/cnode', component: Cnode }
  ]
})
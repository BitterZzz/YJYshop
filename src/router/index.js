
import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

const routes =[
  {
    path: '/',
    component:()=>import('../components/Tabs.vue'),
    beforeEnter: (to,from,next) => {
      if(localStorage.token != null){
        next();
        return;
      }
      next('/mobile/login')
    },
    children:[
      {
        path:'mobile',
        component:()=>import('../components/Tabs.vue'),
      }, 
    ]
  },
  // 登录及个人中心
  {
    path:'/mobile/login',
    component:()=>import('../pages/home/root.vue'),
  },
  {
    path:'/personal',
    component: ()=>import('../pages/home/personal.vue'),
    meta: { 
      title:'个人中心',
      auth:true
     }
  },
  // 我的优惠券
  {
     path:'/mobile/coupon',
     component:()=>import('../pages/coupon/root.vue')
  },
  {
    path:'*',
    redirect:'/mobile'
  },
];
const router = new Router({
  mode: 'hash',   
  base: process.env.BASE_URL,  //路径以什么为基础
  routes,
})
export default router
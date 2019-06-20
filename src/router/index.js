import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

const routes =[
  {
    path: '/',
    component:()=>import('../components/Tabs.vue'),
    beforeEnter: (to,from,next) => {
      if(localStorage.token !== null && localStorage.token){
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
  {
    path:'/mobile/login',
    component:()=>import('../pages/home/root.vue'),
    beforeEnter: (to, from, next)  => {
      if(localStorage.token !== null && localStorage.token){
        next('/personal');
        return;
      }
      next();
    }
  },
  {
    path:'/personal',
    component: ()=>import('../pages/home/personal.vue'),
    meta: { 
      title:'个人中心',
      auth:true
     }
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

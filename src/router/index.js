
import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

const routes =[
  {
    path: '/',
    component:()=>import('../components/Tabs.vue'),
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
      if(localStorage.token !== 'null' && localStorage.token !=='' && localStorage.token){
        next('/mobile/personal');
        return;
      }
      next();
    }
  },
  {
    path:'/mobile/personal',
    component: ()=>import('../pages/home/personal.vue'),
    beforeEnter:(to,form,next) => {
      if(localStorage.token !== 'null' && localStorage.token !== '' && localStorage.token){
        next();
        return;
      }else{
        next({
          path:'/mobile/login',
          redirect:to.path
        });
      }
    },
    meta: { 
      title:'个人中心',
      auth:true
     }
  },
  {
    path:'*',
    redirect:'/mobile'
  },

  // 我的优惠券
  {
     path:'/mobile/coupon',
     component:()=>import('../pages/coupon/root.vue'),
     redirect:'/mobile/unUsed',
       children:[
            {
              path:'/mobile/unUsed',
              component:()=>import('../pages/coupon/children/unUsed.vue')
            },
            {
              path:'/mobile/pustDue',
              component:()=>import('../pages/coupon/children/pustDue.vue')
            },
            {
              path:'/mobile/use',
              component:()=>import('../pages/coupon/children/use.vue')
            }
       ]
  },
  // 我的资产
  {
    path:'/mobile/property',
    component:()=>import('../pages/property/root.vue'),
    redirect:'/mobile/balance',
     children:[
       {
        path:'/mobile/balance',
        component:()=>import('../pages/property/children/balance.vue')
       },
       {
        path:'/mobile/intergral',
        component:()=>import('../pages/property/children/integral.vue')
       }
     ]
  },
  // 我的收藏
  {
     path:'/mobile/collect',
     component:()=>import('../pages/collect/root.vue'),
     redirect:'/mobile/commodity',
     children:[
      {
        path:'/mobile/commodity',
        component:()=>import('../pages/collect/children/commodity.vue')
      },
      {
        path:'/mobile/store',
        component:()=>import('../pages/collect/children/store.vue')
      },
 ]
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

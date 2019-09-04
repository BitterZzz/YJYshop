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
  // 登录页
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
  // 搜索框
  {
      path:"/mobile/search",
      component:()=>import("../pages/search/root.vue"),
       children:[
         {
           path:'/mobile/shop',
           component:()=>import("../pages/search/shopStyle.vue")
         }
       ]
  },
  // 个人中心
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
   // 全部订单
   {
      path:'/mobile/allOrder',
      component:()=>import('../pages/allOrders/root.vue'),
      redirect:'/mobile/order',
        children:[
          {
            path:'/mobile/order',
            component:()=>import('../pages/allOrders/children/order.vue')
          },
          {
            path:'/mobile/pay',
            component:()=>import('../pages/allOrders/children/pay.vue')
          },
          {
            path:'/mobile/deliver',
            component:()=>import('../pages/allOrders/children/deliver.vue')
          },
          {
            path:'/mobile/receive',
            component:()=>import('../pages/allOrders/children/receive.vue')
          },
          {
            path:'/mobile/evaluate',
            component:()=>import('../pages/allOrders/children/evaluate.vue')
          },
          
        ]
   },
  //  退款、售后
   {
    path:'/mobile/refund',
    component:()=>import('../pages/allOrders/children/refund.vue')
   },
  //  我的地址管理
   {
     path:'/mobile/site',
     component:()=>import('../pages/site/root.vue')
   },
   {
    path:'/mobile/shippingAddres',
    component:()=>import('../pages/shippingAddres/addres.vue'),
  },
  // 账户管理
  {
    path:'/mobile/account',
    component:()=>import('../pages/account/root.vue'),
    
  },
  {
    path:'/mobile/password',
    component:()=>import('../pages/account/children/channgePassword.vue')
  },
  {
     path:'/mobile/formar',
     component:()=>import('../pages/account/children/formar.vue')
  },
  {
     path:'/mobile/bind',
     component:()=>import('../pages/account/children/bind.vue'),
  },
  {
    path:'/mobile/bindPhone',
    component:()=>import('../pages/account/root.vue'),
    beforeEnter: (to, from, next)  => {
      if(sessionStorage.bindPhone !== 'null' && sessionStorage.bindPhone !=='' && sessionStorage.bindPhone){
        next('/mobile/bindPhone');
        return;
      }
      next();
    }
  },
  {
    path:'/mobile/remember',
    component:()=>import('../pages/account/children/remember.vue'),
  },
  // 分类
  {
    path:'/mobile/classify',
    component:()=>import('../pages/classify/root.vue'),
    redirect:("/mobile/main"),
    children:[
      {
        path:"/mobile/main",
        name:'家用电器',
        component:()=>import('../pages/classify/children/cate-main.vue')
     },
     {
       path:'/mobile/fresh',
       name:'生鲜',
       component:()=>import('../pages/classify/children/cate-fresh.vue')
     },
     {
      path:'/mobile/oil',
      name:'粮油调味',
      component:()=>import('../pages/classify/children/cate-oil.vue')
    },
    {
      path:'/mobile/furniture',
      name:'家具用品',
      component:()=>import('../pages/classify/children/cate-furniture.vue')
    },
    {
      path:'/mobile/liquor',
      name:'酒类',
      component:()=>import('../pages/classify/children/cate-liquor.vue')
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

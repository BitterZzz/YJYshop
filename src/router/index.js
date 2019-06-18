import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

const routes =[
  {
    path:'*',
    redirect:'/mobile'
  },
  {
    path:'/mobile',
    component:()=>import('../components/Tabs.vue'),
  }, 
  {
    path:'/mobile/home',
    component:()=>import('../pages/home/root.vue'),

  }
];


export default new Router({
  mode: 'hash',   
  base: process.env.BASE_URL,  //路径以什么为基础
  routes
})

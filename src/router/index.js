import Vue from 'vue'
import Router from 'vue-router'
import homeRoute from './home'


Vue.use(Router)

const routes =[
  homeRoute,
  {
    path:'/',
    redirect:'/mobile'
  }
   
];


export default new Router({
  mode: 'history',   
  base: process.env.BASE_URL,  //路径以什么为基础
  routes
})

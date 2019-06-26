<template>
    <div id="allOrders">
          <div class="header">
               <li
               v-for="(item,index) in orderList" :key="index"
               :to="item.path"
               v-on:click="orderClass(index)"
               v-bind:class="{ bgColors:index==current}"> 
                   <router-link :to="item.path"> 
                      <p>{{item.name}}</p> 
                   </router-link>
               </li>
          </div>
     
  
          <router-view></router-view>
    </div>
</template>

<script>
export default {
     name:'',
     data(){
         return{
             current:"",
             orderList:[
                 {id:11,name:"全部订单",path:"/mobile/order"},
                 {id:12,name:"待付款",path:"/mobile/pay"},
                 {id:13,name:"待发货",path:"/mobile/deliver"},
                 {id:14,name:"待收货",path:"/mobile/receive"},
                 {id:15,name:"待评价",path:"/mobile/evaluate"},

             ]
         }
     },
      methods: {
       orderClass:function(index){
          this.current=index;
       },

    },
}
</script>

<style lang="scss" scoped>
 #allOrders{
     width: 100%;
     height: 100%;
     position: fixed;
     background-color: #f5f5f5;
     padding-top: 44px;
     box-sizing: border-box;
     .header{
         display: flex;
         justify-content: space-around;
         align-items: center;
         width: 100%;
         height: 44px;
         background: #fff;
         position: absolute;
         top: 0;
         left: 0;
         .bgColors {
                        font-weight: bold;
                        color: #333;
                        border-bottom: 2px solid red;
                    }
         li{
             width: 25%;
             height: 44px;
             line-height: 44px;
             text-align: center;
             color: #6c6b6e;
             font-size: 11px;
         }
     }
     .content{
         width: 100%;
         height: 100%;
     }
 }
</style>


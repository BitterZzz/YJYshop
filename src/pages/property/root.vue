<template>
    <div id="property" class="page">
         <div class="balance">
              <router-link tag="li" v-for="item in proList" 
               :to="item.path"
               :key="item.id">
                  <p>{{item.name}}</p>
              </router-link>
         </div>
         <router-view></router-view>
    </div>
</template>

<script>
export default {
   name:'',
   data(){
       return{
           proList:[
               {id:1,name:'我的余额',path:'/mobile/balance'},
               {id:2,name:'我的积分',path:'/mobile/intergral'}
           ]
       }
   },
}
</script>

<style lang="scss" scoped>
  #property{
      position: fixed;
      width: 100%;
      height: 100%;
      background: #F7F7F7;
      cursor: pointer;
     .balance{
         width: 100%;
         height: 44px;
        
         background: #fff;
         display: flex;
          li{
              width: 50%;
            //   color: #fff;
             font-weight: 400;
             color: #221f1f;
                p{
                    text-align: center;
                    font-size: 16px;
                    line-height: 44px;
                }
          }
     }
  }
</style>


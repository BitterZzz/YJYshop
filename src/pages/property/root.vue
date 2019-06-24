<template>
    <div id="property" class="page">
         <div class="balance">
              <ul v-for="(item,index) in proList" 
               :key="index"
                v-on:click="proClass(index)"
                v-bind:class="{ bgColors:index==profrom}"
                >
              <router-link  :to="item.path"> 
                      <a href="#">{{item.name}}</a>
              </router-link>
             </ul>
         </div>
          <suspend/>
         <router-view></router-view>
    </div>
</template>

<script>
import suspend from '../../components/suspend'

export default {
   name:'',
   components:{
        Suspend:suspend,
   },
   data(){
       return{
           profrom:0,
           proList:[
               {id:1,name:'我的余额',path:'/mobile/balance'},
               {id:2,name:'我的积分',path:'/mobile/intergral'}
           ],
       }
   },
   methods:{
       proClass:function(index){
          this.profrom=index;
        },
       
     },

}

</script>

<style lang="scss" scoped>
  #property{
      
      width: 100%;
      height: 100%;
      background: #F7F7F7;
      cursor: pointer;
      overflow: auto;
     .balance{
         width: 100%;
         height: 44px;
         background: #fff;
         display: flex;
          .bgColors  a{
                   font-weight: bold;
                   color: #333;
                   border-bottom: 2px solid red;
                       }
          ul{
              width: 50%;
             font-weight: 400;
             display: flex;
             justify-content: center;
                     a{
                         display: block;
                         width: 70px;
                         height: 41px;
                         line-height: 41px;
                         text-align: center;
                         color: #221f1f;
                         font-size: 15px;
                         font-weight: 400;
                     }
                
          }
     }
  }
</style>


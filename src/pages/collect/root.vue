<template>
    <div id="collect">
         <div class="header">
             <p v-for="(item,index) in list" :key="item.id"
                v-on:click="addCollect(index)"
                 v-bind:class="{ bgColors:index==current}">
                 <router-link :to="item.path"> 
                        <a href="#">
                        {{item.value}}
                        </a> 
                 </router-link>
             </p>
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
           list:[
               {id:1,value:"收藏的商品",path:'/mobile/commodity'},
               {id:2,value:"收藏的店铺",path:'/mobile/store'},
           ]
       }
   },
   methods:{
       addCollect:function(index){
           this.current=index;
       }
   }
}
</script>

<style lang="scss" scoped>
 #collect{
      
      .header{
          display: flex;
          height: 44px;
          border-bottom: 1px solid #cdcdcd;
          justify-content: space-around;
          p:first-child::before{
              content: " ";
              position: absolute;
              display: block;
              width: 1px;
              height: 36px;
              background: #eeeeee;
              right: 50%;
              top: 4px;
          }
           .bgColors a{
                        font-weight: bold;
                        color: #3CADFF;
                        border-bottom: 2px solid #3CADFF;}
          p{
             
                 a{
                    display: block;
                    height: 44px;
                    line-height: 44px;
                    text-align: center;
                    font-size: 16px;
                    width: 120px; 
                    margin:  0 auto;
                 }
          }
      }
 }
</style>

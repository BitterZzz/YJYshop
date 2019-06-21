<template>
    <div id="itergral">
         <h1>2300</h1>
         <div class="list" v-for="item in balaList" :key="item.id">
            <p>
                <span>{{item.cont}}</span>
                <span>{{item.time}}</span>
            </p>
            <p class="sum">{{item.sum}}</p>
         </div>
    </div>
</template>

<script>
export default {
      name:'',
      data(){
         return{
              balaList:[
                  {id:1,cont:'消费',time:'2018-5-10  9:32',sum:'+305'},
                  {id:2,cont:'佣金输入',time:'2018-5-10  16:10',sum:'+500'},
                  {id:3,cont:'消费',time:'2018-5-10  22:12',sum:'+60'},
              ]
         }
      },
}
</script>

<style lang="scss" scoped>
 #itergral{
     h1{
         width: 100%;
         height: 100px;
         line-height: 96px;
         font-size: 28px;
         color: #fff;
         text-align: center;
         margin: 10px 0 10px 0;
         background-image: linear-gradient(270deg, #FC7F61 0%, #F06258 100%);
     } 
     .list{
         width: 100%;
         height: 48px;
         background: #fff;
         margin-bottom: 5px;
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 0 20px;
         box-sizing: border-box;
          p{
              span{
                  display: block;
                  margin-top: 2px;
              }
          }
          .sum{
              color: #F06258;
          }
     }  
}
</style>

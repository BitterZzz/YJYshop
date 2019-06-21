<template>
    <div id="balance">
         <h1>900.00</h1>
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
                  {id:1,cont:'消费',time:'2018-5-10  12:30',sum:'+0.05'},
                  {id:2,cont:'佣金输入',time:'2018-5-10  7:46',sum:'-0.02'},
                  {id:3,cont:'消费',time:'2018-5-10 10:12',sum:'+0.05'},
              ]
         }
      },
}
</script>

<style lang="scss" scoped>
 #balance{
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
                  color: #5a5858;
              }
          }
          .sum{
              color: #F06258;
          }
     }  
}
</style>

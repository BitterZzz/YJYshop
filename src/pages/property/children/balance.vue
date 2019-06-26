<template>
    <div id="balance">
         <h1>{{balance}}</h1>
            <div class="list" v-for="item in balaList" :key="item.id">
                <p>
                    <span>{{item.sourceTypeDescription}}</span>
                    <span>{{item.createTime}}</span>
                </p>
                <p class="sum">{{item.amount}}</p>
         </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
      name:'',
      data(){
         return{
              balaList:[],
              balance:"",
         }
      },
      methods:{
          balanData(){
              Axios.get("http://192.168.1.24:8080/gateway/mobileMemberCenterService/memberCenter/getUserCapital",{
                  headers:{
                      Authorization:localStorage.token
                  }
              }).then(res=>{
                  let data = res.data.data
                  this.balance = data.balance
                  console.log(this.balance)
                  this.balaList = data.capitalDetails.map(item=>{
                        return{
                          sourceTypeDescription:item.sourceTypeDescription,
                          createTime:item.createTime,
                          amount:item.amount
                       }
                  })
          
                  console.log(data)
              })
          }
      },
      created(){
          this.balanData();
      }
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

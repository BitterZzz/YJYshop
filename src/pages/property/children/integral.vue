<template>
    <div id="itergral">
         <h1>{{integral}}</h1>
         <div class="list" v-for="item in interList" :key="item.id">
            <p>
                <span>{{item.typeIdDescription}}</span>
                <span>{{item.recordDate}}</span>
            </p>
            <p class="sum">{{item.integral}}</p>
         </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
      name:'intergral',
      data(){
         return{
              interList:[],
              integral:"",
         }
      },
            methods:{
          interData(){
              Axios.get("http://192.168.1.24:8080/gateway/mobileMemberCenterService/memberCenter/getUserIntegral",{
                  headers:{
                      Authorization:localStorage.token
                  }
              }).then(res=>{
                  let data = res.data.data
                  this.integral = data.availableIntegrals
                  console.log(this.integral)
                  this.interList = data.integralRecords.map(item=>{
                        return{
                          typeIdDescription:item.typeIdDescription,
                          recordDate:item.recordDate,
                          integral:item.integral
                       }
                  })
          
                  console.log(data)
              })
          }
      },
      created(){
          this.interData();
      }
      
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

<template>
    <div id="coupon" class="page" style="height:100%;">
        <div class="Nav">
            <ul>
                <li v-for="(item,index) in list" :key="index"
                :options="{activeColor: '#b4282d'}"
                 >
                    <router-link :to="item.path">
                       <a href="#">{{item.name}}()</a>
                    </router-link>
                </li>
             </ul>
        </div>
        

        <suspend></suspend>
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
           list:[
               {id:1,name:'未使用',path:'/mobile/unUsed'},
               {id:2,name:'已使用',path:'/mobile/use'},
               {id:3,name:'已过期',path:'/mobile/pustDue'}
           ],
       }
    },
    methods: {
       
       
    },
}
</script>

<style lang="scss" scoped>
#coupon{
     position: fixed;
     background: #f7f7f7;
     width: 100%;
     height: 100%;
    .van-ellipsis{
        font-weight:800;
        font-size: 18px;
        color: #333333;
        letter-spacing: -0.43px;
    }
   .van-icon-arrow-left{
       color: #4A4A4A;
       font-size: 18px;
   }
   .Nav{
            height: 40px;
            background-color: #ffffff;
            border-bottom: 1px solid #cdcdcd;
             ul{
                 display: flex;
                 justify-content: space-around;
                 align-items: center;  
                 height: 40px;
                 
                    li{
                        font-size: 16px;
                        width: 70px;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        a{
                             color: #666666
                        }
                    }
                   
             }
        }
  
}
</style>


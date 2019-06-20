<template>
    <div id="coupon" class="page">
         <van-nav-bar
            title="我的优惠券"
            left-arrow
            @click-left="onClickLeft"
            />
        <div class="Nav">
             <li v-for="item in list" :key="item">
                 <router-link :to="item.path">
                     
                    {{item.name}}
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
           list:[
               {name:'未使用',path:'/unUsed'},
               {name:'已使用',path:'/use'},
               {name:'已过期',path:'/pustDue'}
           ],
       }
    },
    methods: {
        onClickLeft() {
          this.$router.back()
        },
       
    },
}
</script>

<style lang="scss" scoped>
#coupon{
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
            background-color: red;
            display: flex;
            justify-content: space-around;
            align-items: center;
              li{
                  font-size: 16px;
              }
        }
  
}
</style>


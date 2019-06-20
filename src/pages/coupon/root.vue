<template>
    <div id="coupon" class="page">
         <van-nav-bar
            title="我的优惠券"
            left-arrow
            @click-left="onClickLeft"
            />
        <div class="Nav">
            <ul>
                <li v-for="item in list" :key="item"
                 >
                    <router-link :to="item.path">
                       <a href="#">{{item.name}}()</a>
                    </router-link>
                </li>
             </ul>
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
               {name:'未使用',path:'/mobile/unUsed'},
               {name:'已使用',path:'/mobile/use'},
               {name:'已过期',path:'/mobile/pustDue'}
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
html,body{
    height: 100%;
    padding: 0;
    margin: 0;
}
#coupon{
     background: #cdcdcd;
     flex: 1;
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
            // background-color: red;
            border-top: 1px solid #cdcdcd;
            border-bottom: 1px solid #cdcdcd;
             ul{
                 display: flex;
                 justify-content: space-around;
                 align-items: center;  
                 height: 40px;
                    li{
                        font-size: 16px;
                        a{
                             color: #666666
                        }
                    }
             }
        }
  
}
</style>


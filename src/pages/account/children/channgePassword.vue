<template>
    <div id="change">
        <p>当前用户账号:</p>
        <router-link tag="p" to="/mobile/formar">
           我记得原支付密码 <van-icon name="arrow"/>
        </router-link>
        <p>我忘记支付密码了 <van-icon name="arrow"/></p>
    
    
      <suspend></suspend>
    </div>
</template>

<script>
import suspend from '../../../components/suspend'
export default {
   components:{
       Suspend:suspend,
   }
}
</script>

<style lang="scss" scoped>
#change{
        // width: 100%;
        // height: 100%;
        // position: fixed;
        // background: #f5f5f5;
                p{
                    width: 100%;
                    height: 45px;
                    line-height: 45px;
                    background: #fff;
                    padding: 0 10px;
                    color: #333;
                    font-size: 13px;
                    box-sizing: border-box;
                    border-bottom: 1px solid #cdcdcd;
                     .van-icon{
                         float: right;
                         position: relative;
                         top: 16px;
                         font-size: 14px;
                     }
                }
}
</style>

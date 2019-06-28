<template>
    <div id="account">
         <div class="payment">
             <p>
                 支付密码
                 <br/><br/>
                 <span>建议定期修改密码以保护账户安全</span>
             </p>
             <van-icon name="arrow"/>
         </div>
         <div class="binding">
             <span>绑定手机</span>
             <i>已绑定 : 1346784512</i>
         </div>
         
         <div class="drop">
             退出当前账号
         </div>
         <suspend></suspend>
    </div>
</template>

<script>
import suspend from '../../components/suspend'
export default {
    name:'',
    components:{
        Suspend:suspend
    }

}
</script>

<style lang="scss" scoped>
#account{
     position: fixed;
     width: 100%;
     height: 100%;
     background-color: #f5f5f5;
        .payment{
            width: 100%;
            height: 69px;
            padding: 0 10px;
            box-sizing: border-box;
            background: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #cdcdcd;
              p{
                  padding: 10px 0;
                  box-sizing: border-box;
                  font-size: 13px;
                    span{
                            font-size: 12px;
                            color: #999;
                    }
              }
              .van-icon{
                      color: #999;
                      font-size: 14px;
              }
        }
        .binding{
            width: 100%;
            height: 45px;
            padding: 0 10px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            background: #fff;
            border-bottom: 1px solid #cdcdcd;
             span{
                 font-size: 13px;
                 margin-right: 25px;
             }
             i{
                 font-size: 10px;
                 color: #d9534f;
             }
        }
        .drop{
            width: 100%;
            height: 50px;
            padding: 0 10px;
            box-sizing: border-box;
            line-height: 50px;
            background: #fff;
            margin-top:10px;
            border-top: 1px solid #cdcdcd;
            border-bottom: 1px solid #cdcdcd;
        }
}
</style>

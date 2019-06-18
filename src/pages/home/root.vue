<template>
    <div id="home" class="page login">
           <div class="login-bd">
               <div class="login-input-group">
                   <div class="input-item flex-center">
                          <input type="text" name="" id="username" class="form-control" placeholder="请输入用户名/手机号">
                   </div>
                   <div class="input-item flex-center">
                        <input type="password" name="" id="password"  class="form-control" placeholder="密码">
                        <a href="#" class="auth-code">获取验证码</a>
                   </div>
                   <a id="loginBtn" class="flex-center">登录</a>
               </div>
           </div>
           <div class="login-ft" id="wxlogin">
               <div class="trus"> 
                 <span>使用微信一键登录</span>
               </div>
               <a href="#"><img src="" alt="" srcset="">微信图标</a>
           </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#home{

     .login-bd{
         width: 345px;
         height: 85px;
       
         box-sizing: border-box;
         border: 1px solid red;
          .login-input-group{
               .input-item{
                    #username{
                        padding: 6px 12px;
                        width: 322px;
                        height: 42px;
                        font-size: 14px;
                        box-sizing: border-box;
                    }
                    #password{
                        width: 254px;
                        height: 42px;
                        font-size: 14px;
                        padding: 6px 12px;
                        box-sizing: border-box;
                    }
               }
          }
     }
}
</style>

<template>
  <div id="home" class="page login">
    <div class="login-bd">
      <div class="login-input-group">
        <div class="login-input-group-box">
          <div class="input-item flex-center">
            <input type="text" name id="username" class="form-control" placeholder="请输入用户名/手机号">
          </div>
          <div class="input-item flex-center">
            <input type="password" name id="password" class="form-control" placeholder="密码">
            <a href="#" class="auth-code">获取验证码</a>
          </div>
        </div>
        <div class="loginBtn-box">
          <a id="loginBtn" class="flex-center">登录</a>
        </div>
      </div>
    </div>
    <div class="login-ft" id="wxlogin">
      <div class="trus">
        <i class="trus-line"></i>
        <span class="trus-title">使用微信一键登录</span>
      </div>
      <a href="#" class="iconic">
        <img src="##">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"home",
  data(){
    
  }
};
</script>

<style lang="scss" scoped>
#home {
  .login-bd {
    width: 345px;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 90px;
    .login-input-group {
      .login-input-group-box {
        box-sizing: border-box;
        width: 100%;
        box-shadow: 0px 3px 4px rgba(137, 148, 155, 0.2),
          0px 0px 4px rgba(234, 234, 234, 0.6);
        padding: 0 12px;
        .input-item {
          position: relative;
          #username {
            width: 100%;
            height: 42px;
            font-size: 14px;
            box-sizing: border-box;
            border: 0;
            border-bottom: solid 1px #b9b9b9;
          }
          #password {
            width: 100%;
            height: 42px;
            font-size: 14px;
            box-sizing: border-box;
            border: 0;
          }
          .auth-code {
            position: absolute;
            right: 6px;
            top: 16px;
            color: #b9b9b9;
          }
        }
      }
      .loginBtn-box {
        display: block;
        width: 100%;
        height: 42px;
        text-align: center;
        line-height: 42px;
        background: #d50014;
        color: #ffffff;
        margin-top: 28px;
      }
    }
  }
  .login-ft{
    height: 100px;
    text-align: center;
    .trus{
      position: relative;
      .trus-line{
        display: block;
        width: 172px;
        height: 1px;
        background: #b9b9b9;
        margin: 0 auto;
        margin-top: 30px;        
      }
      .trus-title{
        position: absolute;
        width: 106px;
        text-align: center;
        background-color: #ffffff;
        left: 138px;
        top: -8px;
      }
    }
      .iconic{
      display:inline-block; 
      width: 20px;
      height: 20px;
      background: red;
      margin-top: 20px;
    }
  }
}
</style>

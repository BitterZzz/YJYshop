<template>
  <div id="home" class="page login">
    <div class="login-bd">
      <div class="login-input-group">
        <div class="login-input-group-box">
          <div class="input-item flex-center">
            <input type="text" name id="username" class="form-control" placeholder="请输入手机号">
          </div>
          <div class="input-item flex-center">
            <input type="password" id="password" class="form-control" placeholder="请输入验证码">
            <input type="button" class="auth-code" value="获取验证码" @click="countDown()">
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
    <!-- <div class="error">
      
    </div> -->
  </div>
</template>

<script>
import Axios from 'axios';
import wx from 'weixin-js-sdk';
export default {
  name:"home",
  data(){
    return{

    }
  },
  methods:{
    getWeixin(){
      Axios.get()
    },
    //倒计时
    countDown(){
      let val = document.querySelector('.auth-code');
      let countdown = 60;
      let settime = function(val){
        var stime = setTimeout(
          function(){
            settime(val)
          },1000
        )
        if(countdown === 0){
          val.value = "发送验证码";
          countdown = 60;
          clearTimeout(settime);
          settime = null;
        }else{
          val.value = "重新发送("+ countdown + ")";
          countdown--;
        }
      }
      settime(val)
    },
    //登录注册验证
    register(){
      let phoneInput = document.querySelector('#username');
      let pwdInput = document.querySelector('#password');
      let errorInput = document.querySelector('.error')
      let _userVerity = /^[1][3,4,5,7,8][0-9]{9}$/;
      let _pwdVerity = /^[0-9]{4}$/;
      if(phoneInput.value === '' || pwdInput.value === ''){
        this.showToast();
        return;
      }else{
        if(_userVerity.test(phoneInput.value) && _pwdVerity.test(pwdInput.value)){
        }
          alert('用户名或密码不正确')
      }
    },
    showToast(){
      this.$toast('1111')
    }
  },
  created(){
    
  },
  mounted(){
    let that = this
    function button(){
      let btn =  document.querySelector('#loginBtn');
      btn.onmousedown = function(){
        function autoFocus(){
          that.register();
        }
        autoFocus();
      }
    }
    button();
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
          cursor: pointer;
          #username {
            width: 100%;
            height: 42px;
            font-size: 14px;
            box-sizing: border-box;
            border: 0;
            border-bottom: solid 1px #b9b9b9;
            cursor: pointer;
          }
          #password {
            cursor: pointer;            
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
            border: 0;
            background: #ffffff;
            cursor: pointer;
          }
        }
      }
      .loginBtn-box {
        display: block;
        cursor: pointer;
        width: 100%;
        height: 42px;
        text-align: center;
        line-height: 42px;
        background: #d50014;
        color: #ffffff;
        margin-top: 28px;
        #loginBtn{
          display: block;
          width: 100%;
          height: 42px;
        }
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
  .error{
    position: absolute;
    display: block;
    width: 100px;
    height: 100px;
    line-height: 100px;
    color: #ffffff;
    background: #454545;
    opacity: 0.5;
    text-align: center;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -150px;
  }
}
</style>

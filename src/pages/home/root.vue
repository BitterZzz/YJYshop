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
          <div to="" id="loginBtn" class="flex-center" @click="toIndex()">登录</div>
        </div>
      </div>
    </div>
    <div class="login-ft" id="wxlogin">
      <div class="trus">
        <i class="trus-line"></i>
        <span class="trus-title">使用微信一键登录</span>
      </div>
      <a href="#" class="iconic">
        <img src="https://www.eg-live.com/Areas/Mobile/Templates/Default/Images/icon-weixin-trust.png">
      </a>
    </div>
    <suspend></suspend>
  </div>
</template>

<script>
import suspend from '../../components/suspend'
import Axios from 'axios';
import wx from 'weixin-js-sdk';
export default {
  name:"home",
  components:{
    Suspend:suspend,
  },
  data(){
    return{
      value: 0,
      dom: {
      phoneInput : '',
      pwdInput : '',
      errorInput : '',
      _userVerity : '',
      _pwdVerity : ''
      },
      canClick: true,
    }
  },
  methods:{
    getWeixin(){
      Axios.get()
    },
    //倒计时
    countDown(){
      let val = document.querySelector('.auth-code');
      let countdown = 120;
      let _userVerity = this.dom._userVerity
      if(this.dom.phoneInput.value === ''){
        this.showToast("请输入手机号");
        return;
        if(_userVerity.test(this.dom.phoneInput.value)){
          
        }else{
          this.showToast("请输入正确手机号");
          return;
        }
        return;
      }
      let settime = function(val){
        var stime = setTimeout(
          function(){
            settime(val)
          },1000
        )
        if(countdown === 0){
          val.value = "发送验证码";
          countdown = 120;
          clearTimeout(settime);
          settime = null;
        }else{
          val.value = "重新发送("+ countdown + ")";
          countdown--;
        }
      }
      settime(val);
      this.authCode();
    },
    //发送请求发送登录验证码
    authCode(){
      Axios.get('http://192.168.1.24:8080/gateway/userEditService/userEdit/sendPhoneCode',{
        params:{
          phone:this.dom.phoneInput.value
        }
      }).then(res => {
        sessionStorage.setItem('code',res.data.code);
      })
    },
    //发送请求验证登录帐号与密码
    loginCheck(){
      Axios.get('http://192.168.1.24:8080/gateway/userInfoService/login/loginByCode',{
        params:{
          phone: this.dom.phoneInput.value,
          code:this.dom.pwdInput.value
         
        }
      }).then(res => {
        localStorage.setItem('token',res.data.data)
      })
    },
    
    //登录注册验证
    register(){
      let phoneInput = this.dom.phoneInput;
      let pwdInput = this.dom.pwdInput;
      let errorInput = this.dom.errorInput;
      let _userVerity = this.dom._userVerity;
      let _pwdVerity = this.dom._pwdVerity;
      if(phoneInput.value === '' || pwdInput.value === ''){
        let value = "用户名或密码为空"
        this.showToast(value);
        return false;
      }else{
        if(_userVerity.test(phoneInput.value) && _pwdVerity.test(pwdInput.value) ){
          let value = "验证正确";
          this.showToast(value);
          this.loginCheck();
          return true;
        }
          let value = "用户名或密码错误";
          this.showToast(value)
      }
    },
    showToast(value){
      this.$toast(value)
    },
    toIndex(){
      let phoneInput = this.dom.phoneInput;
      let pwdInput = this.dom.pwdInput;
      if(this.register()){
        if(localStorage.token){
          this.$router.replace('/mobile')
        }
      }
    }
  },
  created(){
    
  },
  mounted(){
    let that = this
    this.dom.phoneInput = document.querySelector('#username');
    this.dom.pwdInput = document.querySelector('#password');
    this.dom.errorInput = document.querySelector('.error')
    this.dom._userVerity = /^[1][3,4,5,7,8][0-9]{9}$/;
    this.dom._pwdVerity = /^[0-9]{6}$/;
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
        font-size: 16px;
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
        min-width: 106px;
        text-align: center;
        background-color: #ffffff;
        left: 127px;
        top: -8px;
        color:#494e52;
        padding: 0 5px;
        box-sizing: border-box;
        font-size: 14px;
      }
    }
      .iconic{
      display:inline-block; 
      width: 50px;
      height: 50px;
      margin-top: 20px;
      border-radius: 50%;
         img{
           width: 100%;
           height: 100%;
           background-size:cover;
           
         }
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

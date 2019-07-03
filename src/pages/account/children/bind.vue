<template>
  <div id="bind">
    <div class="bindPhone">
      <h4>手机绑定</h4>
      <input type="text" class="txt" id="username" placeholder="请输入手机号" />
      <router-link to="/mobile/bindPhone">
      <input type="button"  class="auth-code countDown" value="获取验证码" @click="countDown()">
      </router-link>
      <br />
      <input type="text" class="text" id="password" placeholder="请输入验证码" />
      <br />
      <button type="submit" class="btn" @click="binding()">立即绑定</button>
      <br />
      <span class="tips">提示：为了您的账户安全，请及时绑定手机</span>
    </div>

    <suspend></suspend>
  </div>
</template>

<script>
import Axios from "axios";
import suspend from "../../../components/suspend";
import { clearTimeout } from "timers";
import QS from 'qs'
import { debug } from 'util';
export default {
  name: "",
  components: {
    Suspend: suspend
  },
  data() {
    return {
      value: 0,
      dom: {
        phoneInput: "",
        pwdInput: "",
        _userVerity: "",
        _pwdVerity: "",
      }
    };
  },
  methods: {
    // 倒计时
    countDown() {
      let val = document.querySelector(".countDown");
      let countdown = 60;
      let _userVerity = this.dom._userVerity;
      if (this.dom.phoneInput.value === "") {
        this.showToast("请输入手机号");
        return;
        if (_userVerity.test(this.dom.phoneInput.value)) {
        } else {
          this.showToast("请输入正确手机号");
          return;
        }
        return;
      }
      let settime = function(val) {
        var stime = setTimeout(function() {
          settime(val);
        }, 1000);
        if (countdown === 0) {
        //   debugger;
          val.removeAttribute("disabled");
          val.value = "发送验证码";
          countdown = 60;
          settime = null;
          clearTimeout(settime);
        } else {
          val.setAttribute("disabled", true);
          val.value = "重新发送(" + countdown + ")";
          countdown--;
        }
      };
      settime(val);
      this.authCode()
    },
     authCode(){
       Axios.get("http://192.168.1.24:8080/gateway/userEditService/userEdit/sendPhoneCode",{
           params:{
               phone:this.dom.phoneInput.value
           }
       }).then(res=>{
           
           console.log(res.data)
       })
     },
    // 立即绑定
     trigger(){
       Axios.post("http://192.168.1.24:8080/gateway/userEditService/userEdit/bindPhone",
         QS.stringify({
             phone:this.dom.phoneInput.value,
             code:this.dom.pwdInput.value
         }),
         {
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:localStorage.token
            }
         }
       ).then(res=>{
           localStorage.setItem("bindPhone", this.dom.phoneInput.value);
           console.log(localStorage.code)
       })
     },
     binding(){
       let phoneInput = this.dom.phoneInput;
       let pwdInput = this.dom.pwdInput;
       let errorInput = this.dom.errorInput;
       let _userVerity = this.dom._userVerity;
       let _pwdVerity = this.dom._pwdVerity;
       let that = this;
      if (phoneInput.value === "" || pwdInput.value === "") {
        let value = "用户名或密码为空";
        this.showToast(value);
        return;
      } else {
        if (
          _userVerity.test(phoneInput.value) &&
          _pwdVerity.test(pwdInput.value) &&
          sessionStorage.code === "0"
        ) {
          this.trigger();
          if (sessionStorage.code === "0") {
            let value = "验证正确";
            that.showToast(value);
            var clearset = setInterval(() => {that.$router.push("/mobile/account")},2000);
            setInterval(() => {clearInterval(clearset)},2100);
            return
          }
          return true;
        }
        let value = "用户名或密码错误";
        this.showToast(value);
      }
     },
     showToast(value) {
      this.$toast(value);
    }
  },
  mounted() {
    let that = this;
    this.dom.phoneInput = document.querySelector("#username");
    this.dom.pwdInput = document.querySelector("#password");
    this.dom._userVerity = /^[1][3,4,5,7,8][0-9]{9}$/;
    this.dom._pwdVerity = /^[0-9]{6}$/;
  }
};
</script>

<style lang="scss" scoped>
#bind {
  background: #ffffff;
  height: 100%;
  width: 100%;
  position: fixed;
  .bindPhone {
    width: 331px;
    height: 242px;
    margin-top: 45px;
    margin: 45px auto;

    h4 {
      width: 100%;
      text-align: center;
      font-size: 19px;
      line-height: 50px;
    }
    .txt {
      width: 238px;
      height: 40px;
      border: 1px solid #ccc;
      border-right: none;
      float: left;
      margin-bottom: 15px;
      padding-left: 10px;
      box-sizing: border-box;
      font-size: 12px;
      color: #666;
    }
    .countDown {
      display: block;
      width: 92px;
      float: left;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border: 1px solid #cccccc;
      border-left: none;
      background: #999;
      color: #fff;
    }
    .text {
      width: 330px;
      height: 40px;
      border: 1px solid #cccccc;
      margin-bottom: 15px;
      padding-left: 10px;
      box-sizing: border-box;
      font-size: 12px;
      color: #666;
    }
    button {
      width: 330px;
      height: 40px;
      border: 1px solid #ccc;
      margin-bottom: 15px;
      background: #f0ad4e;
      color: #fff;
      font-size: 14px;
    }
    span {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>

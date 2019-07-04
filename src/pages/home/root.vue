<template>
  <div id="home" class="page login">
    <div class="login-bd">
      <div class="login-input-group">
        <div class="login-input-group-box">
          <div class="input-item flex-center">
            <input type="text" name id="username" class="form-control" placeholder="请输入手机号" />
          </div>
          <div class="input-item flex-center">
            <input
              type="password"
              id="password"
              class="form-control"
              placeholder="请输入验证码"
              autocomplete="off"
            />
            <input type="button" class="auth-code" value="获取验证码" @click="countDown()" />
          </div>
        </div>
        <div class="loginBtn-box">
          <div to id="loginBtn" class="flex-center" @click="register()">登录</div>
        </div>
      </div>
    </div>
    <div class="login-ft" id="wxlogin">
      <div class="trus">
        <i class="trus-line"></i>
        <span class="trus-title">使用微信一键登录</span>
      </div>
      <a href="#" class="iconic">
        <img
          src="https://www.eg-live.com/Areas/Mobile/Templates/Default/Images/icon-weixin-trust.png"
          @click="wxLogin()"
        />
      </a>
    </div>
    <suspend></suspend>
  </div>
</template>

<script>
import suspend from "../../components/suspend";
import Axios from "axios";
import wx from "weixin-js-sdk";
export default {
  name: "home",
  components: {
    Suspend: suspend
  },
  data() {
    return {
      value: 0,
      dom: {
        phoneInput: "",
        pwdInput: "",
        errorInput: "",
        _userVerity: "",
        _pwdVerity: "",
        _wxLogin: ""
      },
      canClick: true,
      code: "",
      browser: {
        versions: (function() {
          var u = navigator.userAgent,
            app = navigator.appVersion;
          return {
            //移动终端浏览器版本信息
            trident: u.indexOf("Trident") > -1, //IE内核
            presto: u.indexOf("Presto") > -1, //opera内核
            webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
            gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或uc浏览器
            iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf("iPad") > -1, //是否iPad
            webApp: u.indexOf("Safari") == -1 //是否web应该程序，没有头部与底部
          };
        })(),
        language: (
          navigator.browserLanguage || navigator.language
        ).toLowerCase()
      }
    };
  },
  methods: {
    getWeixin() {
      Axios.get();
    },
    //倒计时
    countDown() {
      let val = document.querySelector(".auth-code");
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
          val.removeAttribute("disabled");
          val.value = "发送验证码";
          countdown = 60;
          clearTimeout(settime);
          settime = null;
        } else {
          val.setAttribute("disabled", true);
          val.value = "重新发送(" + countdown + ")";
          countdown--;
        }
      };
      settime(val);
      this.authCode();
    },
    //发送请求发送登录验证码
    authCode() {
      Axios.get(
        "http://192.168.1.24:8080/gateway/userEditService/userEdit/sendPhoneCode",
        {
          params: {
            phone: this.dom.phoneInput.value
          }
        }
      ).then(res => {
        localStorage.setItem("code", res.data.code);
        console.log(res.data);
      });
    },
    //发送请求验证登录帐号与密码
    loginCheck() {
      Axios.get(
        "http://192.168.1.24:8080/gateway/userInfoService/login/loginByCode",
        {
          params: {
            phone: this.dom.phoneInput.value,
            code: this.dom.pwdInput.value
          }
        }
      ).then(res => {
        localStorage.setItem("code2", res.data.code);
        localStorage.setItem("token", res.data.data);
        console.log(res);
      });
    },

    //登录注册验证
    register() {
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
          localStorage.code === "0"
        ) {
          this.loginCheck();
          if (localStorage.code2 === "0") {
            let value = "验证正确";
            that.showToast(value);
            var clearset = setInterval(() => {
              that.$router.replace("/mobile");
            }, 2000);
            setInterval(() => {
              clearInterval(clearset);
            }, 2100);
          } else {
            let value = "验证码错误";
            that.showToast(value);
          }
        }
        let value = "用户名或密码错误";
        this.showToast(value);
      }
    },
    showToast(value) {
      this.$toast(value);
    },
    //判断是否获取微信code
    wxCodeJudge(queryName) {
      var str = location.href; //取得整个地址栏
      queryName = queryName;
      if (str.indexOf("?") > -1) {
        var queryParam = str.substring(str.indexOf("?") + 1);
        //如果有多个参数
        //if (queryParam.indexOf("&") > -1)
        var param = queryParam.split("&");
        for (var a = 0; a < param.length; a++) {
          var query = param[a].split("=");
          if (query[0].toLowerCase() == queryName.toLowerCase()) {
            return query[1];
          }
        }
      }
      return "";
    },
    //点击微信登录
    wxLogin() {
      if (this.browser.versions.mobile) {
        var ua = navigator.userAgent.toLowerCase();
        console.log(navigator.userAgent);
        let _wxLogin = document.querySelector("#wxlogin");
        // if (ua.match(/MicroMessenger/i) === 'micromessenger') {
        // _wxLogin.style.display = "none";
        this.code = this.wxCodeJudge("code");
        if (this.code === "" || this.code === null) {
          var href = location.href;
          if (href.indexOf("#") > -1) {
            href = href.split("#").join("%23");
          }
          var url =
            "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5a40afc5faa6acff&redirect_uri=" +
            href +
            "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
          location.href = url; //指定跳转授权页面
        } else {
          Axios.get(
            "http://192.168.1.24:8130/gateway/userInfoService/login/wxLoginH5",
            {
              params: {
                code: this.code,
                appSecretId: 1
              }
            }
          )
            .then(res => {
              alert(res);
            })
            .catch(err => {
              alert(err);
            });
        }
        // } else {
        //   _wxLogin.style.display = 'block';
        // }
      }
    }
  },
  created() {},
  mounted() {
    let that = this;
    this.dom.phoneInput = document.querySelector("#username");
    this.dom.pwdInput = document.querySelector("#password");
    this.dom.errorInput = document.querySelector(".error");
    this.dom._userVerity = /^[1][3,4,5,7,8][0-9]{9}$/;
    this.dom._pwdVerity = /^[0-9]{6}$/;
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
        background-color: #ffffff;
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
        #loginBtn {
          display: block;
          width: 100%;
          height: 42px;
        }
      }
    }
  }
  .login-ft {
    height: 100px;
    text-align: center;
    .trus {
      position: relative;
      width: 100%;
      .trus-line {
        display: block;
        width: 172px;
        height: 1px;
        background: #b9b9b9;
        margin: 0 auto;
        margin-top: 30px;
      }
      .trus-title {
        position: relative;
        min-width: 106px;
        text-align: center;
        background-color: #f7f7f7;
        // left: 127px;
        top: -9px;
        color: #494e52;
        padding: 0 5px;
        box-sizing: border-box;
        font-size: 14px;
      }
    }
    .iconic {
      display: inline-block;
      width: 50px;
      height: 50px;
      margin-top: 20px;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        background-size: cover;
      }
    }
  }
}
</style>

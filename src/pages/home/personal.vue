<template>
  <div id="personal" class="page center">
    <div class="header">
      <div class="portrait">
        <img src alt srcset>
        <div class="border"></div>
      </div>
      <p>{{this.telephone}}</p>
    </div>
    <div class="order-form">
      <li class="orderSee">
        <h5>全部订单</h5>
        <span>
          查看全部订单
          <van-icon name="arrow"/>
        </span>
      </li>
      <li class="orderList" >
        <a href="#" class="payment">
          <p class="icon"></p>
          <span>待付款</span>
          <i>{{ordersData.waitingPayCount}}</i>
        </a>
        <a href="#" class="shipments">
          <p class="icon icon1"></p>
          <span>代发货</span>
          <i>{{ordersData.waitingDeliveryCount}}</i>
        </a>
        <a href="#" class="delivery">
          <p class="icon icon2"></p>
          <span>待收货</span>
          <i>{{ordersData.waitingRecieveCount}}</i>
        </a>
        <a href="#" class="evaluate">
          <p class="icon icon3"></p>
          <span>待评价</span>
          <i>{{ordersData.waitingCommentCount}}</i>
        </a>
        <a href="#" class="refund">
          <p class="icon icon4"></p>
          <span>退款/售后</span>
          <i>{{ordersData.refundOrdersCount}}</i>
        </a>
      </li>
    </div>
    <div class="meum">
      <router-link to="/mobile/coupon">
        <li class="meum-roll meu">
          <a href="#">
            <em></em>
            <span>我的优惠卷</span>
            <van-icon name="arrow"/>
          </a>
        </li>
      </router-link>
      <router-link to="/mobile/property">
        <li class="meum-asset meu">
          <a href="#">
            <em class="eicon1"></em>
            <span>我的资产</span>
            <van-icon name="arrow"/>
          </a>
        </li>
      </router-link>
      <router-link to="/mobile/collect">
        <li class="meum-collect meu">
          <a href="#">
            <em class="eicon2"></em>
            <span>我的收藏</span>
            <van-icon name="arrow"/>
          </a>
        </li>
      </router-link>
    </div>
    <div class="manage">
      <li class="manage-take">
        <a href="#">
          <em class="takeIcon"></em>
          <span>收货地址管理</span>
          <van-icon name="arrow"/>
        </a>
      </li>
      <li class="manage-ID">
        <a href="#">
          <em class="IDIcon"></em>
          <span>账号管理</span>
          <van-icon name="arrow"/>
        </a>
      </li>
    </div>
    <div class="footer"></div>
    <suspend></suspend>
    <router-view></router-view>
    
  </div>
</template>

<script>
import Axios from "axios";
import suspend from "../../components/suspend";
import { constants } from 'crypto';
export default {
  name: "personal",
  components: {
    Suspend: suspend
  },
  data() {
    return {
      photogory: [],
      tokengory: [],
      telephone:sessionStorage.getItem('telephone'),
      ordersData:''
    };
  },
  methods: {
    getToken() {
      Axios.get(
        "http://192.168.1.24:8080/gateway/userInfoService/userInfo/getUserBaseInfo",
        {
          headers: {
            Authorization: localStorage.token
          }
        }
      ).then(res => {
        sessionStorage.setItem('telephone', res.data.data.userName);
      });
    },
    getOrdersCount(){
       Axios.get("http://192.168.1.24:8080/gateway/mobileMemberCenterService/memberCenter/getUserOrdersCount",{
         params:{
          egshopUserId:1797
         }
       }).then(res=>{
         this.ordersData = res.data.data
       })
    }
  },
  created() {
    if(localStorage.token !== 'null' && localStorage.token){
      this.getToken();
      this.getOrdersCount();
    }
  },
};
</script>

<style lang="scss" scoped>
#personal {
  background: #cdcdcd;
  padding-top: 11px;
  box-sizing: border-box;
  overflow: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
  .header {
    width: 93.125%;
    height: 182px;
    background-color: #e3393c;
    border-radius: 4px;
    margin: 0 auto;
    color: #fff;
    box-sizing: border-box;
    margin-bottom: 11px;
    padding-top: 30px;
    .portrait {
      z-index: 1;
      width: 79px;
      height: 79px;
      border-radius: 50%;
      border: 0px;
      margin-right: auto;
      margin-bottom: 10px;
      margin-left: auto;
      background-color: #fff;
      position: relative;
      .border {
        border: 2px solid #e3393c;
        position: absolute;
        width: 70px;
        height: 70px;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
        border-radius: 50%;
      }
    }
    p {
      text-align: center;
      margin-top: 15px;
      font-size: 18px;
    }
  }
  .order-form {
    width: 100%;
    height: 104px;
    background: #fff;
    padding-left: 10px;
    box-sizing: border-box;
    .orderSee {
      height: 47px;
      margin-left: 10px;
      padding-right: 10px;
      border-bottom: 1px solid #e9e9ea;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      h5 {
        margin: 0;
        font-size: 14px;
        color: #14181b;
      }
      span {
        font-size: 12px;
        color: #aeaeae;
        margin-right: 20px;
        float: right;

        .van-icon {
          position: absolute;
          font-size: 14px;
          right: 9px;
          top: 17px;

          color: #2a2a2e;
        }
      }
    }
    .orderList {
      height: 57px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .refund i{
         display: block;
            width: 16px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            border-radius: 50%;
            background: #e3393c;
            position: absolute;
            color: #fff;
            right: -2px;
            top: -3px;
      }
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        .icon {
          width: 20px;
          height: 20px;
          background: url(../../assets/img/login-icon1.png);
          background-size: cover;
        }
        span {
          display: block;
          text-align: center;
          color: #47474a;
          margin-top: 4px;
        }
        i{
            display: block;
            width: 16px;
            height: 16px;
            line-height: 16px;
            font-size: 6px;
            text-align: center;
            border-radius: 50%;
            background: #e3393c;
            position: absolute;
            color: #fff;
            right: -8px;
            top: -5px;
        }
        .icon1 {
          background: url(../../assets/img/login-icon1.png) 0 -20px;
          background-size: cover;
        }
        .icon2 {
          background: url(../../assets/img/login-icon1.png) 0 -120px;
          background-size: cover;
        }
        .icon3 {
          background: url(../../assets/img/login-icon1.png) 0 -40px;
          background-size: cover;
        }
        .icon4 {
          background: url(../../assets/img/login-icon1.png) 0 -242px;
          background-size: cover;
        }
      }
    }
  }
  .meum {
    width: 100%;
    height: 162px;
    background: #fff;
    margin-top: 10px;
    padding: 0 10px;
    box-sizing: border-box;
    .meu {
      height: 54px;
      line-height: 54px;
      span {
        color: #2a2a2e;
        font-size: 13px;
      }
      .van-icon {
        float: right;
        line-height: 54px;
        font-size: 14px;
      }
      em {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(../../assets/img/login-icon1.png);
        background-size: cover;
        position: relative;
        top: 7px;
        margin: 0 10px 0 6px;
      }
      .eicon1 {
        background: url(../../assets/img/login-icon1.png) 0 -100px;
        background-size: cover;
      }
      .eicon2 {
        background: url(../../assets/img/login-icon1.png) 0 -180px;
        background-size: cover;
      }
    }
    .meum-roll {
      border-bottom: 1px solid #e9e9ea;
    }
    .meum-asset {
      border-bottom: 1px solid #e9e9ea;
    }
  }
  .manage {
    width: 100%;
    height: 108px;
    background: #fff;
    margin-top: 10px;
    padding: 0 10px;
    box-sizing: border-box;
    li {
      height: 54px;
      line-height: 54px;
      span {
        color: #2a2a2e;
        font-size: 13px;
      }
      .van-icon {
        float: right;
        line-height: 54px;
        font-size: 14px;
      }
      em {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(../../assets/img/login-icon1.png);
        background-size: cover;
        position: relative;
        top: 7px;
        margin: 0 10px 0 6px;
      }
      .takeIcon {
        background: url(../../assets/img/login-icon1.png) 0 -200px;
        background-size: cover;
      }
      .IDIcon {
        background: url(../../assets/img/login-icon1.png) 0 -220px;
        background-size: cover;
      }
    }
    .manage-take {
      border-bottom: 1px solid #e9e9ea;
    }
  }
  .footer {
    display: flex;
    flex: 1;
    margin-top: 10px;
    background: #cdcdcd;
  }
}
</style>

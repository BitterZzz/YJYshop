<template>
  <div id="use" class="page">
    <div v-for="item in list" :key="item.id" class="use-box">
      <ul class="box-left">
        <li>
          ￥
          <span>{{item.price}}</span>
        </li>
        <p>满{{item.orderAmount}}元可用</p>
      </ul>
      <ul class="box-right">
        <em>活动标签</em>
        <p>{{item.couponName}}</p>
        <span>有限期至{{item.endTime}}</span>
        <a href="#"></a>
      </ul>
    </div>
    <div class="emit">
      <p>暂无优惠卷</p>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "",
  data() {
    return {
      list: []
    };
  },
  methods: {
    useData() {
      Axios.get(
        "http://192.168.1.24:8080/gateway/mobileMemberCenterService/memberCenter/getAllUserCoupon",
        {
          headers: {
            Authorization:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTYxMzU3NzYzLCJleHAiOjE1NjE0NDQxNjN9.4w4MFRgcSpNl4EbtL9UuzPKi7M-wEdTqRgBAMth5x5tYX3Se6E6bctHK1tWgPkVTcqmhPtuM1uziEe-oOZ7KBg"
          }
        }
      ).then(res => {
        let data = res.data.data;
        this.list = data.usedCoupons.map(item => {
          return {
            price: item.price,
            orderAmount: item.orderAmount,
            couponName: item.couponName,
            endTime: item.endTime
          };
        });
      });
    }
  },
  created() {
    this.useData();
  }
};
</script>

<style lang="scss" scoped>
#use {
  .use-box {
    margin: 10px 15px;
    display: flex;
    background: url(../../../assets/img/grayBg.png) no-repeat;
    background-size: cover;
    .box-left {
      width: 125px;
      height: 100px;

      li {
        color: #fff;
        padding-top: 15px;
        width: 100%;
        text-align: center;
        font-size: 18px;
        span {
          font-size: 42px;
          letter-spacing: -1.01px;
          line-height: 42px;
          text-align: center;
        }
      }
      p {
        width: 100%;
        font-size: 12px;
        line-height: 20px;
        padding-top: 10px;
        text-align: center;
        letter-spacing: 1.51px;
        color: #fff;
      }
    }
    .box-right {
      width: 219px;
      height: 100px;
      padding: 15px 10px;
      box-sizing: border-box;
      position: relative;
      em {
        display: block;
        font-size: 6px;
        height: 17px;
        line-height: 17px;
        text-align: center;
        color: #fff;
        background: #cccccc;
        width: 60px;
        border-radius: 25px;
        margin-bottom: 10px;
      }
      p {
        font-size: 14px;
        color: #333333;
        line-height: 14px;
        font-weight: 400;
        margin-bottom: 15px;
      }
      span {
        display: block;
        color: #999;
        margin: 0;
        line-height: 20px;
        font-size: 10px;
      }
      a {
        position: absolute;
        display: block;
        width: 60px;
        height: 64px;
        background: url(../../../assets/img/use.png) no-repeat;
        background-size: cover;
        right: 0px;
        top: 0px;
      }
    }
  }
  .emit{
    position: absolute;
    left: 50%;
    top: 50%;
  }
}
</style>


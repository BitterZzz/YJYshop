<template>
  <div id="pust" class="page">
    <div v-for="item in list" :key="item.id" class="pust-box">
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
    <div class="empty">
            <p>
              <img src="../../../assets/img/pustLogo.png" alt="">
            </p>
            <span>
               还没有优惠券哦
            </span>
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
    pustData() {
      Axios.get(
        "http://192.168.1.24:8080/gateway/mobileMemberCenterService/memberCenter/getAllUserCoupon",
        {
          headers: {
            Authorization: localStorage.token
          }
        }
      ).then(res => {
        let data = res.data.data;
        this.list = data.expiredCoupons.map(item => {
          return {
            price: item.price,
            orderAmount: item.orderAmount,
            couponName: item.couponName,
            endTime: item.endTime
          };
        });
         if(this.list.length === 0){
              let empty = document.querySelector(".empty")
              empty.style.display="block"
          }
      });
    }
  },
  created() {
    this.pustData();
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
#pust {
  .pust-box {
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
    }
  }
  .empty{
                      width: 130px;
                      height: 150px;
                      position: fixed;
                      left: 0;
                      right: 0;
                      bottom: 0;
                      top: 0;
                      margin: auto;
                      display: none;
                   p{
                     width: 100px;
                     height: 90px;
                     margin:0 0 40px 14px;
                       img{
                         width: 100%;
                         height: 100%;
                       }
                   }
                   span{
                     font-size: 14px;
                     color: #999999;
                     display: block;
                     margin-left: 10px;
                   }
                }
}
</style>

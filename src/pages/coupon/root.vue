<template>
  <div id="coupon" class="page" style="height:100%;">
    <div class="Nav">
      <ul>
        <li
          v-for="(item,index) in list"
          :key="index"
          v-on:click="addClass(index)"
          v-bind:class="{ bgColors:index==current}"
        >
          <router-link :to="item.path">
            <a href="#">{{item.name}}({{item.length}})</a>
          </router-link>
        </li>
      </ul>
    </div>
    <suspend></suspend>
    <router-view></router-view>
  </div>
</template>

<script>
import suspend from "../../components/suspend";
import Axios from 'axios';
export default {
  name: "",
  components: {
    Suspend: suspend
  },
  data() {
    return {
      current: "",
      list: [
        {
          id: 1,
          name: "未使用",
          path: "/mobile/unUsed",
          length: sessionStorage.unUsedLenght
        },
        {
          id: 2,
          name: "已使用",
          path: "/mobile/use",
          length: sessionStorage.useLenght
        },
        {
          id: 3,
          name: "已过期",
          path: "/mobile/pustDue",
          length: sessionStorage.pustDueLenght
        }
      ],
      dataObj: {},
      listUnused: {},
      listUse: {},
      listPust: {}
    };
  },
  methods: {
    addClass: function(index) {
      this.current = index;
    },
    getList() {
      Axios.get(
        "http://192.168.1.24:8080/gateway/mobileMemberCenterService/memberCenter/getAllUserCoupon",
        {
          headers: {
            Authorization: localStorage.token
          }
        }
      ).then(res => {
        let data = res.data.data;
        this.listUnused = data.unusedCoupons.map(item => {
          return {
            price: item.price,
            orderAmount: item.orderAmount,
            couponName: item.couponName,
            endTime: item.endTime
          };
        });
        this.listUse = data.usedCoupons.map(item => {
          return {
            price: item.price,
            orderAmount: item.orderAmount,
            couponName: item.couponName,
            endTime: item.endTime
          };
        });
        this.listPust = data.expiredCoupons.map(item => {
          return {
            price: item.price,
            orderAmount: item.orderAmount,
            couponName: item.couponName,
            endTime: item.endTime
          };
        });
        this.list[0].length = this.listUnused.length;
        this.list[1].length = this.listUse.length;
        this.list[2].length = this.listPust.length;
      });
    }
  },
  created(){
    this.getList();
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
#coupon {
  position: fixed;
  background: #f7f7f7;
  width: 100%;
  height: 100%;
  .van-ellipsis {
    font-weight: 800;
    font-size: 18px;
    color: #333333;
    letter-spacing: -0.43px;
  }
  .van-icon-arrow-left {
    color: #4a4a4a;
    font-size: 18px;
  }
  .Nav {
    height: 40px;
    background-color: #ffffff;
    border-bottom: 1px solid #cdcdcd;
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 40px;
      .bgColors a {
        font-weight: bold;
        color: #333;
        border-bottom: 2px solid red;
      }
      li {
        font-size: 16px;
        width: 70px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        a {
          display: block;
          color: #666666;
          width: 90px;
          text-align: center;
          height: 38px;
        }
      }
    }
  }
}
</style>


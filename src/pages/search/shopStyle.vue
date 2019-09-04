<template>
  <div id="shop">
    <div class="shop-nav">
      <ul>
        <!-- <li>
          <a @click="defaultAction()" class="default">默认</a>
        </li> -->
        <li @click="priceAction()" v-for="item in list" :key="item.id"  :class="item.class">
          <a>
            {{item.name}}
            <img :src="item.Image" />
          </a>
        </li>
        <!-- <li @click="salesVolume()">
          <a>销量</a>
        </li> -->
        <!-- <li>
          <a>评价数</a>
        </li> -->
        <!-- <li>
          <a>
            筛选
            <img
              src="https://www.eg-live.com/Areas/Mobile/Templates/Default/Images/icon_screen.png"
            />
          </a>
        </li> -->
      </ul>
    </div>
    <div class="shop" v-for="item in products" :key="item.id">
      <ul>
        <li>
          <img src="" alt />
        </li>
        <li>
          <a>{{item.productname}}</a>
          <p>¥{{item.saleprice}}</p>
          <div>
            <span>已售:{{item.salecount}}</span>
            <span>{{item.comments}}人评论</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { setPriority } from "os";
import bus from "../../../../LanOu/src/js/bus";
import pOne from "../../assets/img/price_1.png";

import pTwo from "../../assets/img/price_2.png";
import pThree from "../../assets/img/price_3.png";
import { setTimeout } from "timers";
let a = require("../../assets/img/price_1.png");
let b = require("../../assets/img/price_2.png");
let c =require("../../assets/img/price_3.png")

export default {
  name: "shop-style",
  // props: {
  //   products: Array,
  //   required: true
  // },

  data() {
    return {
      list: [
        {id:1,name:"默认",class:"default",Image:""},
        {id:2,name:"价格",class:"price",Image:a},
        {id:3,name:"销量",class:"sales",Image:""},
        {id:4,name:"评价",class:"evaluate",Image:""}
      ],
      products: [],
      key: localStorage.keyValue,
      sortOrder: "desc",
      sortName: "comments",
      priceImg: pOne,

    };
  },
  methods: {
    shopAction(val) {
      Axios.get(
        "https://shop-api.eg-live.com/gateway/searchService/searchProduct/search",
        {
          params: {
            key: localStorage.keyValue,
            page: "1",
            size: "11",
            sortName: this.sortName,
            sortOrder: this.sortOrder
          }
        }
      ).then(res => {
        this.products = res.data.data.products;
        console.log(this.products);
      });
    },
    
    // 默认排序
    defaultAction() {
      location.reload();
      this.sortOrder = "asc";
      this.shopAction();
    },
    // 价格排序
    priceAction() {
      this.sortName = "saleprice";
      if (this.sortOrder === "desc") {
        this.sortOrder = "asc";
        this.list[1].Image = b;
        this.shopAction();
        // location.reload();
      } else if (this.sortOrder === "asc") {
        this.sortOrder = "desc";
        this.list[1].Image = c;
        this.shopAction();
        // location.reload();
      }
    },
    // 销量排序
    salesVolume() {
      this.sortOrder = "salecount";
      this.shopAction();
    }
  },

  created() {
    this.shopAction();
    // bus.$on("shop", val => {
    //   this.shopAction(val);
    //   console.log(1);
    // });
  },
   mounted(){
     let defaultClick = document.querySelectorAll(".shop-nav ul li")
     console.log(defaultClick[0].className) 
     for(var i = 0; i < defaultClick.length; i++){
       
     }
     if(defaultClick[0].className === "default"){
        
     }
 }
};
</script>

<style lang="scss" scoped>
#shop {
  width: 100%;
  height: 100%;
  position: absolute;
  padding-top: 44px;
  box-sizing: border-box;
  top: 0px;
  background: #f7f7f7;
  .active {
    color: #fe3824;
  }
  .shop-nav {
    ul {
      height: 44px;
      background: #fff;
      border-bottom: 1px solid #cccccc;
      display: flex;

      li {
        font-size: 14px;
        color: #333333;
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      li:nth-child(2) img {
        width: 8px;
        height: 12px;
        position: relative;
        top: 1px;
      }
      li:nth-child(5) img {
        width: 10px;
        height: 10px;
        position: relative;
      }
    }
  }
  .shop:nth-child(2n) {
    margin-right: 1%;
  }
  .shop {
    width: 49.5%;
    height: 264px;
    position: relative;
    background: #fff;
    margin-bottom: 5px;
    float: left;
    ul {
      li:nth-child(1) {
        width: 100%;
        height: 175px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 130px;
          height: 102px;
        }
      }
      li:nth-child(2) {
        padding: 0 7px 0 15px;
        box-sizing: border-box;
        a {
          display: block;
          padding-right: 2px;
          box-sizing: border-box;
          width: 100%;
          height: 36px;
          line-height: 18px;
          font-size: 14px;
          color: #333333;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        p {
          font-size: 18px;
          color: #fe3824;
          line-height: 18px;
          margin: 8px 0 6px;
        }
        div {
          display: flex;
          justify-content: space-between;
          span {
            font-size: 12px;
            color: #999999;
            line-height: 12px;
          }
        }
      }
    }
  }
}
</style>


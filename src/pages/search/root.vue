<template>
  <div id="search">
    <div class="sear-nav">
      <van-icon name="arrow-left" @click="leftAction()" />
      <div>
        <img src="../../assets/img/search.png" alt />
        <input type="text" @click="inputAction()" class="text" placeholder="搜索食谱、商品" />
      </div>
      <router-link :to="this.shopShow">
        <span @click="searchAction()">搜索</span>
      </router-link>
    </div>
    <div class="sear-main">
      <div class="hot">
        <h2>热门搜索</h2>
        <div>
          <a>面包</a>
        </div>
      </div>
      <div class="history">
        <div>
          <h2>历史记录</h2>
          <img src="../../assets/img/delet.png" @click="removeHistory()" />
        </div>
        <div>
          <a v-for="(val, index) in localValue" :key="val.id" :index="index">
            {{val}}
            <img
              src="../../assets/img/deletOne.png"
              :index="index"
              @click="deleHistory(index)"
            />
          </a>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <!-- <shopStyle v-if="shopShow" :products="products" /> -->
  </div>
</template>

<script>
import shopStyle from "./shopStyle";
import Axios from "axios";
export default {
  components: {
    shopStyle
  },
  data() {
    return {
      shopShow: "",
      value: [],
      localValue: [],
      sortName: "",
      sortOrder: ""
    };
  },
  methods: {
    searchAction() {
      let textValue = document.querySelector(".text");
      // bus.$emit("shop", localStorage.keyValue);
      if (textValue.value === "") {
        this.$toast("请输入内容");
        return;
      } else {
        this.shopShow = "/mobile/shop";
        // console.log(textValue.value);
        localStorage.setItem("keyValue", textValue.value);
        this.localValue.push(textValue.value);
        this.localValue = [...new Set(this.localValue)];
        localStorage.setItem("value", JSON.stringify(this.localValue));
      }
    },
    // 触发商品信息

    // 删除单个历史记录
    deleHistory(index) {
      console.log(index);
      console.log(this.localValue);
      this.localValue.splice(index, 1);
      localStorage.setItem("value", JSON.stringify(this.localValue));
    },
    // 删除全部历史记录
    removeHistory() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "确认删除全部历史记录？"
        })
        .then(() => {
          this.localValue.splice(0, this.localValue.length);
          localStorage.setItem("value", JSON.stringify(this.localValue));
          this.local();
        })
        .catch(() => {});
    },
    // 返回上一页
    leftAction() {
      this.$router.go(-1);
    },
    inputAction(){
        this.$router.push("/mobile/search")
    },
    local() {
      if (localStorage.value === undefined) {
        return;
      } else {
        this.localValue = JSON.parse(localStorage.getItem("value"));
      }
    }
  },
  created() {
    this.local();
  }
};
</script>

<style lang="scss" scoped>
#search {
  width: 100%;
  .sear-nav {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #ffffff;
    border-bottom: 1px solid #898989;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    .van-icon {
      width: 34px;
      height: 44px;
      line-height: 44px;
      text-align: center;
      font-size: 22px;
      color: #333;
    }
    div {
      position: relative;
      img {
        width: 13px;
        height: 13px;
        position: absolute;
        top: 9px;
        left: 11px;
      }
      .text {
        width: 258px;
        height: 30px;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding-left: 32px;
        box-sizing: border-box;
      }
    }
    span {
      color: #999999;
      font-size: 15px;
      display: block;
      padding-right: 10px;
    }
  }
  .sear-main {
    padding-top: 44px;
    box-sizing: border-box;
    .hot {
      padding-top: 30px;
      padding-left: 15px;
      box-sizing: border-box;
      height: 190px;
      h2 {
        font-size: 14px;
        color: #4a4a4a;
        margin-bottom: 20px;
      }
      a {
        padding: 4px 10px;
        box-sizing: border-box;
        background: #a4c4db;
        border-radius: 22px;
        color: #999;
        font-size: 12px;
      }
    }
    .history {
      padding-left: 15px;
      box-sizing: border-box;
      div:nth-child(1) {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        box-sizing: border-box;
        img {
          width: 44px;
          height: 44px;
        }
        h2 {
          line-height: 44px;
          font-size: 14px;
        }
      }
      div:nth-child(2) {
        a {
          max-width: 100px;
          padding-left: 4px;
          padding-right: 18px;
          box-sizing: border-box;
          background: #a4c4db;
          border-radius: 14px;
          color: #999;
          font-size: 12px;
          height: 30px;
          line-height: 30px;
          display: block;
          margin: 0 15px 15px 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          float: left;
          position: relative;
        }
        img {
          position: absolute;
          right: 6px;
          width: 9px;
          height: 9px;
          top: 10px;
        }
      }
    }
  }
}
</style>


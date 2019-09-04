<template>
  <div id="site">
    <div class="header">
      <span class="title">地址管理</span>
    </div>
    <div class="coco">
      <div class="Adtitle" v-for="item in msgList" :key="item.id">
        <div class="msg">
          <span class="msg-name">{{item.shipTo}}</span>
          <span class="msg-telephone"> {{item.phone}} </span>
        </div>
        <div class="adr">
          <p class="adr-title"> {{item.fullName}} {{item.address}} </p>
        </div>
        <div class="operation">
          <div class="check">
            <van-checkbox v-model="item.isDefault" checked-color="red" @click="check(item)">
              <span class="check-title">默认地址</span>
            </van-checkbox>
          </div>
          <div class="redact">
            <router-link tag="div" to="/mobile/shippingAddres" class="redact-redact redact-commit">
              <img src="../../assets/img/redax.png" />
              <span>编辑</span>
            </router-link>
            <div class="redact-delete redact-commit" @click="delet(item.id)">
              <img src="../../assets/img/delete.png" />
              <span>删除</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/mobile/shippingAddres" tag="div" class="button">添加地址</router-link>
    <van-popup v-model="show">
      <div id="remove">
        <div class="remove-box">
          <div class="remove-title">
            <p>确定要删除吗?</p>
          </div>
          <div class="remove-btn">
            <span class="btn-confirm btn-style" @click="confirm()">确定</span>
            <span class="btn-cancel btn-style" @click="cancel()">取消</span>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "size",
  data() {
    return {
      checked: true,
      show: false,
      deletId: "",
      msgList: [
        {phoen:'15979632782'},
        {phoen:'15979632782'}
      ]
    };
  },
  methods: {
    delet(Id) {
      this.show = true;
      console.log(Id);
    },
    confirm() {
      console.log("确认删除");
    },
    cancel() {
      this.show = false;
    },
    check(item) {
      if (item.checked !== true) {
        item.checked = true;
        for (var msg of this.msgList) {
          if (item.id === msg.id) {
            item.checked = true;
          }
          msg.checked = false;
        }
      }
    }
  },
  created() {
    Axios.get(
      "/mobileMemberCenterService/shippingAddress/getShippingAddress",
      {
        headers: { Authorization: localStorage.token }
      }
    ).then(res => {
      console.log(res.data.data[0].isDefault);
      this.msgList = res.data.data;
    });
  },
  mounted() {
    setTimeout(() => {console.log(this.msgList)},1000)
  }
};
</script>

<style lang="scss" scoped>
#site {
  .header {
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #ffffff;
    border-bottom: solid 1px #cccccc;
    margin-bottom: 14px;
    .title {
      font-size: 18px;
      color: #333333;
      font-family: PingFangSC-Medium;
    }
  }
  .button {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(90deg, #f00200 0%, #fe4f18 98%);
    font-size: 17px;
    color: #ffffff;
  }
  .coco {
    width: 100%;
    height: 100%;
    background: #f7f7f7;
    .Adtitle {
      box-sizing: border-box;
      padding: 0 15px;
      margin-top: 10px;
      background-color: #ffffff;
      overflow: hidden;
      .msg {
        display: flex;
        justify-content: space-between;
        height: 14px;
        line-height: 14px;
        font-size: 16px;
        margin-top: 11px;
      }
      .adr {
        width: 337px;
        font-size: 14px;
        color: #999999;
        padding-top: 16px;
        padding-bottom: 12px;
        border-bottom: solid 1px #cccccc;
      }
      .operation {
        display: flex;
        justify-content: space-between;
        margin: 9px 0;
        .check {
          display: flex;
          align-items: center;
          font-size: 14px;
          .check-style {
            width: 22px;
            height: 22px;
            border: solid 1px #888888;
            border-radius: 50%;
          }
        }
        .redact {
          display: flex;
          .redact-commit {
            display: flex;
            align-items: center;
            margin-right: 15px;
            font-size: 14px;
          }
          img {
            width: 18px;
            height: 18px;
            margin-right: 5px;
          }
        }
      }
    }
  }
  #remove {
    width: 160px;
    height: 70px;
    text-align: center;
    .remove-box {
      padding-top: 10px;
      box-sizing: border-box;
      .remove-title {
        display: flex;
        justify-content: center;
      }
      .remove-btn {
        display: flex;
        width: 100px;
        justify-content: space-between;
        margin: 0 auto;
        margin-top: 14px;
        .btn-style {
          display: inline-block;
          width: 32px;
          height: 18px;
          line-height: 18px;
          border: solid 1px gray;
        }
      }
    }
  }
}
</style>


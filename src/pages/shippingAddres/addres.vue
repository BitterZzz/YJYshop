<template>
  <div id="addres">
    <div id="header">
      <span class="title">添加新地址</span>
    </div>
    <section class="van-doc-demo-block">
      <div class="van-address-edit">
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>姓名</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="text" placeholder="收货人姓名" class="van-field__control" />
            </div>
          </div>
        </div>
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>电话</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="tel" placeholder="收货人手机号" class="van-field__control telephone" />
            </div>
          </div>
        </div>
        <div class="van-cell van-field" @click="this.showPopup">
          <div class="van-cell__title van-field__label">
            <span>地区</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input
                type="text"
                placeholder="选择省 / 市 / 区"
                readonly="readonly"
                class="van-field__control area"
              />
            </div>
          </div>
        </div>
        <div class="van-cell van-field" @click="this.showPopup">
          <div class="van-cell__title van-field__label">
            <span>街道</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input
                type="text"
                placeholder="选择街道"
                readonly="readonly"
                class="van-field__control area"
              />
            </div>
          </div>
        </div>
        <div class="van-cell van-address-edit-detail">
          <div class="van-cell__value van-cell__value--alone">
            <div class="van-cell van-field">
              <div class="van-cell__title van-field__label">
                <span>详细地址</span>
              </div>
              <div class="van-cell__value">
                <div class="van-field__body">
                  <textarea
                    rows="1"
                    maxlength="200"
                    placeholder="街道门牌、楼层房间号等信息"
                    class="van-field__control addres"
                    style="height: 24px;"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="van-cell van-cell--center van-switch-cell">
          <div class="van-cell__title">
            <span>设为默认收货地址</span>
          </div>
          <div class="van-cell__value">
            <van-switch v-model="checked" />
          </div>
        </div>
        <div class="van-address-edit__buttons save" @click="save()">
          <button
            class="van-button van-button--danger van-button--normal van-button--block buttonStyle"
          >
            <span class="van-button__text">保存</span>
          </button>
        </div>
      </div>
    </section>
    <van-popup v-model="show" position="bottom">
      <div id="checkArea">
        <div class="header">
          <div class="header-top">
            <span class="title">配送至</span>
            <i class="icon">
              <van-icon name="close" size="16px" />
            </i>
          </div>
          <div class="header-bottom">
            <ul class="clearfix">
              <li class="li-style li-change">请选择</li>
              <li class="li-style li-second">请选择</li>
              <li class="li-style li-thrid">请选择</li>
              <li class="li-style li-fourth">请选择</li>
            </ul>
          </div>
        </div>
        <div class="content">
          <div class="content-title">
            <ul>
              <li
                v-for="(item,index) in this.city"
                :key="item.id"
                @click="GetID(item,index)"
              >{{item.Name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import Axios from "axios";
import Region from "../../assets/json/region.json";
export default {
  name: "addres",
  data() {
    return {
      areaList: {},
      searchResult: [],
      show: false,
      checked: false,
      dom: {
        _btn: "",
        _userName: "",
        _telephone: "",
        _area: "",
        _addres: ""
      },
      cityDom: {
        liName: "",
        liSecond: "",
        liThrid: "",
        liFourth: "",
        _ul: ""
      },
      city: "",
      msg: "",
      item:"",
      index:""
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
    //保存前判断
    save() {
      let _userVerity = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (this.dom._userName.value === "") {
        this.showToast("请填写姓名");
        return;
      } else if (this.dom._telephone.value === "") {
        this.showToast("请填写正确手机号");
        return;
      } else if (!_userVerity.test(this.dom._telephone.value)) {
        this.showToast("请填写正确手机号");
        return;
      } else if (this.dom._area.value === "") {
        this.showToast("请填写地址");
        return;
      } else if (this.dom._addres.value === "") {
        this.showToast("请填写详细地址");
        return;
      }
    },
    showToast(value) {
      this.$toast(value);
    },
    //获取点击到的城市的信息
    GetID(item, index) {
      this.item = item;
      this.index = index;
      this.cityDom.liName = document.querySelector(".li-change");
      this.cityDom.liSecond = document.querySelector(".li-second");
      this.cityDom.liThrid = document.querySelector(".li-thrid");
      this.cityDom.liFourth = document.querySelector(".li-fourth");
      this.cityDom._ul = document.querySelector(".content-title ul");
      this.cityDom._ul.addEventListener("click", this.CityJudge, false);
    },
    //城市信息判断
    CityJudge() {
      let val = "请选择";
      console.log(this.cityDom.liThrid);
      if (this.cityDom.liName.innerHTML === val) {
        this.cityDom.liName.innerHTML = `${this.item.Name}`;
      }
      if (this.cityDom.liName.innerHTML !== val) {
        this.city = JSON.parse(this.msg);
        this.cityDom.liSecond.style.display = "block";
        this.city = this.city[this.index].Sub;
        console.log(this.city);
        return;
      }
      if (this.cityDom.liSecond.innerHTML === val && this.cityDom) {
        this.cityDom._ul.removeEventListener("click", this.CityJudge, false);
      }
      if(this.cityDom.liSecond.innerHTML !== val){
        this.cityDom.liSecond.innerHTML = `${this.city[this.index].Name}`;
      }
    }
  },
  created() {
    sessionStorage.setItem("area", JSON.stringify(Region));
    this.msg = sessionStorage.getItem("area");
    this.city = JSON.parse(this.msg);
  },
  mounted() {
    let provinceList = [];
    this.dom._btn = document.querySelector(".save");
    this.dom._userName = document.querySelector(".van-field__control");
    this.dom._telephone = document.querySelector(".telephone");
    this.dom._area = document.querySelector(".area");
    this.dom._addres = document.querySelector(".addres");
  }
};
</script>
<style lang="scss" scoped>
#addres {
  #header {
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    margin-bottom: 14px;
    border-bottom: solid 1px #898989;
    background-color: #ffffff;
    .title {
      font-size: 18px;
      color: #333333;
      font-family: PingFangSC-Medium;
    }
  }
  .save {
    z-index: 1;
    position: fixed;
    width: 100%;
    padding: 0;
    margin: 0;
    left: 0;
    bottom: 0;
    .buttonStyle {
      margin: 0;
    }
  }
  #checkArea {
    width: 100%;
    .header {
      position: relative;
      width: 100%;
      height: 75px;
      border-bottom: solid 0.5px #cccccc;
      overflow: hidden;
      .header-top {
        text-align: center;
        margin: 20px 0 14px 0;
        .title {
          display: inline-block;
          font-size: 16px;
        }
        .icon {
          position: absolute;
          right: 20px;
        }
      }
      .header-bottom {
        ul {
          .li-style {
            float: left;
            width: 50px;
            height: 14px;
            margin-left: 28px;
            line-height: 14px;
            text-align: center;
            padding-bottom: 4px;
            font-size: 14px;
          }
          .li-second {
            display: none;
          }
          .li-thrid {
            display: none;
          }
          .li-fourth {
            display: none;
          }
          .li-change {
            font-weight: 500;
            border-bottom: solid 1px #fe3824;
          }
        }
      }
    }
    .content {
      width: 100%;
      height: 372px;
      font-size: 14px;
      overflow: hidden;
      .content-title {
        padding-left: 28px;
        width: 50px;
        text-align: center;
        ul {
          margin-top: 18px;
          overflow: hidden;
          behavior: "alternate";
          height: 354px;
          overflow-y: auto;
          li {
            margin-bottom: 26px;
          }
        }
      }
    }
  }
}
</style>



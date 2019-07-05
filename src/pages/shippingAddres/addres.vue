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
                placeholder="选择省 / 市 / 区 / 街道"
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
            <i class="icon" @click="quit()">
              <van-icon name="close" size="16px" />
            </i>
          </div>
          <div class="header-bottom">
            <ul class="clearfix">
              <li class="li-style li-frist li-change">请选择</li>
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
        box: "",
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
      cityID: {
        provinceId: "",
        cityId: "",
        districtId: "",
        streetId: ""
      },
      city: "",
      msg: "",
      item: "",
      index: "",
      copyCity: ""
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
      this.cityDom.liName = document.querySelector(".li-frist");
      this.cityDom.liSecond = document.querySelector(".li-second");
      this.cityDom.liThrid = document.querySelector(".li-thrid");
      this.cityDom.liFourth = document.querySelector(".li-fourth");
      this.cityDom._ul = document.querySelector(".content-title ul");
      if (this.show === false) {
        this.cityDom.liName.classList.add("li-change");
        this.cityDom.liSecond.classList.remove("li-change");
        this.cityDom.liThrid.classList.remove("li-change");
        this.cityDom.liFourth.classList.remove("li-change");
      }
      this.CityJudge();
    },
    //城市信息判断
    CityJudge() {
      let val = "请选择";
      let getCity = 0;
      this.dom.box = document.querySelector("#checkArea");
      //省判断
      if (this.cityDom.liName.innerHTML === val) {
        this.cityDom.liName.innerHTML = `${this.item.Name}`;
        this.cityID.provinceId = this.item.ID;
        this.cityDom.liSecond.style.display = "block";
        this.cityDom.liName.classList.remove("li-change");
        this.cityDom.liSecond.classList.add("li-change");
        this.city = this.city[this.index].Sub;
      } else {
        //市判断
        if (this.cityDom.liSecond.innerHTML === val) {
          this.cityDom.liSecond.innerHTML = `${this.item.ShortName}`;
          this.cityID.cityId = this.item.ID;
          console.log(this.item);
          this.city = this.city[this.index].Sub;
          //判断数据是否到市级结束
          if (this.city !== undefined) {
            this.cityDom.liThrid.style.display = "block";
            this.cityDom.liSecond.classList.remove("li-change");
            this.cityDom.liThrid.classList.add("li-change");
          } else {
            this.show = false;
            this.cityDom.liName.classList.add("li-change");
            this.dom._area.value =
              this.cityDom.liName.innerHTML +
              "/" +
              this.cityDom.liSecond.innerHTML;
            sessionStorage.setItem(
              "areaID",
              this.cityID.provinceId + "_" + this.cityID.cityId
            );
            this.initialize(val);
          }
        } else {
          //区级信息判断
          if (
            this.cityDom.liThrid.innerHTML === val &&
            this.city !== undefined
          ) {
            this.cityDom.liThrid.innerHTML = `${this.item.ShortName}`;
            this.cityID.districtId = this.item.ID;
            this.city = this.city[this.index].Sub;
            //判断数据是否到区级
            if (this.city !== undefined) {
              this.cityDom.liFourth.style.display = "block";
              this.cityDom.liThrid.classList.remove("li-change");
              this.cityDom.liFourth.classList.add("li-change");
            } else {
              this.show = false;
              this.cityDom.liName.classList.add("li-change");
              this.dom._area.value =
                this.cityDom.liName.innerHTML +
                "/" +
                this.cityDom.liSecond.innerHTML +
                "/" +
                this.cityDom.liThrid.innerHTML;
              sessionStorage.setItem(
                "areaID",
                this.cityID.provinceId +
                  "_" +
                  this.cityID.cityId +
                  "_" +
                  this.cityID.districtId
              );
              this.initialize(val);
            }
          } else {
            //县级数据
            if (this.cityDom.liFourth.innerHTML === val) {
              this.cityDom.liFourth.innerHTML = `${this.item.ShortName}`;
              this.cityID.streetId = this.item.ID;
              this.show = false;
              this.cityDom.liName.classList.add("li-change");
              this.dom._area.value =
                this.cityDom.liName.innerHTML +
                "/" +
                this.cityDom.liSecond.innerHTML +
                "/" +
                this.cityDom.liThrid.innerHTML +
                "/" +
                this.cityDom.liFourth.innerHTML;
              sessionStorage.setItem(
                "areaID",
                this.cityID.provinceId +
                  "_" +
                  this.cityID.cityId +
                  "_" +
                  this.cityID.districtId +
                  "_" +
                  this.cityID.streetId
              );
              this.initialize(val);
            }
          }
        }
      }
    },
    //区域选择栏初始化
    initialize(val) {
      this.city = this.copyCity;
      this.cityDom.liName.innerHTML = val;
      this.cityDom.liSecond.style.display = "none";
      this.cityDom.liSecond.innerHTML = val;
      this.cityDom.liThrid.style.display = "none";
      this.cityDom.liThrid.innerHTML = val;
      this.cityDom.liFourth.style.display = "none";
      this.cityDom.liFourth.innerHTML = val;
    },
    //退出地址选择栏
    quit() {
      let val = "请选择";
      this.show = false;
      this.initialize(val);
    }
  },
  created() {
    sessionStorage.setItem("area", JSON.stringify(Region));
    this.msg = sessionStorage.getItem("area");
    this.city = JSON.parse(this.msg);
    this.copyCity = this.city;
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
            width: 60px;
            height: 14px;
            margin-left: 28px;
            line-height: 14px;
            text-align: center;
            padding-bottom: 4px;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
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
            width: 50px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-bottom: 26px;
          }
        }
      }
    }
  }
}
</style>



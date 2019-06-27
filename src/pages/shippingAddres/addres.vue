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
              <input type="text" placeholder="收货人姓名" class="van-field__control">
            </div>
          </div>
        </div>
        <div class="van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>电话</span>
          </div>
          <div class="van-cell__value">
            <div class="van-field__body">
              <input type="tel" placeholder="收货人手机号" class="van-field__control">
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
                class="van-field__control"
              >
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
                    class="van-field__control"
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
        <div class="van-address-edit__buttons save">
          <button class="van-button van-button--danger van-button--normal van-button--block">
            <span class="van-button__text">保存</span>
          </button>
        </div>
      </div>
    </section>
    <van-popup v-model="show" position="bottom">
      <van-area :area-list="areaList"/>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "addres",
  data() {
    return {
      areaList: {},
      searchResult: [],
      show: false,
      checked: false
    };
  },

  methods: {
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    showPopup() {
      this.show = true;
    }
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
  .save{
    z-index: 2080;
    position: fixed;
    width: 100%;
    padding: 0;
    margin: 0;
    left: 0;
    bottom: 0;
  }
}
</style>



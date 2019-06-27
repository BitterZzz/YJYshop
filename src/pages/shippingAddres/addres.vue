<template>
  <div id="addres">
    <div id="header">
      <span class="title">添加新地址</span>
    </div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
export default {
  name:'addres',
  data() {
    return {
      areaList: {},
      searchResult: []
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
    }
  }
};
</script>
<style lang="scss" scoped>
  #addres{
    #header{
      width: 100%;
      height: 45px;
      line-height: 45px;
      text-align: center;
      margin-bottom: 14px;
      border-bottom: solid 1px #898989;
      background-color: #ffffff;
      .title{
        font-size: 18px;
        color: #333333;
        font-family: PingFangSC-Medium;
      }
    }
  }
</style>



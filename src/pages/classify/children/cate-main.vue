<template>
  <div id="main">
    <div class="header">
      <h2>小家电</h2>
      <div class="small">
        <div class="goods" v-for=" i in 6" :key="i">
          <img src="../../../assets/img/icon1.png" alt />
          <span>标题</span>
        </div>
      </div>
      <div class="body">
        <h2>大家电</h2>
        <div class="big">
          <div class="goods" v-for=" i in 3" :key="i">
            <img src="../../../assets/img/icon1.png" alt />
            <span>标题</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cate-main"
};
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: 100%;
  float: right;

  h2 {
    margin: 18px 0 10px 0;
    font-size: 14px;
    line-height: 14px;
    color: #333333;
  }
  .header {
    .small {
      width: 265px;
      height: 257px;
      background: #ffffff;
      padding: 15px 10px 15px 10px;
      box-sizing: border-box;

      .goods:nth-child(2) {
        margin: 0 17px 0 18px;
      }
      .goods:nth-child(5) {
        margin: 0 17px 0 18px;
      }
      .goods {
        width: 70px;
        float: left;

        img {
          width: 70px;
          height: 84px;
          margin-bottom: 10px;
        }
        span {
          display: block;
          width: 100%;
          text-align: center;
          margin-bottom: 10px;
        }
      }
    }
  }
  .body {
    .big {
      width: 265px;
      height: 257px;
      background: #ffffff;
      padding: 15px 10px 15px 10px;
      box-sizing: border-box;

      .goods:nth-child(2) {
        margin: 0 17px 0 18px;
      }
      .goods:nth-child(5) {
        margin: 0 17px 0 18px;
      }
      .goods {
        width: 70px;
        float: left;

        img {
          width: 70px;
          height: 84px;
          margin-bottom: 10px;
        }
        span {
          display: block;
          width: 100%;
          text-align: center;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>


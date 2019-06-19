<template>
  <div id="personal" class="page center">
       <div class="header">
           <div class="portrait">
               <img src="" alt="" srcset="">
               <div class="border"></div>
           </div>
           <p>爱发胖的薯条</p>
       </div>
        <div class="order-form">
             <li class="orderSee">
                <h5>全部订单</h5>
                <span>查看全部订单 </span>
             </li>
             <li class="orderList">
                 <a href="#" class="payment">
                   <img src="" alt="">
                   <span>待付款</span>
                 </a>
                  <a href="#" class="shipments">
                   <img src="" alt="">
                   <span>代发货</span>
                 </a>
                  <a href="#" class="delivery">
                   <img src="" alt="">
                   <span>待收货</span>
                 </a>
                  <a href="#" class="evaluate">
                   <img src="" alt="">
                   <span>待评价</span>
                 </a>
                  <a href="#" class="refund">
                   <img src="" alt="">
                   <span>退款/售后</span>
                 </a>
             </li>
        </div>
        <div class="meum">
            <li>
              <a href="#">
                 <img src="" alt="" srcset="">
                 <span>我的优惠卷</span>
              </a>
            </li>
            <li>
              <a href="#">
                 <img src="" alt="" srcset="">
                 <span>我的资产</span>
              </a>
            </li>
            <li>
              <a href="#">
                 <img src="" alt="" srcset="">
                 <span>我的收藏</span>
              </a>
            </li>
        </div>
        <div class="manage">
           <li>
             <a href="#">
               <img src="" alt="">
               <span>收货地址管理</span>
             </a>
           </li>
           <li>
             <a href="#">
               <img src="" alt="">
               <span>账号管理</span>
             </a>
           </li>
        </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {}
};
</script>

<style lang="scss" scoped>
  #personal{
      background: #cdcdcd;
      padding-top: 11px;
      box-sizing: border-box;
      .header{
            width: 93.125%;
            height: 182px;
            background-color: #e3393c;
            border-radius: 4px;
            margin: 0 auto;
            color: #fff;
            box-sizing: border-box;
            margin-bottom: 11px;
            padding-top: 30px;
              .portrait{
                    z-index: 1;
                    width: 79px;
                    height: 79px;
                    border-radius: 50%;
                    border: 0px;
                    margin-right: auto;
                    margin-bottom: 10px;
                    margin-left: auto;
                    background-color: #fff;
                    position: relative;
                      .border{
                            border: 2px solid #e3393c;
                            left: 1.6px;
                            position: absolute;
                            top: 1.4px;
                            width: 72px;
                            height: 72px;
                            border-radius: 50%;

                      }
                 
              }
              p{
                    text-align: center;
                    font-size: 20px;
                  }
      }
      .order-form{
        width:100%;
        height: 104px;
        background: #fff;
        padding-left: 10px;
        box-sizing: border-box;
          .orderSee{
                  height: 47px;
                  margin-left: 10px;
                  padding-right: 10px;
                  border-bottom: 1px solid #e9e9ea;
                  box-sizing: border-box;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                    h5{
                      margin: 0;
                      font-size: 14px;
                      color: #14181b;
                    }
                    span{
                          font-size: 12px;
                          color: #aeaeae;
                          margin-right: 15px;
                          float: right;
                    }
          }
          .orderList{
            height: 57px;
            display: flex;
            justify-content: space-between;
            align-items: center;
              a{
                  img{
                    width: 20px;
                    height: 20px;
                  }
                  span{
                    display: block;
                    text-align: center;
                  }
              }
          }
      }
  }
</style>

<template>
<div>

      <div id="tabs">
        <!-- 头部 banner -->
           <div class="top">
              <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                  <a href="#"><img src="https://www.eg-live.com/Storage/template/0/20190412/6369067714992735718495819.jpg" alt="" srcset=""></a>
                </van-swipe-item>
                <van-swipe-item>
                  <a href="#"><img src="https://www.eg-live.com/Storage/template/0/20190412/6369067770982156542113367.jpg" alt="" srcset=""></a>
                </van-swipe-item>
                <van-swipe-item>
                  <a href="#"><img src="https://www.eg-live.com/Storage/template/0/20190412/6369067772488416188480798.jpg" alt="" srcset=""></a>
                </van-swipe-item>
                <van-swipe-item>
                  <a href="#"><img src="https://www.eg-live.com/Storage/template/0/20190412/6369067705602050617339807.jpg" alt="" srcset=""></a>
                </van-swipe-item>
              </van-swipe>
              <div class="header">
                 <a href="#"><img src="../assets/img/sicon.png"/></a>
                 <p><img src="../assets/img/search.png" alt="" srcset=""> <input type="text" placeholder="输入关键字搜索"></p>
                 <a href="#"><img src="../assets/img/gicon.png"/></a>
              </div>
           </div>
           <!-- 标题 -->
           <div class="title">
             <a><img src="../assets/img/icon1.png" alt="" /><span>精选食材</span></a>
             <a><img src="../assets/img/icon2.png" alt="" /><span>健康营养</span></a>
             <a><img src="../assets/img/icon3.png" alt="" /><span>安全放心</span></a>
           </div>
           <div class="Hr">
                <hr/>
           </div>
           <!-- nav 分类 -->
           <div class="nav">
              <li>
                <a href="#" class="list">
                  <img src="../assets/img/classify.png" alt="" srcset="">
                </a>
                <a href="#">
                  分类
                </a>
              </li>
              <li>
                <a href="#" class="list">
                  <img src="../assets/img/roll.png" alt="" srcset="">
                </a>
                <a href="#">
                  新人领券
                </a>
              </li>
              <li>
                <a href="#" class="list">   
                  <img src="../assets/img/group.png" alt="" srcset="">
                </a>
                <a href="#">
                 拼团
                </a>
              </li>
              <li>
                <router-link to="/mobile/home">
                  <a href="#">
                    <img src="../assets/img/mine.png" alt="" srcset="">
                  </a>
                  <a href="#">
                    个人中心
                  </a>
                </router-link>
              </li>
           </div>
           <!-- 热门分区-->
           <div id="hot_partition">
               <div class="hot_title">
                 <h2>热门分区</h2>
               </div>
               <div class="hot_top">
                    <a class="steak" href="javascript:void(0);">
                          <h5>牛排机专区</h5>
                          <p>牛排好伴侣</p>
                          <img src="../assets/img/steak.png" alt="" srcset=""/>
                    </a>
                    <a class="bread" href="javascript:void(0);">
                          <h5>面包机专区</h5>
                          <p>宜居云面包机随心DIY</p>
                          <img src="https://www.eg-live.com/Storage/Shop/1/Products/1198/1_150.png" alt="" srcset=""/>
                    </a>
               </div>
               <div class="hot_bottom">
                  <a href="#" class="fresh">
                          <h5>生鲜牛排专区</h5>
                          <p>澳洲进口 天然原切</p>
                          <img src="../assets/img/fresh.png" alt="" srcset=""/>
                  </a>
                  <a href="#" class="food">
                          <h5>五谷杂粮专区</h5>
                          <p>原生态无污染 放心食材</p>
                          <img src="../assets/img/food.png" alt="" srcset=""/>
                  </a>
                  <a href="#" class="kitchen">
                          <h5>厨电厨具专区</h5>
                          <p>韩国进口 饭麦石不粘锅</p>
                          <img src="../assets/img/kitchen.png" alt="" srcset=""/>
                  </a>
               </div>
           </div>
           <!-- 精选专题 -->
           <div id="choic_special">
                  <h2>精选专题</h2>
                  <div class="chioc_banner">
                  <a> <img src="https://www.eg-live.com/Storage/template/0/20190412/6369067759774272315572640.jpg" alt=""></a> 
                  </div>
                  <div class="chiod_list">
                    <li> 
                      <a href="#">
                            <h6>超值任选</h6>
                            <p>68元任选10件</p>
                            <img src="https://www.eg-live.com/Storage/Shop/1/Products/1492/1_350.png" alt="" srcset="">
                      </a>
                    </li>
                    <li> 
                      <a href="#">
                            <h6>面包粉</h6>
                            <p>最高199减100</p>
                            <img src="https://www.eg-live.com/Storage/Shop/1/Products/1492/1_350.png" alt="" srcset="">
                      </a>
                    </li>
                   <li> 
                      <a href="#">
                            <h6>五朵梅</h6>
                            <p>五谷杂粮粥…</p>
                            <img src="https://www.eg-live.com/Storage/Shop/1/Products/1492/1_350.png" alt="" srcset="">
                      </a>
                    </li>
                    <li> 
                      <a href="#">
                            <h6>牛排限时秒杀</h6>
                            <p>澳洲牛排8.8</p>
                            <img src="https://www.eg-live.com/Storage/Shop/1/Products/1492/1_350.png" alt="" srcset="">
                      </a>
                    </li>
                  </div>
           </div>
           <!-- 为你推荐 -->
           <div id="fory_recommend">
             <h2>为你推荐</h2>
              <ul class="fory_box">
                 <li class="box_left">
                    <a href="#" class="pattern">
                      <img src="https://www.eg-live.com/Storage/Shop/1/Products/1266/1_350.png" alt=""/>
                    </a>
                    
                    <a href="#" class="desc">宜居云）滋滋叫牛排机家用全自动智能牛扒机…</a>
                     <p>¥<span>1598.00</span></p>
                 </li>
                 <li class="box_right">
                    <a href="#" class="pattern">
                      <img src="https://www.eg-live.com/Storage/Shop/1/Products/1266/1_350.png" alt=""/>
                    </a>
                    
                    <a href="#" class="desc">宜居云）滋滋叫牛排机家用全自动智能牛扒机…</a>
                     <p>¥<span>1598.00</span></p>
                 </li>
              </ul>
           </div>
            <div id="fory_recommend">
              <ul class="fory_box">
                 <li class="box_left">
                    <a href="#" class="pattern">
                      <img src="https://www.eg-live.com/Storage/Shop/1/Products/1266/1_350.png" alt=""/>
                    </a>
                    
                    <a href="#" class="desc">宜居云）滋滋叫牛排机家用全自动智能牛扒机…</a>
                     <p>¥<span>1598.00</span></p>
                 </li>
                 <li class="box_right">
                    <a href="#" class="pattern">
                      <img src="https://www.eg-live.com/Storage/Shop/1/Products/1266/1_350.png" alt=""/>
                    </a>
                    
                    <a href="#" class="desc">宜居云）滋滋叫牛排机家用全自动智能牛扒机…</a>
                     <p>¥<span>1598.00</span></p>
                 </li>
              </ul>
           </div>
            <div id="fory_recommend">
              <ul class="fory_box">
                 <li class="box_left">
                    <a href="#" class="pattern">
                      <img src="https://www.eg-live.com/Storage/Shop/1/Products/1266/1_350.png" alt=""/>
                    </a>
                    
                    <a href="#" class="desc">宜居云）滋滋叫牛排机家用全自动智能牛扒机…</a>
                     <p>¥<span>1598.00</span></p>
                 </li>
                 <li class="box_right">
                    <a href="#" class="pattern">
                      <img src="https://www.eg-live.com/Storage/Shop/1/Products/1266/1_350.png" alt=""/>
                    </a>
                    
                    <a href="#" class="desc">宜居云）滋滋叫牛排机家用全自动智能牛扒机…</a>
                     <p>¥<span>1598.00</span></p>
                 </li>
              </ul>
           </div>
            <div id="fory_recommend">
              <ul class="fory_box">
                 <li class="box_left">
                    <a href="#" class="pattern">
                      <img src="https://www.eg-live.com/Storage/Shop/1/Products/1266/1_350.png" alt=""/>
                    </a>
                    
                    <a href="#" class="desc">宜居云）滋滋叫牛排机家用全自动智能牛扒机…</a>
                     <p>¥<span>1598.00</span></p>
                 </li>
                 <li class="box_right">
                    <a href="#" class="pattern">
                      <img src="https://www.eg-live.com/Storage/Shop/1/Products/1266/1_350.png" alt=""/>
                    </a>
                    
                    <a href="#" class="desc">宜居云）滋滋叫牛排机家用全自动智能牛扒机…</a>
                     <p>¥<span>1598.00</span></p>
                 </li>
              </ul>
           </div>
            <div id="fory_recommend">
              <ul class="fory_box">
                 <li class="box_left">
                    <a href="#" class="pattern">
                      <img src="https://www.eg-live.com/Storage/Shop/1/Products/1266/1_350.png" alt=""/>
                    </a>
                    
                    <a href="#" class="desc">宜居云）滋滋叫牛排机家用全自动智能牛扒机…</a>
                     <p>¥<span>1598.00</span></p>
                 </li>
                 <li class="box_right">
                    <a href="#" class="pattern">
                      <img src="https://www.eg-live.com/Storage/Shop/1/Products/1266/1_350.png" alt=""/>
                    </a>
                    
                    <a href="#" class="desc">宜居云）滋滋叫牛排机家用全自动智能牛扒机…</a>
                     <p>¥<span>1598.00</span></p>
                 </li>
              </ul>
           </div>
           <div class="footer"></div>
            
      </div>
      <transition enter-active-class="slideInRight" leave-active-class="slideInLeft">
      <suspend></suspend>
      </transition>
      <router-view></router-view>
</div>
</template>

<script>
import suspend from './suspend'
export default {
  name:"app-tabs",
  components:{
   Suspend:suspend,
  },
  data(){
      
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>

  #tabs{
         background: #E8E8E8;
         overflow: hidden;
         font-family: PingFangSC-Regular;
    .top{
      width: 100%;
      height: 210px;
      .van-swipe{
          height: 210px;
          .van-swipe__indicators{
            display:flex;
            position: absolute;
            bottom:10px;
            left: 80%;
          }
     }
      .header{
          position: absolute;
              top: 3px;
              width: 375px;
              height: 44px;
              display: flex;
              justify-content: space-around;
              input{
                 width: 258px;
                height: 30px;
                padding-left: 31px;
                box-sizing: border-box;
                font-size: 12px;
                color: #999;
                border: none;
                border-radius: 2px;
                margin-top: 6px;
              }
              a{
               display: inline-block;
                width: 44px;
                height: 44px;
                 img{
                      width: 100%;
                      height: 100%;
                  }
              }
              p {
                img{
                  position: absolute;
                  width: 13px;
                  height: 13px;
                  top: 15px;
                  left: 69px;
              }
          }
            
      }
   
    }
    .title{
      width: 100%;
      height: 35px;
      background: #ffffff;
      display: flex;
      justify-content: space-around;
      align-items: center;
        img{
           width: 14px;
           height: 14px;
           position: relative;
           top: 3px;
           left: -8px;
        }
        p:nth-of-type(3) img{
          width: 11.3px;
          height: 14px;
        }
        span{
          font-size: 13px;
          color: #333;
        }
    }
    .Hr{
      background: #ffffff;
       hr{
         width: 340px;
         border:1px solid #E8E8E8;
         margin: 0 auto;
       }
    }
    .nav{
      width: 100%;
      height: 115px;
      background: #ffffff;
      display: flex;
      justify-content: space-around;
      align-items: center;
       a{
         display: block;
       }
        img{
          width: 66px;
          height: 66px;
        }
        li{
          text-align: center;
             a:nth-of-type(2){
               font-family: PingFangSC-Regular;
               min-width: 50px;
               height: 14px;
               line-height: 14px;
               letter-spacing: 0;
               font-size: 14px;
               color: #333;
               text-align: center;

             }
        }
    }
    #hot_partition{
        .hot_title{
          height: 46px;
          display: flex;
          justify-content: center;
          align-items: center;
            h2{
              font-family: PingFangSC-Regular;
              font-size: 16px;
              color: #333333;
              line-height: 14px;
             
            }
            h2::before{
                  content: "";
                  display: inline-block;
                  position: relative;
                  width: 4px;
                  height: 16px;
                  background: #FE3824;
                  left: -6px;
                  top: 2px;
            }
        }
        .hot_top{
          height: 120px;
             .steak{
                 width: 186px;
                 height: 120px;
                 float: left;
                 background: #ffffff;
                 position: relative;
                     img{
                       width: 82px;
                       height: 66px;
                       position: absolute;
                       right: 18px;
                       bottom: 8px;
                     }
                 
             }
             .bread{
                width: 187px;
                height: 120px;
                float: right;
                background: #ffffff;
                position: relative;
                   img{
                       width: 72px;
                       height: 72px;
                       position: absolute;
                       right: 15px;
                       bottom: 2.5px;
                     }
             }
             h5{
               font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #333333;
                letter-spacing: -0.34px;
                line-height: 14px;
                margin:10px 0 7px 13px;
             }
             p{
               font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #666666;
                letter-spacing: -0.29px;
                line-height: 12px;
                margin: 0 0 3px 13px;
             }
        }
        .hot_bottom{
          width: 100%;
          height: 120px;
          margin-top: 2px;
          a{
            background: #ffffff;
          }
          h5{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #333333;
            letter-spacing: -0.34px;
            line-height: 14px;
            margin:10px 0 7px 10px;
            }
            p{
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: #666666;
              letter-spacing: -0.29px;
              line-height: 16px;
              margin: 0 0 0px 10px;
            }
             .fresh{
                float: left;
                width: 171px;
                height: 120px;
                position: relative;
                  img{
                    width: 82px;
                    height: 56px;
                    position: absolute;
                    right: 14px;
                    bottom: 7px;
                  }
             }
             .food{
                float: left;
                width: 100px;
                height: 120px;
                margin-left: 2px;
                position: relative;
                   img{
                    width: 53px;
                    height: 53px;
                    position: absolute;
                    right: 8px;
                    bottom: 9px;
                   }
             }
             .kitchen{
                float: right;
                width: 100px;
                height: 120px;
                position: relative;
                      img{
                    width: 73px;
                    height: 31px;
                    position: absolute;
                    right: 8px;
                    bottom: 16px;
                      }
             }
        }
    }
    #choic_special{
          h2{
            width: 100%;
            height: 44px;
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #333333;
            line-height: 44px;
            text-align: center;
          }
          h2::before{
                  content: "";
                  display: inline-block;
                  position: relative;
                  width: 4px;
                  height: 16px;
                  background: #FE3824;
                  left: -6px;
                  top: 2px;
            }
          }
         .chioc_banner{
          width: 100%;
          height: 150px;
            img{
              width: 100%;
              height: 100%;
            }
         }
         .chiod_list{
           width: 100%;
           height: 162px;
           background: #ffffff;
           display: flex;
           justify-content: space-around;
           align-items: center;
               a{
                 display: block;
                 width: 90px;
                 text-align: center;
               }
               h6{
                 font-size: 12px;
                 color: #333333;
                 letter-spacing: -0.29px;
                 line-height: 12px;
               }
               P{
                 margin: 6px 0 10px 0;
                 font-size: 14px;
                 color: #FE3824;
                 letter-spacing: -0.34px;
                 line-height: 14px;
               }
              img{
                width: 90px;
                height: 90px;
              }
         }
   }
    #fory_recommend{
        h2{
          width: 100%;
          height: 46px;
          line-height: 46px;
          text-align: center;
          font-size: 16px;
          color: #333333;
        }
        h2::before{
                  content: "";
                  display: inline-block;
                  position: relative;
                  width: 4px;
                  height: 16px;
                  background: #FE3824;
                  left: -6px;
                  top: 2px;
          }
        .fory_box{
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
              .desc{
                     display: block;
                     width: 163px;
                     height: 32px;
                     font-size: 14px;
                     color: #333333;
                     letter-spacing: -0.34px;
                     line-height: 16px;
                     margin-left: 15px;
                     margin-top: 5px;
                     display: -webkit-box;
                     -webkit-box-orient: vertical;
                     -webkit-line-clamp: 2;
                     overflow: hidden;
                  }
                  
                  p{
                    min-width: 48.56px;
                    height: 22px;
                    font-size: 18px;
                    color: #FE3824;
                    letter-spacing: -0.43px;
                    line-height: 18px;
                    margin: 10px 0 3px 15px;
                  }
                  img{
                        width: 100%;
                        height: 100%;
                    }
                  .pattern{
                     display: block;
                     width: 185px;
                     height: 185px; 
                  }
                  
             .box_left{
                width: 185px;
                height: 264px;
                background: #ffffff; 
                float: left;
             }
             .box_right{
                width: 185px;
                height: 264px;
                background: #ffffff;
                float: right;  
             }
        }
    }
    .footer{
      margin: 14px 0;
      width: 100%;
      border-bottom: 1px dashed #333;
    }
   
</style>

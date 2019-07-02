<template>
<div id="store">

       <van-swipe-cell :right-width="60" :left-width="0" :on-close="onClose"
          v-for="(item,index) in storeList" 
          :key="index"
          :index="item.shopId"
          :id="'_'+item.shopId">
            
            <van-cell class="vanList">
                <div class="shop">
                    <p class="logo">
                      <img :src="item.logo" alt="">
                    </p>
                    <div class="massage">
                      <p>{{item.name}}</p>
                    </div>
                </div>
            </van-cell>
            <van-button
                class="danger"
                square
                slot="right"
                type="danger"
                text="删除"
                @click="dangerAction(item.shopId)"
            />
        </van-swipe-cell>

        <transition name="slide-fade" enter-active-class=" animated fadeIn" leave-active-class=" animated fadeOut" >
          <div role="dialog" class="van-dialog" v-if="showmenu"   aria-labelledby="确定删除吗？" >
            <div class="van-dialog__content">
                <div class="van-dialog__message">
                  确定删除吗？
                </div>
            </div>
            <div class="van-hairline--top van-dialog__footer van-dialog__footer--buttons"  >
              <button @click="cancelAction" class="van-button van-button--default van-button--large van-dialog__cancel">
                <span class="van-button__text">取消</span>
              </button>
              <button @click="deleteAction" class="van-button  van-button--default van-button--large van-dialog__confirm van-hairline--left">
                <span class="van-button__text">确认</span>
              </button>
            </div>
          </div>
        </transition>

        <transition name="slide-fade" enter-active-class=" animated fadeIn" leave-active-class="animated fadeOut" >
          <div class="cover" v-if="show"></div>
        </transition>
        <div class="empty">
                 <p>
                   <img src="../../../assets/img/collect.png" alt="">
                 </p>
                 <span>
                    收藏夹空空一片
                 </span>
        </div>
        <suspend></suspend>

</div>
</template>

<script>
import { constants } from 'crypto';
import Axios from 'axios';
import { setTimeout } from 'timers';
import suspend from "../../../components/suspend"
import QS from 'qs'
export default {
  name:'',
  components:{
      Suspend:suspend
  },
  data(){
    return{
        storeList:[],
        show:false,
        showmenu:false,
    }
  },
  methods: {
    getShopData(){
          Axios.get("http://192.168.1.24:8130/gateway/mobileMemberCenterService/memberCenter/getUserCollectionShop",{
            headers:{
               Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzY1MSIsImlhdCI6MTU2MjA0NzIyMywiZXhwIjoxNTYyMTMzNjIzfQ.x15fIv5zdae5YCmNyM0cffQODUkbMeYSavgVNBRilG2nem5jXGewSymnHUbX91gEuoaYje72vbpIiKmb2dU8GA"
            }
          }).then(res=>{
            this.storeList = res.data.data.map(item=>{
                return{
                logo:item.logo,
                name:item.name,
                shopId:item.shopId,
              }
            })
            // this.vanCellList = res.data.data
            console.log(this.storeList)
            if(this.storeList.length === 0){
                  let empty = document.querySelector(".empty")
                  empty.style.display="block"
              }
          })
      },
    onClose() {
         
    },
    dangerAction(index){
        console.log("确定删除商品吗")
        console.log(index)
        sessionStorage.setItem("index",index)
        this.showmenu = !this.showmenu;
        this.show = !this.show;
    },
    deleteAction(index){
             console.log("确认删除")
             console.log(sessionStorage.index)
             let dom = document.querySelector("#_" + sessionStorage.index)
                  console.log(dom)
                  dom.style.display ="none"

            //  this.storeList.splice(index,1);
             this.showmenu = !this.showmenu;
             this.show = !this.show;
             console.log(this.storeList)

            Axios.post("http://192.168.1.24:8080/gateway/mobileMemberCenterService/memberCenter/deleteUserCollectionShop",
             QS.stringify({shopId: sessionStorage.index}),
               {
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzY1MSIsImlhdCI6MTU2MjA0NzIyMywiZXhwIjoxNTYyMTMzNjIzfQ.x15fIv5zdae5YCmNyM0cffQODUkbMeYSavgVNBRilG2nem5jXGewSymnHUbX91gEuoaYje72vbpIiKmb2dU8GA"
                  }
              }
             ).then(res=>{
                 console.log(res)
                  console.log(res.data.code)
                  
             })

    },
    cancelAction(){
        console.log("取消删除")
        this.showmenu = !this.showmenu;
        this.show = !this.show;
        this.load()
    }
  },
  created(){
      this.getShopData();
  },
  mounted(){
       setTimeout(()=>{

    },1000)
   },
}
</script>

<style lang="scss" scoped>
  #store{
      .van-cell:not(:last-child)::after {
            content: ' ';
            position: absolute;
            pointer-events: none;
            box-sizing: border-box;
            left: 15px;
            right: 0;
            bottom: 0;
            -webkit-transform: scaleY(.5);
            transform: scaleY(.5);
            border-bottom: 1px solid #cccccc;
           }
    .van-dialog{
           z-index: 5;
          //  display: none;
          .van-dialog__message {
                text-align:center;
                padding-right: 80px;
                box-sizing: border-box;
                 }
         }
     
      .vanList{
          width: 100%;
          height: 73px;
           
          .shop{
                display: flex;
                
               .logo{
                width: 44px;
                height: 44px;
                background: #F3F3F3;
                border-radius: 3px;
                  img{
                    width: 100%;
                    height: 100%;
                  }
            }
          }
      }
      .danger{
          height: 73px;
      }
  }
  #store{
       .massage{
                    width:260px;
                    height:53px;
                    padding-left:20px;
                    box-sizing: border-box;
                      p{
                        width: 196px;
                        height: 53px;
                        line-height: 53px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                   
                   }
       }
                .cover{
                      width: 100%;
                      position: fixed;
                      top: 0;
                      height: 100%;
                      left: 0;
                      background-color: rgba(0, 0, 0, 0.7);
                      z-index: 0;
                    }
                .empty{
                      width: 130px;
                      height: 150px;
                      position: fixed;
                      left: 0;
                      right: 0;
                      bottom: 0;
                      top: 0;
                      margin: auto;
                      display: flex;
                      flex-direction: column;
                      justify-content: space-between;
                      align-items: center;
                      display: none;
                   p{
                     width: 100px;
                     height: 90px;
                     margin:0 0 40px 14px;
                       img{
                         width: 100%;
                         height: 100%;
                       }
                   }
                   span{
                     font-size: 14px;
                     color: #999999;
                     display: block;
                     margin-left: 10px;
                   }
                }
  }
</style>


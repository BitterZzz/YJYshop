<template>
<div id="commodity">
       <van-swipe-cell :right-width="60" :left-width="0" :on-close="onClose"
          v-for="(item,index) in vanCellList" 
          :key="index"
          :index="item.productId"
          :id="'_' + item.productId"
          >
            
            <van-cell class="vanList">
                <div class="shop">
                    <p class="logo">
                      <img :src="item.imagePath" alt="">
                    </p>
                    <div class="massage">
                      <p>{{item.productName}}</p>
                      <a>¥{{item.minSalePrice}}</a>
                      <span>{{item.evaluation}}人评价</span>
                      <i style="display:none">{{item.productId}}</i>
                    </div>
                </div>
            </van-cell>
            <van-button
                class="danger"
                square
                slot="right"
                type="danger"
                text="删除"
                @click="dangerAction(item.productId)"
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
import suspend from '../../../components/suspend'
export default {
  name:'',
  components:{
      Suspend:suspend
  },
  data(){
    return{
        vanCellList:[],
        show:false,
        showmenu:false,
    }
  },
  methods: {
    getShopData(){
          Axios.get("http://192.168.1.24:8080/gateway/mobileMemberCenterService/memberCenter/getUserCollectionProduct",{
            headers:{
               Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzY1MSIsImlhdCI6MTU2MTY4NzE4NCwiZXhwIjoxNTYxNzczNTg0fQ.YFl37DraHSlYJFKFlomikTk78Gl64qTa5tfTvP7XI4X6ana9mon9BXcX7VK-i5WVJzPHpHobI9g8GdQNRJUM5Q"
            }
          }).then(res=>{
            this.vanCellList = res.data.data.map(item=>{
                return{
                evaluation:item.evaluation,
                imagePath:item.imagePath,
                minSalePrice:item.minSalePrice,
                productName:item.productName,
                productId:item.productId,
              }
            })
            // this.vanCellList = res.data.data
            // console.log(this.vanCellList)
            if(this.vanCellList.length === 0){
                  let empty = document.querySelector(".empty")
                  empty.style.display="block"
              }
          })
      },
    onClose() {
         
    },
    dangerAction(index){
        console.log("确定删除商品吗")
        // console.log(index)
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
             
             this.showmenu = !this.showmenu;
             this.show = !this.show;
             console.log(this.vanCellList)
             Axios.post("http://192.168.1.24:8080/gateway/mobileMemberCenterService/memberCenter/deleteUserCollectionProduct?productId="+sessionStorage.index,{ },
               {
                  headers: {
                    Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzY1MSIsImlhdCI6MTU2MTY4NzE4NCwiZXhwIjoxNTYxNzczNTg0fQ.YFl37DraHSlYJFKFlomikTk78Gl64qTa5tfTvP7XI4X6ana9mon9BXcX7VK-i5WVJzPHpHobI9g8GdQNRJUM5Q"
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
    },

  },
  created(){
      this.getShopData();

  },
  mounted(){
   
   },
}
</script>

<style lang="scss" scoped>
  #commodity{
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
          height: 115px;
          .shop{
                display: flex;
               .logo{
                width: 115px;
                height: 98px;
                display: flex;
                background: #F3F3F3;
                justify-content: center;
                align-items: center;
                border-radius: 3px;
                  img{
                    width: 80px;
                    height: 63.3px;
                  }
            }
          }
      }
      .danger{
          height: 115px;
      }

  }
  #commodity{
       .massage{
                    width:260px;
                    height: 98px;
                    padding:10px 0 0 20px;
                    box-sizing: border-box;
                      p{
                        width: 196px;
                        height: 14px;
                        line-height: 14px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        margin-bottom: 15px;
                      }
                      a{
                        display: block;
                        margin-bottom: 15px;
                        font-size: 14px;
                        color: #FE3824;
                        line-height: 14px;
                      }
                      span{
                        display: block;
                        font-size: 12px;
                        color: #999999;
                        line-height: 12px;
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


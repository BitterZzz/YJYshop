<template>
<div id="store">

       <van-swipe-cell :right-width="60" :left-width="0" :on-close="onClose"
          v-for="(item,index) in sotreList" 
          :key="index"
          :index="item.shopId">
            
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
</div>
</template>

<script>
import { constants } from 'crypto';
import Axios from 'axios';
import { setTimeout } from 'timers';

export default {
  name:'',
  data(){
    return{
        sotreList:[],
        show:false,
        showmenu:false,
    }
  },
  methods: {
    getShopData(){
          Axios.get("http://192.168.1.24:8130/gateway/mobileMemberCenterService/memberCenter/getUserCollectionShop",{
            headers:{
               Authorization:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMzY1MSIsImlhdCI6MTU2MTUzNjAxOSwiZXhwIjoxNTYxNjIyNDE5fQ.q1XeH8t3E6GcZqeCyQ3NNL4drXn6rXMydoAz7vOqMbH4vePQu42i_rKJXrpEM0lEsezoDGExveMlfy8rwUA1aA"
            }
          }).then(res=>{
            this.sotreList = res.data.data.map(item=>{
                return{
                logo:item.logo,
                name:item.name,
                shopId:item.shopId,
              }
            })
            // this.vanCellList = res.data.data
            console.log(this.sotreList)
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
             let shopId = sessionStorage.index
             console.log(ProductId)
            //  this.vanCellList.splice(index,1);
             this.showmenu = !this.showmenu;
             this.show = !this.show;
             console.log(this.sotreList)

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
                 border-bottom: 1px solid #cccccc;
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
  }
</style>


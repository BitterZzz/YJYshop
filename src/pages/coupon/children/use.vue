<template>
    <div id="use" class="page">
         <div v-for="item in list" :key="item.id"
                class="use-box">
                   <ul class="box-left">
                       <li>￥<span>150</span></li>
                       <p>满150元可用</p>
                   </ul>
                   <ul class="box-right">
                      <em>活动标签</em>
                      <p>全场通用&nbsp;&nbsp;(促销商品除外)</p>
                      <span>有限期至2018-10-10</span>
                      <a href="#"></a>
                      
                   </ul>
         </div>
    </div>
</template>

<script>
export default {
    name:'',
    data(){
            return{
                list:[
                        {id:1,},
                        {id:2,},
                        {id:3,}
                ]
            }
        },
}
</script>

<style lang="scss" scoped>
 #use{
      
      .use-box{
          margin: 10px 15px;
          display: flex;
          background: url(../../../assets/img/grayBg.png) no-repeat;
          background-size: cover;
          .box-left{
              width: 125px;
              height: 100px;
             
                li{
                       color: #fff;
                       padding-top: 15px;
                       width: 100%;
                       text-align: center;
                       font-size: 18px;
                         span{
                            font-size: 42px;
                            letter-spacing: -1.01px;
                            line-height: 42px;
                            text-align: center;
                          }
                }
                p{
                    width: 100%;
                    font-size: 12px;
                    line-height: 20px;
                    padding-top: 10px;
                    text-align: center;
                    letter-spacing: 1.51px;
                    color: #fff;
                }
          }
          .box-right{
              width: 219px;
              height: 100px;
              padding: 15px 10px;
              box-sizing: border-box;
              position: relative;
                em{      
                        display: block;
                        font-size: 6px;
                        height: 17px;
                        line-height: 17px;
                        text-align: center;
                        color: #fff;
                        background: #cccccc;
                        width: 60px;
                        border-radius: 25px;
                        margin-bottom: 10px;
                }
                p{
                    font-size: 14px;
                    color: #333333;
                    line-height: 14px;
                    font-weight: 400;
                    margin-bottom: 15px;
                }
                span{
                    display: block;
                    color: #999;
                    margin: 0;
                    line-height: 20px;
                    font-size: 10px;
                }
                a{
                    position: absolute;
                    display: block;
                    width: 60px;
                    height: 64px;
                    background: url(../../../assets/img/use.png) no-repeat;
                    background-size: cover;
                    right: 0px;
                    top: 0px;
                }

          }
      }
 }
</style>


<template>
<div>

         <div class="suspend" >
                   <a class="hint" @click="selectMenu"><img id="glyphiconSlideImg" src="../assets/img/unfold.png" alt="" /> 导航</a>
                   <transition name="slide-fade"  >
               
                    <ul class="susNav" v-if="show">
                    <a class="hintMenu" @click="selectMenu"><img id="glyphiconSlideImg" src="../assets/img/put.png" alt="" />收起</a>
                      <li>
                        <a href="#"><img src="../assets/img/carts.png" alt="" /></a>
                        <a href="#">购物车</a>
                      </li>
                      <li>
                        <router-link to="/mobile">
                          <a href="#"><img src="../assets/img/home.png" alt="" /></a>
                          <a href="#">首页</a>
                        </router-link>
                      </li>
                      
                        <li>
                          <router-link to="/mobile/login"> 
                          <a href="#"><img src="https://www.eg-live.com/Areas/Mobile/Templates/Default/Images/Navigation/icon_user.png" alt=""/></a>
                          <a href="#">个人中心</a>
                          </router-link>
                        </li>
                     
                    </ul>
                  </transition> 
        </div>
       
           <!-- 遮罩层 -->
          <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
              <div class="cover" v-if="show"></div>
          </transition>
</div>
</template>

<script>
export default {
name:'suspend',
data(){
    return{

     
      show:false,
    }
 },
methods:{
   selectMenu(){
      this.show = !this.show;
       },
    }
}
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .3s;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(160px);
}

 .suspend{
          display: flex;
          cursor: pointer;
          position: fixed;
          right:0px;
          bottom: 100px;
          z-index: 2;
         
         .hint{
             width: 46px;
             height: 40px;
             line-height: 40px;
             background-color: rgba(74,74,74,0.8);
             margin: 10px 0;
             font-size: 11px;
             color: #FFFFFF;
             letter-spacing: 0;
             border-radius: 5px 0px 0px 5px;
             position: fixed;
             right:0px;
             bottom: 100px;

              img{
                width: 11px;
                height: 12px;
                position: relative;
                margin-left: 3px;
                top: 1px;
              }
         }

         .susNav{
           display: flex;
           justify-content: space-around;
           align-items: center;
           background: #ffffff;
           width: 160px;
           height: 60px;
           padding: 10px 0px;
           box-sizing: border-box;
           border-radius: 5px 0px 0px 5px;
           z-index: 3;
           .hintMenu{
              width: 46px;
              height: 40px;
              line-height: 40px;
              background-color: rgba(74,74,74,0.8);
              margin: 10px 0;
              font-size: 11px;
              color: #FFFFFF;
              letter-spacing: 0;
              border-radius: 5px 0px 0px 5px;
              position: absolute;
              left: -46px;
              top: 1px;
                img{
                width: 11px;
                height: 12px;
                position: relative;
                left: -3px;
                top: 1px;
              }
           }
            li{

              text-align: center;
              width: 48px;
              height: 41px;
            }
             a{
                display: block;
                font-size: 10px;
                color: #333333;
                letter-spacing: 0;
                text-align: center;
             }
            img{
               width: 30px;
               height: 30px;
            }
         }
        
    }
    .cover{
    width: 100%;
    position: fixed;
    top: 0;
    height: 100%;
    left: 0;
    background: rgba(0,0,0,0.4);
    z-index: 1;
  }
</style>


<template>
<div>
    <div class="suspend">
                   <a class="hint" @click="selectMenu"><img id="glyphiconSlideImg" src="../assets/img/unfold.png" alt="" /> 导航</a>
                    <transition name="fade" enter-active-class="slideInLeft " leave-active-class="slideInRight">
                    <ul class="susNav" v-if="showMenu">
                      <li>
                        <a href="#"><img src="../assets/img/carts.png" alt="" /></a>
                        <a href="#">购物车</a>
                      </li>
                      <li>
                        <a href="#"><img src="../assets/img/home.png" alt="" /></a>
                        <a href="#">首页</a>
                      </li>
                      
                        <li>
                          <router-link to="/mobile/home"> 
                          <a href="#"><img src="https://www.eg-live.com/Areas/Mobile/Templates/Default/Images/Navigation/icon_user.png" alt=""/></a>
                          <a href="#">个人中心</a>
                          </router-link>
                        </li>
                     
                    </ul>
                      </transition>
        </div>
           <!-- 遮罩层 -->
          <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
              <div class="cover" v-if="showMenu"></div>
          </transition>
</div>
</template>

<script>
export default {
name:'suspend',
data(){
    return{

      showMenu: false,
    }
 },
methods:{
   selectMenu(){
      this.showMenu = !this.showMenu;
   },

    }
}
</script>

<style lang="scss" scoped>
 .suspend{
          display: flex;
          cursor: pointer;
          position: fixed;
          right: 0px;
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
              img{
                width: 11px;
                height: 12px;
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
    position: absolute;
    top: 0;
    height: 2420.86px;
    left: 0;
    background: rgba(0,0,0,0.4);
    z-index: 1;
  }
</style>


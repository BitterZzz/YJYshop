<template>
    <div id="classify">
         <div class="nav">
             <li class="list" v-for="i in 5" :key="i"
             :options="{activeColor: '#DE3B36'}">
                 <h2>家具电器</h2>
             </li>
             
         </div>
        
         <cate-menu/>
    </div>
</template>

<script>
// import  CateNav from './children/cate-nav'
import CateMenu from './children/cate-menu'
export default {
    components:{
        // [CateNav.name]:CateNav,
        [CateMenu.name]:CateMenu
    },
    data(){
        return{
            
        }
    },
    methods:{

    },
    

}
</script>

<style lang="scss" scoped>
 #classify{
     width: 100%;
     height: 100%;
     position: fixed;
      .nav{
         width: 25%;
         height: 255px;
         background: #fff;
         float: left;  
         .list{
             width: 75px;
             height: 50px;
             line-height: 50px;
             border-bottom: 1px solid #CCCCCC;
             text-align: center;
             margin: 0 auto;
            ::before{
                 content: " ";
                 display: block;
                 width: 4px;
                 height: 50px;
                 background: #DE3B36;
                 position: absolute;
                 left: 0;
            }
         }
         .list:nth-of-type(5){
                  border-bottom: none;
              }  
      }
 }
</style>


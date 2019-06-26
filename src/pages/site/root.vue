<template>
    <div id="site">
    <div class="button">添加地址</div>
    <div class="coco">

    
    <div v-for="i in 10" :key="i">添加地址</div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

  #site{
      
      .button{
          width: 100%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          position: fixed;
          bottom: 0;
          left: 0;
          background-image: linear-gradient(90deg, #F00200 0%, #FE4F18 98%);
          font-size: 17px;
          color: #FFFFFF;
      }
      .coco{
       width: 100%;
       height: 100%;
       
       background: #F7F7F7;
      }
  }
</style>


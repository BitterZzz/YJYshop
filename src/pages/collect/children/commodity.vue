<template>
<div id="commodity">


        <van-swipe-cell :right-width="60" :left-width="0" :on-close="onClose">
         
        <van-cell class="vanList">
            <p>123</p>
        </van-cell>
        <van-button
            class="danger"
            square
            slot="right"
            type="danger"
            text="删除"
           
        />
        </van-swipe-cell>
</div>
</template>

<script>
import { constants } from 'crypto';

export default {
  methods: {
    onClose() {
       console.log
    }
  },
  dangerAction(){
      console.log(1223)
  }
}
</script>

<style lang="scss" scoped>
  #commodity{
      .vanList{
          width: 100%;
          height: 115px;
      }
      .danger{
          height: 115px;
      }
  }
</style>


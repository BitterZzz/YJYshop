<template>
        <van-swipe-cell :right-width="60" :left-width="60" :on-close="onClose">
        <!-- <van-button/>
        <van-cell/>
        <van-button/> -->
        </van-swipe-cell>
</template>

<script>

export default {
  methods: {
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？'
          }).then(() => {
            instance.close();
          });
          break;
      }
    }
  }
}
</script>

<style>

</style>

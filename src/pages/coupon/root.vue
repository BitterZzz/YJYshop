<template>
    <div id="cuupon" class="page">
         <van-nav-bar
            title="我的优惠券"
            left-text=""
            right-text=""
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
    </div>
</template>

<script>
export default {
    name:'',
    methods: {
        onClickLeft() {
        Toast('返回');
        },
        onClickRight() {
        Toast('按钮');
        }
    },
}
</script>

<style>

</style>

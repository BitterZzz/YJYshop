<template>
    <div id="pust" class="page">
        <h1>已过期</h1>
        <div class="pust-box">
            <van-card
                num="2"
                price="2.00"
                desc="描述信息"  
                title="商品标题"
                :thumb="imageURL"
                />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #pust{
        width: 100%;
        min-height: 100%;
        background: red;
    }
</style>

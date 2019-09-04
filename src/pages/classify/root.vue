<template>
  <div id="classify">
    <div class="nav">
      <router-link
        tag="li"
        class="list"
        v-for="item in classify"
        :key="item.id"
        :to="item.path"
        active-class="active"
      >
        <h2 >{{item.name}}</h2>
      </router-link>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
    <suspend/>
  </div>
</template>

<script>
import suspend from '../../components/suspend'
export default {
  components:{
      suspend,
  },
  data() {
    return {
      classify: [
        { id: 1, name: "家用电器", path: "/mobile/main" },
        { id: 2, name: "生鲜", path: "/mobile/fresh" },
        { id: 3, name: "粮油调味", path: "/mobile/oil" },
        { id: 4, name: "家具用品", path: "/mobile/furniture" },
        { id: 5, name: "酒类", path: "/mobile/liquor" }
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
#classify {
  width: 100%;
  height: 100%;
   .suspend{
     position: fixed;
   }
  .view {
    width: 76%;
    height: 100%;
  
    position: relative;
    left: 24%;
    overflow: auto;
    border-left: 10px solid #f7f7f7;
    box-sizing: border-box;
  }
  .nav {
    width: 24%;
    height: 255px;
    background: #fff;
    position: fixed;
    left: 0;
    top: 0;
    .active {
      border-left: 2px solid #de3b36;
      color: #de3b36;
    }
    .list:nth-child(5) h2{
        border: none;
    }
    .list {
      width: 80px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      h2 {
        width: 75px;
        position: absolute;

        border-bottom: 1px solid #cccccc;
        left: 8px;
      }
    }
  }
}
</style>


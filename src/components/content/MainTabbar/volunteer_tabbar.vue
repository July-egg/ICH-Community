<template>
  <!-- 这里是老人的底部导航栏 -->
  <div id="elder-tabbar">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/elder/community">
        
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "elder_tabbar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
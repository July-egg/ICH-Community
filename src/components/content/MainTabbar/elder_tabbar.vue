<template>
  <!-- 这里是老人的底部导航栏 -->
  <div id="elder-tabbar">
    <tab-bar>
      <tab-bar-item path="/elder/community">
        <img slot="item-icon" src="@/assets/img/elder/home.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/elder/home_active.png" alt="">
        <div slot="item-text">社区</div>
      </tab-bar-item>
      <tab-bar-item path="/elder/voice" id="voice">
        <img slot="item-icon" src="@/assets/img/elder/voice.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/elder/voice.png" alt="">
      </tab-bar-item>
      <tab-bar-item path="/elder/profile">
        <img slot="item-icon" src="@/assets/img/elder/profile.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/elder/profile_active.png" alt="">
        <div slot="item-text">我的</div>
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
#voice img{
  width: 36px;
  height: 36px;
}
</style>
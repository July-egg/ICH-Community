<template>
  <!-- 这里是志愿者的底部导航栏 -->
  <div id="volunteer-tabbar">
    <tab-bar>
      <tab-bar-item path="/volunteer/home">
        <img slot="item-icon" src="@/assets/img/volunteer/home.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/volunteer/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/volunteer/organization">
        <img slot="item-icon" src="@/assets/img/volunteer/organization.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/volunteer/organization_active.png" alt="">
        <div slot="item-text">机构</div>
      </tab-bar-item>
      <tab-bar-item path="/volunteer/publish" id="publish">
        <img slot="item-icon" src="@/assets/img/volunteer/publish.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/volunteer/publish.png" alt="">
      </tab-bar-item>
      <tab-bar-item path="/volunteer/messages">
        <img slot="item-icon" src="@/assets/img/volunteer/message.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/volunteer/message_active.png" alt="">
        <div slot="item-text">消息</div>
      </tab-bar-item>
      <tab-bar-item path="/volunteer/profile">
        <img slot="item-icon" src="@/assets/img/volunteer/profile.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/volunteer/profile_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "volunteer_tabbar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
#publish img{
  width: 36px;
  height: 36px;
}
</style>
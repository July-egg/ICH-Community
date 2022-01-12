<template>
  <!-- 这里是底部导航栏 -->
  <div id="btm_tabbar">
    <tab-bar>
      <!--  填充具体的tabbar内容并且传入对应的路径值    -->
      <tab-bar-item path="/homepage">
        <img slot="item-icon" src="@/assets/img/home/home.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/home/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/community">
        <img slot="item-icon" src="@/assets/img/community/organization.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/community/organization_active.png" alt="">
        <div slot="item-text">社区</div>
      </tab-bar-item>
      <tab-bar-item path="/games">
        <img slot="item-icon" src="@/assets/img/games/publish.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/games/publish.png" alt="">
      </tab-bar-item>
      <tab-bar-item path="/shopping">
        <img slot="item-icon" src="@/assets/img/shopping/message.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/shopping/message_active.png" alt="">
        <div slot="item-text">商城</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="@/assets/img/profile/profile.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/profile/profile_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "buttom_tabbar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
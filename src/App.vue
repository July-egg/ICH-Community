<template>
  <div id="app">
    <router-view></router-view>
    <!-- ----暂未实现:这里可以考虑使用v-if和v-else来进行老人和志愿者底部导航栏的切换  -->
    <!-- <elder_tabbar/>-->
    <volunteer_tabbar/>
  </div>
</template>

<script>
import elder_tabbar from "@/components/content/MainTabbar/elder_tabbar";
import volunteer_tabbar from "@/components/content/MainTabbar/volunteer_tabbar";

export default {
  name: 'app',
  components: {
    elder_tabbar,
    volunteer_tabbar
  }
}
</script>

<style>

</style>

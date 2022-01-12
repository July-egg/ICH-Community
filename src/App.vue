<template>
  <div id="app">
    <!-- 这里根据当前路由显示对应界面，参考router.js   -->
    <router-view></router-view>
    
    <!-- 底部导航栏   -->
    <buttom_tabbar></buttom_tabbar>
  </div>
</template>

<script>
import buttom_tabbar from "./components/content/ButtomTabbar/buttom_tabbar";

export default {
  name: 'app',
  components: {
    buttom_tabbar
  }
}
</script>

<style>

</style>

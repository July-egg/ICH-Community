<template>
  <div id="tab-bar">
    <!-- 为了避免打乱大的TabBar内的逻辑，这里直接使用slot   -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>

#tab-bar{
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* 搞一个小阴影 */
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
}


</style>
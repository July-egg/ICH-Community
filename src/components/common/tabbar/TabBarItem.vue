<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot  name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>


    <!--  这种方法有问题，因为slot会整个地被替换，active类也就不存在了，故我们用一个div包住它  -->
    <!--  在面对插槽时，我们最好在其外面再包装一层，因为slot中的内容很可能会被替换  -->
    <!--  <slot :class="{active:isActive}" name="item-text"></slot>-->

    <!--  此处采用绑定类方式已经不可取，改为动态绑定style  -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

    <!--    <img src="../../assets/img/btnbar/cloud.png" alt="">-->
    <!--    <div>首页</div>-->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'orange'
    }
  },
  data(){
    return{
      // isActive:false
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      // console.log("itemClick")
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img{
  height: 24px;
  width: 24px;
}

.active{
  color: coral;
}
</style>

<!--
<div class="tab-bar-item">
    <img src="../../assets/img/btnbar/cloud.png" alt="">
    <div>首页</div>
  </div>
  <div class="tab-bar-item">
    <img src="../../assets/img/btnbar/run.png" alt="">
    购物
  </div>
  <div class="tab-bar-item">
    <img src="../../assets/img/btnbar/voice.png" alt="">
    商城
  </div>
-->
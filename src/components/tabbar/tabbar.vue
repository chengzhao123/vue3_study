<template>
  <van-tabbar v-model="active" @change="changeTabBar">
    <van-tabbar-item icon="shop-o">逛逛</van-tabbar-item>
    <van-tabbar-item icon="chat-o">消息</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-o">我的淘宝</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from "vue"
export default {
  name: 'TabBar',
  emits: {
    'changeMenu': null
  },
  setup(props, context) {
    let active = ref(0)
    let changeTabBar = function() {
      context.emit('changeMenu', active)
    }
    return {
      active,
      changeTabBar
    };
  },
};
</script>
<style scoped>
</style>
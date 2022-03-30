<template>
  <van-tabbar v-model="active">
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
  setup() {
    let active = ref(0)
    return {
      active,
    };
  },
};
</script>
<style scoped>
</style>
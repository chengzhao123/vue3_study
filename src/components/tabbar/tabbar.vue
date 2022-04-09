<template>
  <van-tabbar v-model="active" @change="changeTabBar">
    <van-tabbar-item icon="shop-o">逛逛</van-tabbar-item>
    <van-tabbar-item icon="chat-o">消息</van-tabbar-item>
    <template v-if="shopNum > 0">
      <van-tabbar-item icon="shopping-cart-o" :badge="shopNum"
        >购物车</van-tabbar-item
      >
    </template>
    <template v-else>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
    </template>
    <van-tabbar-item icon="user-o">我的淘宝</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "TabBar",
  emits: {
    changeMenu: null,
  },
  setup(props, context) {
    console.log(props);
    let store = useStore();
    let active = ref(0);
    let changeTabBar = function () {
      context.emit("changeMenu", active);
    };
    let shopNum = computed(()=> store.state.cartCount)
    return {
      active,
      changeTabBar,
      shopNum
    };
  },
};
</script>
<style scoped>
</style>
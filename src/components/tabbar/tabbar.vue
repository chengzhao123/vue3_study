<template>
  <van-tabbar v-model="active" @change="changeTabBar">
    <van-tabbar-item icon="shop-o">逛逛</van-tabbar-item>
    <van-tabbar-item icon="chat-o">消息</van-tabbar-item>
    <template v-if="cartNum > 0">
      <van-tabbar-item icon="shopping-cart-o" :badge="cartNum">购物车</van-tabbar-item>
    </template>
    <template v-else>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
    </template>
    <van-tabbar-item icon="user-o">我的淘宝</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref, watch } from "vue"
import { useStore } from 'vuex'
export default {
  name: 'TabBar',
  emits: {
    'changeMenu': null
  },
  setup(props, context) {
    console.log(props)
    let store = useStore()
    let cartNum = ref(store.state.count)
    let active = ref(0)
    let changeTabBar = function() {
      context.emit('changeMenu', active)
    }
    watch(()=> store.state.count, (newV, oldV)=> {
      console.log(oldV)
      if(newV){
        cartNum.value += 1
      } else {
        cartNum.value = 0
      }
    })
    return {
      cartNum,
      active,
      changeTabBar
    };
  },
};
</script>
<style scoped>
</style>
<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <div class="cartInfo">
      <CartItemCom
        v-for="(item, index) in cartList"
        :key="index"
        :cartTitle="item.shopItemTitle"
        :cartTips="item.shopItemTip"
        :cartPrice="item.shopItemPrice"
        :cartCount="item.shopCount"
        :cartIndex="item.shopItemIndex"
      />
    </div>
  </van-pull-refresh>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { Toast } from "vant";
import CartItemCom from "@/components/cartItemCom";
export default {
  name: "CartPage",
  components: {
    CartItemCom,
  },
  setup() {
    let store = useStore();
    let cartList = computed(() => store.state.shopCart);
    let loading = ref(false);
    let onRefresh = () => {
      setTimeout(() => {
        Toast("刷新成功");
        loading.value = false;
      }, 1000);
    };
    return {
      cartList,
      onRefresh,
    };
  },
};
</script>
<style scoped>
.cartInfo {
  min-height: calc(100vh - 95px);
}
</style>
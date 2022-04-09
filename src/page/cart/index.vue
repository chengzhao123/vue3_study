<template>
  <div v-for="(item, index) in cartList" :key="index">
    <CartItemCom
      :cartTitle="item.shopItemTitle"
      :cartTips="item.shopItemTip"
      :cartCount="item.shopItemPrice"
    />
  </div>
</template>
<script>
import { reactive, watch } from 'vue'
import { useStore} from 'vuex'
import CartItemCom from "@/components/cartItemCom";
export default {
  name: "CartPage",
  components: {
    CartItemCom
  },
  setup() {
      let store = useStore()
      let cartList = reactive(store.state.shopCart)
      watch(()=> store.state.shopCart, (newValue, oldValue) => {
          console.log(newValue, oldValue)
            cartList = newValue
      })
      return {
          cartList
      }
  }
};
</script>
<style scoped>
</style>
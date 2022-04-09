<template>
  <div class="cartItem">
    <div class="cartTitle">{{ cartTitle }}</div>
    <div class="cartTips">{{ cartTips }}</div>
    <div class="cartContent">
      <span class="cartPrice">￥{{ cartPrice }}</span>
      <span class="cartNum">
        <van-icon name="minus" size="1rem" @click="removeNum" />
        {{ cartCount }}
        <van-icon name="plus" size="1rem" @click="addNum" />
      </span>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "CartItemCom",
  props: {
    cartTitle: {
      type: String,
      default: "",
    },
    cartTips: {
      type: String,
      default: "",
    },
    cartPrice: {
      type: String,
      default: "",
    },
    cartCount: {
      type: Number,
      default: 0,
    },
    cartIndex: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    let store = useStore();
    let addNum = function () {
      let info = {
        shopItemIndex: props.cartIndex,
        shopItemTitle: props.cartTitle,
        shopItemTip: props.cartTips,
        shopItemPrice: props.cartPrice,
      };
      store.dispatch("changeCartAddNum", info);
    };
    let removeNum = function () {
      let info = {
        shopItemIndex: props.cartIndex,
        shopItemTitle: props.cartTitle,
        shopItemTip: props.cartTips,
        shopItemPrice: props.cartPrice,
      };
      store.dispatch("changeCartRemoveNum", info);
    };
    return {
      addNum,
      removeNum,
    };
  },
};
</script>
<style lang="scss" scoped>
.cartItem {
  background: white;
  border-radius: 6px;
  margin: 6px 6px;
  padding: 12px 6px;
  .cartTitle {
    color: black;
    font-size: 14px;
    font-weight: bolder;
    margin: 6px 4px;
  }
  .cartTips {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
    margin: 6px 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    // -webkit-line-clamp: 1; /*要显示的行数*/
    // -webkit-box-orient: vertical;
  }
  .cartContent {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .cartPrice {
      color: red;
    }
  }
}
</style>
<template>
  <div class="shopItem">
    <div class="shopItemImg">
      <img :src="imgSrc" alt="图片加载中" />
    </div>
    <p class="shopItemTitle">{{ shopItemTitle }}</p>
    <p class="shopItemTip">{{ shopItemTip }}</p>
    <div class="shopItemDesc">
      <span class="shopItemPrice">{{ shopItemPrice }}元</span>
      <span class="shopItemPriceInfo">
        <van-icon name="minus" size="1rem" @click="removeNum" />
        <van-icon name="plus" size="1rem" @click="addNum" />
      </span>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: "ShopItemCom",
  props: {
    imgSrc: {
      type: String,
      default: require("@/assets/logo.png"),
    },
    shopItemTitle: {
      type: String,
      default: "商品标题",
    },
    shopItemTip: {
      type: String,
      default: "商品小标题",
    },
    shopItemPrice: {
      type: String,
      default: "商品价格",
    },
    shopItemIndex: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    let store = useStore()
    let addNum = () => {
      let info = {
        shopItemIndex: props.shopItemIndex,
        shopItemTitle: props.shopItemTitle,
        shopItemTip: props.shopItemTip,
        shopItemPrice: props.shopItemPrice,
      };
      store.dispatch("changeCartAddNum", info);
    };
    let removeNum = () => {
      let info = {
        shopItemIndex: props.shopItemIndex,
        shopItemTitle: props.shopItemTitle,
        shopItemTip: props.shopItemTip,
        shopItemPrice: props.shopItemPrice,
      };
      store.dispatch('changeCartRemoveNum', info)
    };
    return {
      addNum,
      removeNum,
    };
  },
};
</script>
<style lang="scss" scoped>
.shopItem {
  width: calc(50vw - 30px);
  background: white;
  border-radius: 6px;
  position: relative;
  margin: 6px 6px;
  padding: 6px 6px;
  .shopItemImg {
    height: 100px;
    img {
      width: 100%;
      height: 100px;
      border-radius: 6px;
    }
  }
  .shopItemTitle {
    font-size: 20px;
    font-weight: bolder;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 4px 6px;
  }
  .shopItemTip {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 4px 6px;
    // -webkit-line-clamp: 1; /*要显示的行数*/
    // -webkit-box-orient: vertical;
  }
  .shopItemDesc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 6px;
    .shopItemPrice {
      font-size: 14px;
      font-weight: bolder;
      color: black;
    }
    .shopItemPriceInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 6px;
      font-size: 12px;
      .van-badge__wrapper {
        margin: 0 5px;
      }
    }
  }
}
</style>
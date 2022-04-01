<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <div class="info">
      <shopItem
        v-for="(item, index) in shopList"
        :key="index"
        :shopItemTitle="item.shopItemTitle"
        :shopItemTip="item.shopItemTip"
        :shopItemPrice="item.shopItemPrice"
        @click="getOneShopItemInfo(item, index)"
      />
    </div>
  </van-pull-refresh>
</template>

<script>
import { ref } from "vue";
import { Toast } from "vant";
// import useRouter from 'vue-router';
import shopItem from "@/components/shopItemCom";
export default {
  name: "ShopPage",
  components: {
    shopItem,
  },
  setup() {
    let shopList = ref([
      {
        shopItemTitle: "皇家大闸蟹1",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemTitle: "皇家大闸蟹2",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemTitle: "皇家大闸蟹3",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemTitle: "皇家大闸蟹4",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemTitle: "皇家大闸蟹5",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemTitle: "皇家大闸蟹6",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemTitle: "皇家大闸蟹7",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemTitle: "皇家大闸蟹8",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemTitle: "皇家大闸蟹9",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemTitle: "皇家大闸蟹10",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
    ]);
    // let router = useRouter()
    let getOneShopItemInfo = (item, index) => {
      console.log(item, index);
    };
    let loading = ref(false);
    let onRefresh = () => {
      setTimeout(() => {
        Toast("刷新成功");
        loading.value = false;
      }, 1000);
    };
    return {
      shopList,
      getOneShopItemInfo,
      onRefresh,
      loading
    };
  },
};
</script>
<style lang="scss" scoped>
.info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
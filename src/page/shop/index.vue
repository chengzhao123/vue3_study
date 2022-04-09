<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <div class="info">
      <shopItem
        v-for="(item, index) in shopList"
        :key="index"
        :shopItemIndex="item.shopItemIndex"
        :shopItemTitle="item.shopItemTitle"
        :shopItemTip="item.shopItemTip"
        :shopItemPrice="item.shopItemPrice"
      />
    </div>
  </van-pull-refresh>
</template>

<script>
import { reactive, ref } from "vue";
import { Toast } from "vant";
import shopItem from "@/components/shopItemCom";
export default {
  name: "ShopPage",
  components: {
    shopItem,
  },
  setup() {
    let shopList = reactive([
      {
        shopItemIndex: '1',
        shopItemTitle: "皇家大闸蟹1",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemIndex: '2',
        shopItemTitle: "皇家大闸蟹2",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemIndex: '3',
        shopItemTitle: "皇家大闸蟹3",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemIndex: '4',
        shopItemTitle: "皇家大闸蟹4",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemIndex: '5',
        shopItemTitle: "皇家大闸蟹5",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemIndex: '6',
        shopItemTitle: "皇家大闸蟹6",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemIndex: '7',
        shopItemTitle: "皇家大闸蟹7",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemIndex: '8',
        shopItemTitle: "皇家大闸蟹8",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemIndex: '9',
        shopItemTitle: "皇家大闸蟹9",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
      {
        shopItemIndex: '10',
        shopItemTitle: "皇家大闸蟹10",
        shopItemTip: "皇家大闸蟹产自于西伯利亚大冰川",
        shopItemPrice: "999",
      },
    ]);
    let loading = ref(false);
    let onRefresh = () => {
      setTimeout(() => {
        Toast("刷新成功");
        loading.value = false;
      }, 1000);
    };
    return {
      shopList,
      onRefresh,
      loading,
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
  min-height: calc( 100vh - 95px)
}
</style>
<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <div class="info">
      <chatItemCom
        v-for="(item, index) in chatList"
        :key="index"
        :chatPeople="item.chatPeople"
        :chatContent="item.chatContent"
      />
    </div>
  </van-pull-refresh>
</template>

<script>
import { ref } from "vue";
import { Toast } from "vant";
import chatItemCom from "@/components/chatItemCom";
export default {
  name: "ChatPage",
  components: {
    chatItemCom,
  },
  setup() {
    let chatList = ref([
      { chatPeople: "测试1", chatContent: "19798769876" },
      { chatPeople: "测试2", chatContent: "19798769876" },
      { chatPeople: "测试3", chatContent: "19798769876" },
      { chatPeople: "测试4", chatContent: "19798769876" },
    ]);
    let loading = ref(false);
    let onRefresh = () => {
      setTimeout(() => {
        Toast("刷新成功");
        loading.value = false;
      }, 1000);
    };
    return {
      chatList,
      onRefresh,
      loading,
    };
  },
};
</script>
<style scoped>
.info {
  padding: 4px 6px;
  min-height: calc(100vh - 95px);
}
</style>
<template>
  <div class="chatItem">
    <van-swipe-cell>
      <van-cell :title="chatPeople" :value="chatContent" />
      <template #right>
        <van-button square type="danger" text="删除" />
        <van-button square type="primary" text="收藏" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
export default {
  name: "ChatItemCom",
  props: {
    chatPeople: {
      type: String,
      default: "",
    },
    chatContent: {
      type: String,
      default: "",
    },
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
// @vue/compiler-sfc] the >>> and /deep/ combinators have been deprecated. Use :deep() instead.
  :deep() .van-swipe-cell__right {
    right: -1px
  }
</style>
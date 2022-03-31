<template>
  <NavBar>
    <template #left>
      <van-icon name="scan" size="1.5rem" />
    </template>
    <template #center>
      <van-cell-group inset>
        <van-field
          label-width="0rem"
          center
          readonly
          placeholder="3.18购物街"
          size="small"
        />
      </van-cell-group>
    </template>
    <template #right>
      <van-icon name="search" size="1.5rem" />
    </template>
  </NavBar>
</template>
<script>
import NavBar from "./navbar.vue";
export default {
  name: "NavBarCom",
  components: {
    NavBar,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
</style>
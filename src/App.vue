<template>
  <!--顶部导航栏-->
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
  <!--底部导航栏-->
  <TabBar />
</template>

<script>
import NavBar from "./components/navbar/navbar.vue";
import TabBar from "./components/tabbar/tabbar.vue";

export default {
  name: "App",
  components: {
    TabBar,
    NavBar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

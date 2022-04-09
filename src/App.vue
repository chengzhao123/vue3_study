<template>
  <!--顶部导航栏-->
  <div v-if="route.meta.nav == 'one'">
      <NavBarCom />
  </div>
  <!--底部导航栏-->
  <div class="content_app">
    <router-view />
  </div>
  <div v-if="route.meta.tab == 'one'">
      <TabBar @changeMenu="changeMenu" />
  </div>
</template>

<script>
import NavBarCom from "./components/navbar/navbarCom.vue";
import TabBar from "./components/tabbar/tabbar.vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "App",
  components: {
    TabBar,
    NavBarCom,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    let changeMenu = function (msgValue) {
      if (msgValue.value == 0) {
        router.push("/shop");
      } else if (msgValue.value == 1) {
        router.push("/chat");
      }else if (msgValue.value == 2) {
        router.push("/cart");
      }
    };
    return {
      changeMenu,
      router,
      route
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.content_app {
  position: absolute;
  left: 0;
  right: 0;
  top: 45px;
  bottom: 50px;
  overflow-y: scroll;
  box-sizing: border-box;
  background: rgba(233, 229, 229, 0.3);
  padding: 6px 6px;
}
</style>

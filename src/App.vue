<template>
  <!--顶部导航栏-->
  <NavBarCom />
  <!--底部导航栏-->

  <router-view tag="div" class="content_app" />
  <TabBar @changeMenu="changeMenu" />
</template>

<script>
import NavBarCom from "./components/navbar/navbarCom.vue";
import TabBar from "./components/tabbar/tabbar.vue";
import { useRouter } from "vue-router" 
export default {
  name: "App",
  components: {
    TabBar,
    NavBarCom,
  },
  setup() {
    const router = useRouter()
    let changeMenu = function (msgValue) {
      if (msgValue.value == 0) {
        router.push("/shop");
      } else if (msgValue.value == 1) {
        router.push("/chat");
      }
    };
    return {
      changeMenu,
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
  width: 100%;
  height: calc(100vh - 95px);
}
</style>

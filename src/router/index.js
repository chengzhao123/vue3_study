import { createRouter,createWebHashHistory} from "vue-router";
const shop = () => import("@/page/shop")
const chat = () => import("@/page/chat")

const routes = [
  { path: "/", redirect: "/shop" },
  {
    path: "/shop",
    name: "ShopPage",
    component: shop
  },
  {
    path: "/chat",
    name: "ChatPage",
    component: chat
  }
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

import { createRouter,createWebHashHistory} from "vue-router";
const shop = () => import("@/page/shop")
const chat = () => import("@/page/chat")

const routes = [
  { path: "/", redirect: "/shop" },
  {
    path: "/shop",
    name: "ShopPage",
    component: shop,
    meta: {
      nav: 'one',
      tab: 'one'
    }
  },
  {
    path: "/chat",
    name: "ChatPage",
    component: chat,
    meta: {
      nav: 'one',
      tab: 'one'
    }
  }
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import { router } from '@/router'
import 'vant/lib/index.css'
createApp(App).use(Vant).use(router).mount('#app')

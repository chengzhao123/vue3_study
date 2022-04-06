import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import { router } from '@/router'
import { store } from '@/store'
import 'vant/lib/index.css'
var app = createApp(App)
app.use(Vant)
app.use(router)
app.use(store)
app.mount('#app')

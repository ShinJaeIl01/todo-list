import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './routes/index'



createApp(App)
  .use(VueRouter)
  .mount('#app')


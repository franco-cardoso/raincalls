import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import VueGtag from "vue-gtag";

createApp(App).use(VueGtag, {
  config: { id: "G-W8MHNPM82N" }
}).mount("#app");

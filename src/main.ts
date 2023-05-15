import { createApp } from "vue";
import "../public/css/style.css";
import "../public/css/bootstrap.min.css";
import router from "./router/index.ts";
import App from "./App.vue";

createApp(App).use(router).mount("#app");

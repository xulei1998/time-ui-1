import { createApp } from "vue"; //创建app实例的重要函数
import App from "./App.vue"; //app.vue组件的引入
import "./index.scss";
import { router } from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app"); //接受App组件，并把它挂载到div的id为app的盒子上

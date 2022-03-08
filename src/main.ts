import "./lib/gulu.scss";
import "./index.scss";
import { createApp } from "vue"; //创建app实例的重要函数
import App from "./App.vue"; //app.vue组件的引入
import { router } from "./router";
import "github-markdown-css";
import Markdown from "./components/Markdown.vue";

const app = createApp(App);
app.use(router);
app.mount("#app"); //接受App组件，并把它挂载到div的id为app的盒子上
app.component("Markdown", Markdown);

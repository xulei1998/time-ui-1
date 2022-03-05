import { createApp } from "vue"; //创建app实例的重要函数
import App from "./App.vue"; //app.vue组件的引入
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import Lucy from "./components/Lucy.vue";
import Lucy2 from "./components/Lucy2.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    //当用户访问根路径时，渲染Lucy组件
    {
      path: "/",
      component: Lucy,
    },
    {
      path: "/xxx",
      component: Lucy2,
    },
  ],
});
const app = createApp(App);
app.use(router);
app.mount("#app"); //接受App组件，并把它挂载到div的id为app的盒子上

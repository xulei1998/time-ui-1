import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import Intro from "./views/Intro.vue";
import GetStarted from "./views/GetStarted.vue";
import Install from "./views/Install.vue";

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home }, //当用户访问根路径时，渲染Lucy组件
    {
      path: "/doc",
      component: Doc,
      children: [
        //添加Doc.vue的子组件的路由
        { path: "", component: DocDemo }, //Doc默认页面
        { path: "intro", component: Intro }, //介绍页面
        { path: "get-started", component: GetStarted }, //开始页面
        { path: "install", component: Install }, //安装页面
        { path: "switch", component: SwitchDemo }, //Switch组件
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});

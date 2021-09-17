import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/index";
import Login from "../views/login/index";
import Register from "../views/register/index";
import Member from "../views/member/index";
import Orders from "../views/orders/index";
import ShoppingCart from "../views/shoppingCart/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/member",
    name: "Member",
    component: Member,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/shoppingCart",
    name: "ShoppingCart",
    component: ShoppingCart,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import Home from "./pages/home.vue";

import Habilidad from "./pages/habilidad.vue";
import Contacto from "./pages/contacto.vue";



let routes: RouteRecordRaw[] = [
  { name: "Home", path: "/", component: Home },
  
  { name: "Habilidad", path: "/habilidad", component: Habilidad },
  { name: "Contacto", path: "/contacto", component: Contacto },
  
];

let Router = createRouter({
  history: createWebHistory(),
  routes,
});
export default Router;
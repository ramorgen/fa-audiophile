import { createRouter, createWebHistory } from "vue-router"
import store from "@/store"

import Home from "./views/Home.vue"
import Products from "./views/Products.vue"
import ProductDetail from "./views/ProductDetail.vue"
import CheckOut from "./views/CheckOut.vue"

const routes = [
   { name: "home", path: "/", component: Home },
   {
      name: "products",
      path: "/products/:id",
      props: true,
      component: Products,
   },
   {
      name: "detail",
      path: "/detail/:id",
      props: true,
      component: ProductDetail,
   },
   {
      name: "checkout",
      path: "/checkout",
      component: CheckOut,
   },
]

const router = createRouter({
   history: createWebHistory(),
   routes,
   scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
         return savedPosition
      } else {
         return { top: 0, behavior: "smooth" }
      }
   },
})

router.beforeEach((to, from) => {
   // if click on menu while cart or checkout is open
   store.isModal = false
   store.showCart = false
   if (from.fullPath === "/checkout") {
      store.isCheckout = false
   }
})

export default router

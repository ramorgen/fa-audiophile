<template>
   <header
      class="absolute bg-transparent inset-0 h-[97px] mx-6 md:mx-10 lg:mx-[30px] w_1050:mx-[165px]"
   >
      <div
         class="absolute bg-white opacity-20 h-[1px] top-[97px] w-full z-20"
      ></div>
      <MenuMobile v-if="store.wWidth < 769" />
      <MenuDesktop v-else />
      <Cart
         class="absolute w-[327px] w_1000:w-[377px] top-28 right-0"
         v-if="store.showCart"
      />
   </header>

   <main>
      <router-view></router-view>
   </main>

   <footer>
      <MenuMobileContent
         v-if="route.name !== 'home' && store.isCheckout === false"
         class="md:mx-10 w_1050:mx-[100px] w_1200:mx-[165px] mt-[172px] w_1000:mt-[240px]"
      />
      <FooterAbout v-if="store.isCheckout === false" />
      <FooterMenu />
   </footer>
   <ModalContainer class="z-30" />
</template>

<script setup>
   import store from "@/store"
   import d from "./data.json"
   import { useRoute } from "vue-router"
   provide("store", store)

   const route = useRoute()

   onMounted(() => {
      store.setData(d)
   })
</script>

<style>
   .slide-enter-active,
   .slide-leave-active {
      transition: transform 0.3s;
   }

   .slide-enter-from,
   .slide-leave-to {
      /* opacity: 0; */
      transform: translateX(-120%);
   }

   .fade-enter-active,
   .fade-leave-active {
      transition: opacity 0.4s;
   }
   .fade-enter,
   .fade-leave-to {
      opacity: 0;
   }
   #app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }
</style>

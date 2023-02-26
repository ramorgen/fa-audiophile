<template>
   <article class="bg-white rounded-lg mx-6 md_mx-0">
      <div class="mx-8 mt-8 md:mx-12 md:mt-12">
         <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
               <circle fill="#D87D4A" cx="32" cy="32" r="32" />
               <path
                  stroke="#FFF"
                  stroke-width="4"
                  d="m20.754 33.333 6.751 6.751 15.804-15.803"
               />
            </g>
         </svg>
         <h3 v-if="store.width > 767" class="mt-8 w-[263px] md:w-[280px]">
            thank you for your order
         </h3>
         <h5 v-else class="mt-8 w-[280px]">thank you for your order</h5>
         <p class="mt-6 opacity-50">
            You will receive an email confirmation shortly.
         </p>
         <div class="mt-6 md:mt-8 flex flex-col md:flex-row w-full">
            <div class="bg-light_grey rounded-t-lg md:rounded-l-lg">
               <div
                  class="mt-6 mx-6 md:w-[198px]"
                  v-for="(item, index) in store.cart"
                  :key="index"
               >
                  <div
                     v-if="index === 0"
                     class="flex flex-row justify-between items-center"
                  >
                     <img
                        class="rounded-lg"
                        width="50"
                        height="50"
                        :src="item.image"
                        alt="Product image"
                     />
                     <div class="">
                        <p class="font-bold">{{ item.name }}</p>
                        <p class="text-f14 font-bold opacity-50">
                           $ {{ store.cart[index].priceFormat }}
                        </p>
                     </div>
                     <div class="">x{{ store.cart[index].amount }}</div>
                  </div>
               </div>
               <div v-if="store.cart.length > 0">
                  <hr class="mt-3 mx-6" />
                  <p
                     class="mt-3 text-center text-f12 font-bold opacity-50 mb-6"
                  >
                     and {{ store.cart.length - 1 }} other item(s)
                  </p>
               </div>
               <div v-else class="mt-6"></div>
            </div>
            <div
               class="bg-very_dark rounded-b-lg md:rounded-r-lg flex flex-col justify-center"
            >
               <div class="ml-6 py-4 md:py-0 md:pl-8 pr-[65px]">
                  <p class="opacity-50 text-white">GRAND TOTAL</p>
                  <h6 class="mt-2 text-white">
                     {{ store.cart.grandTotal }}
                  </h6>
               </div>
            </div>
         </div>
         <AppButton
            @click="home()"
            class="mt-6 md:mt-[46px] mb-8 md:mb-12 w-full"
            >Back to home</AppButton
         >
      </div>
   </article>
</template>

<script setup>
   import { useRouter } from "vue-router"
   const router = useRouter()
   const store = inject("store")

   const home = () => {
      store.isOrderConfirmation = false
      store.cart = []
      router.push("/")
   }
</script>

<style scoped></style>

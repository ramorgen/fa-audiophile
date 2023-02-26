<template>
   <article ref="target" class="px-7 bg-white rounded-lg z-40">
      <div v-if="store.cart.length > 0">
         <div class="pt-8 pb-8 flex flex-row justify-between">
            <h6 v-if="props.mode === 'cart'">Cart ({{ store.cart.length }})</h6>
            <h6 v-else>SUMMARY</h6>
            <p
               v-if="props.mode === 'cart'"
               @click="removeAll()"
               class="opacity-50 underline cursor-pointer"
            >
               Remove all
            </p>
         </div>
         <div
            class="relative flex flex-row items-center gap-4 mb-6"
            v-for="(item, index) in store.cart"
            :key="index"
         >
            <img
               class="rounded-lg"
               width="64"
               height="64"
               :src="item.image"
               alt="Product image"
            />
            <div class="sml-4">
               <p class="font-bold">{{ item.name }}</p>
               <p class="text-f14 font-bold opacity-50">$ {{ price(index) }}</p>
            </div>
            <AppPlusMinus
               v-if="props.mode === 'cart'"
               class="absolute right-0"
               @clicked="pmClicked"
               mode="cart"
               :index="index"
            />
            <div v-else class="absolute right-1">
               x{{ store.cart[index].amount }}
            </div>
         </div>
         <div class="mt-8 flex flex-row justify-between items-center">
            <p class="opacity-50">TOTAL</p>
            <p class="text-f18 font-bold">{{ total() }}</p>
         </div>
         <div
            v-if="props.mode === 'checkout'"
            class="mt-2 flex flex-row justify-between items-center"
         >
            <p class="opacity-50">SHIPPING</p>
            <p class="text-f18 font-bold">$ 50</p>
         </div>
         <div
            v-if="props.mode === 'checkout'"
            class="mt-2 flex flex-row justify-between items-center"
         >
            <p class="opacity-50">VAT (INCLUDED)</p>
            <p class="text-f18 font-bold">{{ vat() }}</p>
         </div>
         <div
            v-if="props.mode === 'checkout'"
            class="mt-8 flex flex-row justify-between items-center"
         >
            <p class="opacity-50">GRAND TOTAL</p>
            <p class="text-f18 text-strong_brown font-bold">
               {{ grandTotal() }}
            </p>
         </div>

         <AppButton @click="checkout()" class="mt-6 mb-8 w-full">{{
            btnText
         }}</AppButton>
      </div>
      <div v-else class="h-[200px] grid place-content-center">
         <h6>Your cart is empty</h6>
      </div>
   </article>
</template>

<script setup>
   import { useRouter } from "vue-router"
   import { onKeyStroke } from "@vueuse/core"
   import { onClickOutside } from "@vueuse/core"

   const router = useRouter()
   const store = inject("store")
   const emit = defineEmits(["validate"])

   const props = defineProps({
      mode: {
         type: String,
         default: "cart",
      },
   })

   const removeAll = () => {
      store.cart = []
   }

   const btnText = computed(() => {
      return props.mode === "cart" ? "checkout" : "continue & pay"
   })

   const price = (index) => {
      return store.formatPrice(store.cart[index].priceRaw)
   }

   const total = (mode = 0) => {
      let sum = store.cart.reduce(
         (total, el) => (total += el.priceRaw * el.amount),
         0
      )
      return mode == 0 ? "$ " + store.formatPrice(sum) : sum
   }

   const vat = () => {
      let sum = store.cart.reduce(
         (total, el) => (total += el.priceRaw * el.amount),
         0
      )
      return "$ " + store.formatPrice((sum * 0.2).toFixed())
   }

   const grandTotal = () => {
      let gt = 50 + parseInt(total(1))
      store.cart.grandTotal = "$ " + store.formatPrice(gt)
      return store.cart.grandTotal
   }

   const pmClicked = ({ amount, index }) => {
      if (index >= 0) {
         store.cart[index].amount = amount // the current item
      }
   }

   const checkout = () => {
      if (props.mode === "cart") {
         router.push("/checkout")
         store.isCheckout = true
         store.isModal = false
         store.showCart = false
      } else {
         emit("validate")
      }
   }

   const close = () => {
      store.showCart = false
      store.isModal = false
   }

   onKeyStroke("Escape", (e) => {
      close()
   })
   const target = ref(null)
   onClickOutside(target, (e) => {
      if (router.currentRoute.value.path !== "/checkout") {
         close()
      }
   })
</script>

<style scoped></style>

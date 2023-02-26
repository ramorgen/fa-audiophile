<template>
   <section>
      <div class="relative h-[97px] bg-black"></div>
      <div
         class="mt-4 md:mt-[79px] mx-6 md:mx-10 w_1100:mx-[70px] w_1200:mx-[100px] w_1350:mx-[165px]"
      >
         <a
            class="hover:text-strong_brown hover:font-bold"
            @click="router.back()"
            href="#"
            >Go Back</a
         >

         <article
            class="mt-6 mx-6 md:mt-[56px] md:mx-0 flex flex-col w_768:flex-row w_768:items-center"
         >
            <div class="w_768:w-1/2">
               <ProductImage :data="data.image" />
            </div>
            <div class="mt-8 w_768:w-1/2 w_768:mt-0">
               <div
                  class="text-left w_768:w-[300px] w_900:w-[360px] w_768:ml-[40px] w_1000:w-[445px] w_1200:ml-[125px]"
               >
                  <p v-if="data.new === true" class="_overline">new product</p>
                  <h2 v-if="store.wWidth > 767" class="mt-6">
                     {{ data.name }}
                  </h2>
                  <h4 v-else class="mt-6">{{ data.name }}</h4>
                  <p class="mt-6 opacity-50">
                     {{ data.description }}
                  </p>
                  <h6 class="mt-6 md:mt-8">$ {{ price }}</h6>
                  <div class="mt-8 md:mt-12 flex items-center">
                     <AppPlusMinus ref="pm" />
                     <AppButton
                        @click="addCart()"
                        type=""
                        class="-mr-4 md:-mr-0 ml-4"
                        >add to cart
                     </AppButton>
                  </div>
               </div>
            </div>
         </article>
         <article class="mt-[88px] flex flex-col md:flex-row md:mt-[158px]">
            <div class="md:w-[635px]">
               <h3>Features</h3>
               <p
                  class="mt-8 opacity-50"
                  v-html="data.features.replace('\n\n', '<br><br>')"
               ></p>
            </div>
            <div class="mt-[88px] md:mt-0 md:ml-[125px]">
               <h3 class="mb-8">In the box</h3>
               <div
                  class="mt-2 flex"
                  v-for="(item, index) in data.includes"
                  :key="index"
               >
                  <p class="text-strong_brown font-bold">
                     {{ item.quantity }}x
                  </p>
                  <p class="opacity-50 ml-5">
                     {{ item.item }}
                  </p>
               </div>
            </div>
         </article>
         <article
            class="mt-[88px] md:mt-[160px] flex flex-col md:flex-row gap-8"
         >
            <div class="flex flex-col gap-8">
               <ProductImage :data="data.gallery.first" />
               <ProductImage :data="data.gallery.second" />
            </div>
            <div>
               <ProductImage :data="data.gallery.third" />
            </div>
         </article>
         <article class="mt-[120px] md:mt-[160px]">
            <h3 class="text-center">you may also like</h3>
            <div class="flex flex-col md:flex-row gap-[30px]">
               <div
                  class="mt-[64px]"
                  v-for="(item, index) in data.others"
                  :key="index"
               >
                  <div class="flex flex-col items-center">
                     <ProductImage :data="item.image" />
                     <h5 class="mt-6">{{ item.name }}</h5>
                     <AppButton @click="itemClicked(index)" class="mt-8"
                        >see product</AppButton
                     >
                  </div>
               </div>
            </div>
         </article>
      </div>
   </section>
</template>

<script setup>
   import { useRouter } from "vue-router"
   const store = inject("store")
   const props = defineProps({
      id: String,
   })

   const router = useRouter()
   const pm = ref(null) // ref for AppPlusMinus to get the amount
   const data = ref()

   watch(
      () => props.id,
      () => {
         if (pm.value !== null) {
            pm.value.amount = 1
         }
         data.value = store.data.find((el) => el.id == props.id)
      },
      { immediate: true }
   )

   const price = computed(() => {
      return store.formatPrice(data.value.price)
   })

   const itemClicked = (index) => {
      let id
      store.data.forEach((el) => {
         if (el.slug === data.value.others[index].slug) {
            id = el.id
         }
      })
      router.push({
         name: "detail",
         params: { id: id },
      })
   }

   const addCart = () => {
      if (pm.value.amount === 0) return

      store.cart.push({
         name: data.value.cartname,
         amount: pm.value.amount,
         image: data.value.image.mobile,
         priceRaw: data.value.price,
         priceFormat: price.value,
      })
   }
</script>

<style scoped></style>

<template>
   <div
      @click="clicked()"
      class="w-[350px] h-[204px] bg-light_grey flex flex-col items-center rounded-lg cursor-pointer"
   >
      <div class="-mt-16">
         <img width="170" :src="props.item.img" alt="" />
      </div>
      <h6 class="pt-4">{{ props.item.title }}</h6>
      <div class="flex flex-row items-center pt-4">
         <p
            class="text-f13 font-bold opacity-50 uppercase leading-5 tracking-[1px] hover:text-strong_brown hover:opacity-100"
         >
            Shop
         </p>
         <svg
            class="ml-3"
            width="8"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M1.322 1l5 5-5 5"
               stroke="#D87D4A"
               stroke-width="2"
               fill="none"
               fill-rule="evenodd"
            />
         </svg>
      </div>
   </div>
</template>

<script setup>
   import { useRouter } from "vue-router"
   const store = inject("store")

   const props = defineProps(["item"])

   const router = useRouter()

   const clicked = () => {
      store.isModal = store.showMenu = false
      router.push({
         name: "products",
         params: { id: props.item.category },
      })
   }
</script>

<style scoped></style>

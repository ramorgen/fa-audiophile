<template>
   <div class="flex flex-col md:flex-row">
      <a
         @click="router.push('/')"
         class="mb-4 md:mb-0 md:mr-[2.125rem] text-f13 text-white font-bold tracking-[2px] uppercase hover:text-strong_brown"
         href="#"
      >
         Home
      </a>
      <a
         @click="clicked('headphones')"
         class="mb-4 md:mb-0 md:mr-[2.125rem] text-f13 text-white font-bold tracking-[2px] uppercase hover:text-strong_brown"
         href="#"
      >
         Headphones
      </a>
      <a
         @click="clicked('speakers')"
         class="mb-4 md:mb-0 md:mr-[2.125rem] text-f13 text-white font-bold tracking-[2px] uppercase hover:text-strong_brown"
         href="#"
      >
         Speakers
      </a>
      <a
         @click="clicked('earphones')"
         class="mb-4 md:mb-0 md:mr-[2.125rem] text-f13 text-white font-bold tracking-[2px] uppercase hover:text-strong_brown"
         href="#"
      >
         Earphones
      </a>
   </div>
</template>

<script setup>
   import { useRouter } from "vue-router"
   const store = inject("store")

   const router = useRouter()
   const clicked = (id) => {
      router.push({
         name: "products",
         params: { id: id },
      })
   }
</script>

<style scoped></style>

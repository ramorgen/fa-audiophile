<template>
   <div
      class="relative flex flex-col items-center lg:block hero h-[37.5rem] md:h-[45.56rem] lg:px-[30px] w_1050:px-[60px] w_1200:px-[165px]"
   >
      <section
         class="pt-[200px] md:pt-[200px] -mt-1 w-[380px] lg:w-[300px] w_1200:w-[380px] text-center lg:text-start lg:ml-0"
      >
         <p class="text-f14 uppercase tracking-[10px] text-white opacity-50">
            New Product
         </p>
         <h1 v-if="store.wWidth > 767" class="text-white pt-6">
            xx99 mark II headphones
         </h1>
         <h3 v-else class="text-white pt-4">xx99 mark II headphones</h3>
         <p class="pt-6 mx-6 opacity-75 text-white tracking-wider leading-6">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
         </p>
         <AppButton @click="clicked('II')" class="mt-10">See Product</AppButton>
      </section>
   </div>
   <MenuMobileContent
      class="pt-[92px] md:mx-10 w_1050:mx-[100px] w_1200:mx-[165px] md:pt-[148px] lg:pt-[200px]"
   />

   <HomeZx9 @clicked="clicked" />
   <HomeZx7 @clicked="clicked" />
   <HomeYx1 @clicked="clicked" />
</template>

<script setup>
   import { useRouter } from "vue-router"
   const store = inject("store")
   const router = useRouter()

   const clicked = (name) => {
      let id = store.findProductId(name)
      if (id) {
         router.push({
            name: "detail",
            params: { id: id },
         })
      }
   }
</script>

<style scoped>
   .hero {
      background-image: url("/home/mobile/image-header.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
   }
   @media (min-width: 768px) {
      .hero {
         background-image: url("/home/tablet/image-header.jpg");
      }
   }
   @media (min-width: 769px) {
      .hero {
         background-image: url("/home/desktop/image-hero.jpg");
      }
   }
</style>

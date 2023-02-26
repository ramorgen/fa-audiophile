<template>
   <section class="bg-very_dark h-[654px] md:h-[400px] lg:h-[365px]">
      <div
         v-if="store.wWidth < 768"
         class="pt-[52px] flex flex-col items-center text-center"
      >
         <SvgLogo />
         <MenuTextItems class="mt-12" />
         <FooterText class="mt-12" />
         <FooterMedia class="mt-12" />
      </div>
      <div v-if="store.wWidth === 768" class="relative pt-[60px] mx-10">
         <SvgLogo />
         <MenuTextItems class="mt-8" />
         <FooterText class="mt-8" />
         <FooterMedia class="absolute top-[315px] right-4" />
      </div>
      <div
         v-if="store.wWidth > 768"
         class="relative lg:mx-4 w_1050:mx-20 w_1200:mx-[165px]"
      >
         <div class="flex justify-between pt-[75px]">
            <SvgLogo />
            <MenuTextItems />
         </div>
         <FooterText class="mt-9 w-[540px]" />
         <FooterMedia class="absolute top-[200px] right-[35px]" />
      </div>
   </section>
</template>

<script setup>
   const store = inject("store")
</script>

<style scoped></style>

<template>
   <section
      class="flex flex-col md:flex-row md:gap-[11px] mx-6 mt-6 md:mx-10 w_850:mx-[30px] w_1000:mx-[60px] w_1200:mx-[100px] w_1350:mx-[165px]"
   >
      <div class="bgImage h-[200px] md:h-[320px] md:w-1/2 rounded-lg"></div>
      <div
         class="bg-light_grey h-[200px] md:h-[320px] md:w-1/2 rounded-lg mt-6 md:mt-0"
      >
         <div class="mt-10 ml-6 md:mt-[100px] md:ml-10 w_1000:ml-[95px]">
            <h4>yx1 earphones</h4>
            <AppButton @click="$emit('clicked', 'yx1')" type="btn5" class="mt-8"
               >SEE PRODUCT</AppButton
            >
         </div>
      </div>
   </section>
</template>

<script setup>
   const store = inject("store")
   const emit = defineEmits(["clicked"])
</script>

<style scoped>
   .bgImage {
      background-image: url("/home/mobile/image-earphones-yx1.jpg");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
   }

   @media (min-width: 768px) {
      .bgImage {
         background-image: url("/home/tablet/image-earphones-yx1.jpg");
      }
   }

   @media (min-width: 850px) {
      .bgImage {
         background-image: url("/home/desktop/image-earphones-yx1.jpg");
      }
   }
</style>

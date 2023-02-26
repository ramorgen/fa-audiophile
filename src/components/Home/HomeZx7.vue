<template>
   <section
      class="bgImage bg-light_grey rounded-lg flex h-[320px] mt-6 mx-6 md:mx-10 md:mr-10 w_850:mx-[30px] w_1000:mx-[60px] w_1200:mx-[100px] w_1350:mx-[165px]"
   >
      <div class="ml-6 mt-[101px] w-[205px] md:ml-[62px] w_1200:ml-[95px]">
         <h4>ZX7 SPEAKER</h4>
         <AppButton @click="$emit('clicked', 'zx7')" type="btn5" class="mt-8"
            >SEE PRODUCT</AppButton
         >
      </div>
   </section>
</template>

<script setup>
   const store = inject("store")
   const emit = defineEmits(["clicked"])
</script>

<style scoped>
   .bgImage {
      background-image: url("/home/mobile/image-speaker-zx7.png");
      background-repeat: no-repeat;
      background-position: bottom right;
      background-size: contain;
   }

   @media (min-width: 768px) {
      .bgImage {
         background-image: url("/home/tablet/image-speaker-zx7.png");
      }
   }

   @media (min-width: 1200px) {
      .bgImage {
         background-image: url("/home/desktop/image-speaker-zx7.png");
      }
   }
</style>

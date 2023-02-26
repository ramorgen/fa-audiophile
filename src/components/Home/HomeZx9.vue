<template>
   <section
      class="relative mt-[119px] h-[600px] mx-6 md:h-[720px] w_850:h-[560px] md:mt-[96px] md:mx-10 w_850:mt-[168px] w_850:mx-[30px] w_1000:mx-[60px] w_1200:mx-[100px] w_1350:mx-[165px] bg-strong_brown rounded-lg overflow-hidden"
   >
      <!-- the circles -->
      <div
         class="circle w-[558px] h-[558px] top-[-119px] md:w-[944px] md:h-[944px] md:bottom-[64px] md:left-[-127px] w_1050:top-[-36px] w_1050:left-[-150px]"
      ></div>
      <div
         class="circle circle2 w-[320px] h-[320px] top-0 md:w-[542px] md:h-[542px] md:top-[-87px] md:left-[74px] w_1050:top-[165px] w_1050:left-[52px]"
      ></div>
      <div
         class="circle circle3 w-[279px] h-[279px] top-[19px] md:w-[472px] md:h-[472px] md:top-[-52px] md:left-[109px] w_1050:top-[200px] w_1050:left-[87px]"
      ></div>
      <!--  -->
      <div
         class="absolute zx9 w-[173px] top-[50px] md:w-[197px] md:top-[48px] md:ml-[247px] w_850:w-[410px] w_850:ml-[40px] w_1000:ml-[60px] w_1200:ml-[100px] w_1350:ml-[117px] w_850:bottom-[-40px]"
      >
         <picture>
            <source
               media="(min-width:850px)"
               srcset="/home/desktop/image-speaker-zx9.png"
            />
            <source
               media="(min-width:768px)"
               srcset="/home/tablet/image-speaker-zx9.png"
            />
            <img
               class="w-full h-full rounded-lg w_850:scale-90"
               src="/home/mobile/image-speaker-zx9.png"
               alt="the zx9 speaker"
            />
         </picture>
      </div>
      <div
         class="absolute zx92 text-white text-center w_850:text-left w-[270px] top-[294px] md:w-[350px] md:left-[171px] w_850:left-auto w_850:right-[10px] w_1200:right-[70px] md:top-[353px] w_850:top-[133px]"
      >
         <h1 v-if="store.wWidth > 767" class="uppercase">ZX9 Speaker</h1>
         <p
            v-else
            class="uppercase text-[38px] font-bold tracking-[2px] leading-[40px]"
         >
            ZX9 Speaker
         </p>
         <p class="text-f15 leading-6 opacity-75 font-medium mt-6">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
         </p>
         <AppButton
            @click="$emit('clicked', 'zx9')"
            type="btn4"
            class="mt-6 md:mt-10"
         >
            SEE PRODUCT
         </AppButton>
      </div>
   </section>
</template>

<script setup>
   const emit = defineEmits(["clicked"])
   const store = inject("store")
</script>

<style scoped>
   .circle {
      @apply absolute border border-white rounded-full  opacity-50;
   }

   @media (max-width: 767px) {
      .circle {
         left: calc((100vw - 48px - 558px) / 2);
      }
      .circle2 {
         left: calc((100vw - 48px - 320px) / 2);
      }
      .circle3 {
         left: calc((100vw - 48px - 279px) / 2);
      }
      .zx9 {
         left: calc((100vw - 48px - 173px) / 2);
      }
      .zx92 {
         left: calc((100vw - 48px - 270px) / 2);
      }
   }
</style>

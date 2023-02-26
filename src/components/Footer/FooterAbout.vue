<template>
   <section
      class="flex flex-col w_1050:flex-row-reverse w_1050:items-center my-[120px] w_1000:my-[160px] px-6 md:px-10 w_1050:px-[165px]"
   >
      <picture>
         <source
            media="(min-width:1050px)"
            srcset="/shared/desktop/image-best-gear.jpg"
         />
         <source
            media="(min-width:768px)"
            srcset="/shared/tablet/image-best-gear.jpg"
         />
         <img
            class="w-full h-full rounded-lg w_1050:w-[540px]"
            src="/shared/mobile/image-best-gear.jpg"
            alt="Man with earphones"
         />
      </picture>
      <div
         class="mt-10 md:mt-[63px] md:px-[58px] w_1050:px-0 w_1050:mt-0 w_1050:w-[445px] w_1050:mr-[125px] text-center w_1050:text-left"
      >
         <p
            class="text-[1.75rem] md:text-[40px] text-black tracking-[1px] font-bold leading-[2.375rem] md:leading-[44px] uppercase"
         >
            Bringing you the <span class="text-strong_brown">best</span> audio
            gear
         </p>
         <p class="mt-8 f-15 font-medium opacity-50 w_1050:leading-6">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
         </p>
      </div>
   </section>
</template>

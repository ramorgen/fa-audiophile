<template>
   <section
      class="absolute inset-0 h-full bg-transparent flex justify-between items-center z-10"
   >
      <SvgHamburger @click="clicked" />
      <SvgLogo class="md:-ml-[410px]" />
      <SvgCart />
      <Transition>
         <div
            v-if="store.showMenu"
            class="absolute md:h-[360px] w-screen bg-white top-[90px] left-[-24px] right-0 md:-ml-10 rounded-b-lg"
         >
            <MenuMobileContent class="mt-24" />
         </div>
      </Transition>
   </section>
</template>

<script setup>
   const store = inject("store")

   const clicked = () => {
      store.isModal = !store.isModal
      store.showMenu = !store.showMenu
   }
</script>

<style scoped>
   .v-enter-active,
   .v-leave-active {
      transition: transform 0.5s ease;
   }

   .v-enter-from,
   .v-leave-to {
      transform: translateX(-100%);
   }
</style>

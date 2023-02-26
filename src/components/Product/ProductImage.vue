<template>
   <picture>
      <source media="(min-width:1000px)" :srcset="data.desktop" />
      <source media="(min-width:768px)" :srcset="data.tablet" />
      <img
         loading="lazy"
         class="rounded-lg"
         :src="data.mobile"
         :alt="data.slug"
      />
   </picture>
</template>

<script setup>
   const store = inject("store")

   const props = defineProps({
      data: {},
   })
</script>

<style scoped></style>

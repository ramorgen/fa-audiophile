<template>
   <div
      class="absolute flex justify-between items-center bg-transparent inset-0 h-full z-10"
   >
      <SvgLogo />
      <MenuTextItems />
      <SvgCart />
   </div>
</template>

<script setup>
   const store = inject("store")
</script>

<style scoped></style>

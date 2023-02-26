<template>
   <section
      v-if="store.isModal"
      class="absolute inset-0"
      style="background-color: rgba(0, 0, 0, 0.5)"
   >
      <div class="h-full flex justify-center" v-if="store.isOrderConfirmation">
         <OrderConfirmation class="absolute bottom-1/2" />
      </div>
   </section>
</template>

<script setup>
   const store = inject("store")
</script>

<style scoped></style>

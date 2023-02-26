<template>
   <div class="flex items-center pl-3">
      <input
         :id="id"
         type="radio"
         value=""
         @update="$emit('update:modelValue', $event.target.value)"
         class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
         :for="id"
         class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
         ><slot></slot>
      </label>
   </div>
</template>

<script setup>
   const store = inject("store")

   const id = parseInt(1e6 * Math.random())
</script>

<style scoped></style>

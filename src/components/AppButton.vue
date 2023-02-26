<template>
   <button
      class="py-[0.937rem] px-[1.875rem] uppercase font-bold text-f13 leading-[1.125rem] tracking-[1px]"
      :class="_class"
   >
      <slot></slot>
   </button>
</template>

<script setup>
   const store = inject("store")
   const props = defineProps({
      type: String,
      default: "btn1",
   })

   const _class = computed(() => {
      if (props.type === "btn2") {
         return "bg-white text-black border border-black hover:bg-black hover:text-white"
      } else if (props.type === "btn3") {
         return "py-0 px-0 text-black  opacity-50 hover:opacity-100 hover:text-strong_brown"
      } else if (props.type === "btn4") {
         return "bg-black text-white hover:bg-[#4C4C4C]"
      } else if (props.type === "btn5") {
         return "text-black border border-black hover:bg-black hover:text-white"
      }
      return "bg-strong_brown text-white md:hover:bg-light_brown active:bg-light_brown"
   })
</script>

<style scoped></style>

<template>
   <article
      class="items-center bg-very_light_grey flex justify-around text-f13 font-bold spy-[15px]"
      :class="_class"
   >
      <div
         @click="clicked(false)"
         class="p-3 opacity-75 hover:opacity-100 hover:text-strong_brown cursor-pointer"
      >
         -
      </div>
      <div>{{ amount }}</div>
      <div
         @click="clicked(true)"
         class="p-3 opacity-75 hover:opacity-100 hover:text-strong_brown cursor-pointer"
      >
         +
      </div>
   </article>
</template>

<script setup>
   const store = inject("store")
   const props = defineProps({
      mode: String,
      index: {
         type: Number,
         default: -1,
      },
   })
   const emit = defineEmits(["clicked"])

   const _class = computed(() => {
      return props.mode === "cart" ? "w-[96px] h-[32px]" : "w-[120px] h-[48px]"
   })

   const amount = ref()
   amount.value = props.index !== -1 ? store.cart[props.index].amount : 1

   const clicked = (plus) => {
      if (plus) {
         amount.value += 1
      } else {
         amount.value = amount.value > 0 ? (amount.value -= 1) : 0
      }
      emit("clicked", { amount: amount.value, index: props.index })
   }

   defineExpose({ amount })
</script>

<style scoped></style>

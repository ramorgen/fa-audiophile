<template>
   <section class="">
      <div class="relative h-[192px] bg-black">
         <h4 class="text-white pt-[122px] text-center">
            {{ items[0].category }}
         </h4>
      </div>
      <ProductItems
         v-for="(item, index) in items"
         :key="index"
         :data="item"
         :index="index"
         :class="_class(index)"
      ></ProductItems>

      <router-view />
   </section>
</template>

<script setup>
   const props = defineProps({
      id: String, //route prop
   })
   const store = inject("store")
   const items = ref([])
   watch(
      () => props.id,
      (newVal) => {
         items.value = [] // important because of Vue's reusing the component instead of creating it every time new!
         if (newVal == "headphones") {
            items.value.push(store.data.find((el) => el.id === 4))
            items.value.push(store.data.find((el) => el.id === 3))
            items.value.push(store.data.find((el) => el.id === 2))
         } else if (newVal === "speakers") {
            items.value.push(store.data.find((el) => el.id === 6))
            items.value.push(store.data.find((el) => el.id === 5))
         } else {
            // earphones
            items.value.push(store.data.find((el) => el.id === 1))
         }
      },
      { immediate: true }
   )

   const _class = (index) => {
      return index === 0 ? "mt-16" : "mt-[120px]"
   }
</script>

<style scoped></style>

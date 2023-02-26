<template>
   <article
      :class="_class()"
      class="flex flex-col mx-6 w_1000:items-center md:mx-10 w_1100:mx-[70px] w_1200:mx-[100px] w_1350:mx-[165px]"
   >
      <picture class="w_1000:w-1/2">
         <source
            media="(min-width:1000px)"
            :srcset="props.data.categoryImage.desktop"
         />
         <source
            media="(min-width:768px)"
            :srcset="props.data.categoryImage.tablet"
         />
         <img
            class="w-full h-full rounded-lg"
            :src="props.data.categoryImage.mobile"
            alt="the zx9 speaker"
         />
      </picture>
      <div class="h-[340px] mt-8 w_1000:w-1/2">
         <div
            :class="_class2()"
            class="text-center w_1000:w-[445px] w_1000:text-left"
         >
            <p v-if="props.data.new === true" class="_overline">new product</p>
            <h2 v-if="store.wWidth > 767" class="mt-6">
               {{ props.data.name }}
            </h2>
            <h4 v-else class="mt-6">{{ props.data.name }}</h4>
            <p class="mt-6 opacity-50">
               {{ props.data.description }}
            </p>
            <AppButton @click="clicked()" type="" class="mt-6"
               >see product</AppButton
            >
         </div>
      </div>
   </article>
</template>

<script setup>
   import { useRouter } from "vue-router"
   const store = inject("store")
   const router = useRouter()

   const props = defineProps({
      data: {},
      index: Number,
   })

   const clicked = () => {
      router.push({
         name: "detail",
         params: { id: props.data.id },
      })
   }

   const _class = () => {
      return props.index === 1 ? "w_1000:flex-row-reverse" : "w_1000:flex-row"
   }

   const _class2 = () => {
      return props.index === 1
         ? "w_1000:mr-[100px] w_1200:mr-[125px]"
         : "w_1000:ml-[40px] w_1200:ml-[125px]"
   }
</script>

<style scoped></style>

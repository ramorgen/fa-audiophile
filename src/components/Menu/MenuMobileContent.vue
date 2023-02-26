<template>
   <div
      class="flex flex-col gap-[80px] place-items-center md:mx-4 md:flex-row md:gap-[10px] lg:gap-[30px]"
   >
      <MenuMobileContentItem :item="item(0)" />
      <MenuMobileContentItem :item="item(1)" />
      <MenuMobileContentItem :item="item(2)" />
   </div>
</template>

<script setup>
   const store = inject("store")

   const item = (i) => {
      if (i == 0) {
         return {
            img: "../../shared/desktop/image-category-thumbnail-headphones.png",
            title: "Headphones",
            category: "headphones",
         }
      } else if (i === 1) {
         return {
            img: "../../shared/desktop/image-category-thumbnail-speakers.png",
            title: "Speakers",
            category: "speakers",
         }
      } else if (i === 2) {
         return {
            img: "../../shared/desktop/image-category-thumbnail-earphones.png",
            title: "Earphones",
            category: "earphones",
         }
      }
   }
</script>

<style scoped></style>

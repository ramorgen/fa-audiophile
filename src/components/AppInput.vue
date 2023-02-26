<template>
   <div>
      <label
         :for="id"
         class="text-f12 text-black font-bold"
         :class="{ 'text-error_red': isError }"
      >
         <slot></slot>
      </label>
      <div class="relative">
         <input
            v-if="attrs.type !== 'textarea'"
            :id="id"
            class="_input h-14"
            :class="_class"
            :value="modelValue"
            :placeholder="ph"
            :type="attrs.type"
            @input="inp"
         />
         <textarea
            v-if="attrs.type === 'textarea'"
            :id="id"
            class="_input"
            rows="5"
            :value="modelValue"
            :placeholder="ph"
            :type="attrs.type"
            @input="inp"
         ></textarea>
         <div
            v-if="isError"
            class="absolute text-f12 font-medium tracking-[-.21px] text-error_red right-2 -top-[32px] bg-transparent"
         >
            <p>{{ errorText() }}</p>
         </div>
      </div>
   </div>
   <!--  @input="$emit('update:modelValue', $event.target.value)" -->
</template>

<script setup>
   import { useAttrs } from "vue"

   const emit = defineEmits(["update:modelValue"])
   const attrs = useAttrs()
   const props = defineProps({
      modelValue: "",
      ph: "",
   })

   const id = parseInt(1e6 * Math.random())
   const isError = ref(false)

   const inp = (e) => {
      if (e.target.value !== "") {
         isError.value = false
      }
      emit("update:modelValue", e.target.value)
   }

   const errorText = () => {
      if (props.controlType === "email" || props.controlType === "number") {
         return "Empty or wrong format"
      }
      return ""
   }

   const _class = computed(() => {
      if (isError.value) {
         return "!border-error_red !border-2"
      } else {
         return ""
      }
   })

   defineExpose({ isError }) //necessary: the flag can set by any parent components
</script>

<style scoped>
   ._input {
      border: 1px solid #cfcfcf;
      border-radius: 8px;
      @apply block w-full  mt-2 pl-3 font-bold text-black text-f14 leading-5 tracking-[-.25px];
   }

   input:active,
   input:focus {
      outline-style: solid;
      outline-color: #d87d4a;
      opacity: 1;
   }

   ::placeholder {
      font-size: 14px;
      color: #000112;
      mix-blend-mode: normal;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: -0.25px;
      opacity: 0.4;
   }
</style>

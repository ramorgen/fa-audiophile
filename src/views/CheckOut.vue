<template>
   <article class="h-full bg-very_light_grey">
      <div class="relative h-[90px] bg-black"></div>
      <a
         @click="router.back()"
         class="block ml-10 mt-4 font-medium opacity-50"
         href="#"
      >
         Go Back
      </a>
      <div class="w_1150:flex flex-row mb-[140px]">
         <div class="mx-6 md:mx-10 md:w-[690px] mt-6 bg-white rounded-lg">
            <div class="pt-6 md:pt-7 ml-6 md:ml-7">
               <h4>checkout</h4>
               <p class="mt-8 md:mt-10 subtitle">billing details</p>
            </div>
            <div class="md:flex md:flex-row md:gap-4">
               <AppInput
                  ref="name"
                  type="text"
                  v-model="store.coData.name"
                  :modelValue="store.coData.name"
                  ph="e.g. Alex Ward"
                  class="mt-4 mx-6 md:mx-0 md:ml-7 md:w-[310px]"
                  >Name</AppInput
               >
               <AppInput
                  ref="email"
                  type="email"
                  v-model="store.coData.email"
                  :modelValue="store.coData.email"
                  ph="e.g. alexei@mail.com"
                  class="mt-4 mx-6 md:mx-0 md:w-[310px]"
                  >Email Address</AppInput
               >
            </div>
            <AppInput
               ref="phone"
               type="number"
               v-model="store.coData.phone"
               :modelValue="store.coData.phone"
               ph="e.g. +1 2025550136"
               class="mt-4 mx-6 md:mx-0 md:ml-7 md:w-[310px]"
               >Phone Number</AppInput
            >
            <p class="mx-6 md:mx-0 md:ml-7 mt-8 md:mt-14 subtitle">
               shipping info
            </p>
            <AppInput
               ref="address"
               type="text"
               class="mt-4 mx-6 md:mx-0 md:ml-7 md:w-[634px]"
               v-model="store.coData.address"
               :modelValue="store.coData.address"
               ph="e.g. 1137 Williams Avenue"
               >Your Address</AppInput
            >
            <div class="md:flex md:flex-row md:gap-4">
               <AppInput
                  ref="zip"
                  v-model="store.coData.zip"
                  :modelValue="store.coData.zip"
                  type="number"
                  ph="e.g. 10001"
                  class="mt-4 mx-6 md:mx-0 md:ml-7 md:w-[310px]"
                  >ZIP Code</AppInput
               >
               <AppInput
                  ref="city"
                  type="text"
                  v-model="store.coData.city"
                  :modelValue="store.coData.city"
                  ph="e.g. New York"
                  class="mt-4 mx-6 md:mx-0 md:w-[310px]"
                  >City</AppInput
               >
            </div>
            <AppInput
               ref="country"
               type="text"
               v-model="store.coData.country"
               :modelValue="store.coData.country"
               ph="e.g. United States"
               class="mt-4 mx-6 md:mx-0 md:ml-7 md:w-[310px]"
               >Country</AppInput
            >
            <p class="mx-6 mt-8 md:mx-0 md:ml-7 md:mt-14 subtitle">
               payment details
            </p>

            <div class="md:flex md:flex-row justify-between">
               <p
                  class="mx-6 mt-4 md:mx-0 md:ml-7 text-f12 font-bold tracking-[-.21px]"
               >
                  Payment Method
               </p>
               <div>
                  <div
                     class="mx-6 md:mx-0 md:mr-[28px] mt-4 h-14 w-[310px] flex items-center border border-[#cfcfcf] rounded-lg focus:border-strong_brown"
                  >
                     <input
                        :id="id"
                        type="radio"
                        value="e-Money"
                        v-model="store.coData.payment"
                        class="accent-strong_brown ml-5"
                        :class="_radio('e-money')"
                     />
                     <label
                        :for="id"
                        class="pl-4 text-f14 font-bold tracking-[-.25px]"
                        >e-Money
                     </label>
                  </div>
                  <div
                     class="mx-6 md:mx-0 mt-4 h-14 w-[310px] flex items-center border border-[#cfcfcf] rounded-lg hover:border-strong_brown"
                  >
                     <input
                        :id="id"
                        type="radio"
                        value="Cash"
                        v-model="store.coData.payment"
                        class="accent-strong_brown ml-5"
                        :class="_radio('Cash')"
                     />
                     <label
                        :for="id"
                        class="pl-4 text-f14 font-bold tracking-[-.25px]"
                        >Cash on delivery
                     </label>
                  </div>
               </div>
            </div>
            <div class="mt-8 pb-8" v-if="store.coData.payment === 'e-Money'">
               <div class="md:flex md:flex-row md:gap-4">
                  <AppInput
                     ref="emNumber"
                     type="number"
                     v-model="store.coData.emNumber"
                     :modelValue="store.coData.emNumber"
                     ph="e.g. 238521993"
                     class="mx-6 md:mx-0 md:ml-7 md:w-[310px]"
                     >e-Money Number</AppInput
                  >
                  <AppInput
                     ref="emPin"
                     type="number"
                     v-model="store.coData.emPin"
                     :modelValue="store.coData.emPin"
                     ph="e.g. 6891"
                     class="mt-4 mx-6 md:mt-0 md:mx-0 md:w-[310px]"
                     >e-Money PIN</AppInput
                  >
               </div>
            </div>
            <div
               v-else
               class="mt-[30px] pb-8 mx-6 md:mx-0 md:ml-7 flex flex-row items-center"
            >
               <svg
                  class="w-full md:w-40"
                  width="48"
                  height="48"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
                     fill="#D87D4A"
                  />
               </svg>
               <p class="pl-4 md:mr-[70px] opacity-50">
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
               </p>
            </div>
         </div>
         <div
            class="mx-6 md:mx-10 md:w-[690px] mt-8 w_1150:mx-0 w_1150:w-[350px]"
         >
            <cart @validate="validate()" mode="checkout" />
         </div>
      </div>
   </article>
</template>

<script setup>
   import { useRouter } from "vue-router"
   const router = useRouter()
   const store = inject("store")

   const id = parseInt(1e6 * Math.random())

   const _radio = (mode) => {
      return mode === store.coData.payment
         ? "!border-strong_brown"
         : "!border-[#cfcfcf]"
   }

   const name = ref(null)
   const email = ref(null)
   const phone = ref(null)
   const address = ref(null)
   const zip = ref(null)
   const city = ref(null)
   const country = ref(null)
   const emNumber = ref(null)
   const emPin = ref(null)

   const emRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
   const intRegExp = /^-?\d+$/
   const phoneRegExp = /^[+][-\d]+$/
   const isValid = ref()

   const validate = () => {
      isValid.value = true
      for (const [key, value] of Object.entries(store.coData)) {
         if (key === "name" && value === "") {
            name.value.isError = true
            isValid.value = false
         }
         if (key === "email" && (value === "" || !emRegExp.test(value))) {
            email.value.isError = true
            isValid.value = false
         }
         if (key === "phone" && (value === "" || !phoneRegExp.test(value))) {
            phone.value.isError = true
            isValid.value = false
         }
         if (key === "address" && value === "") {
            address.value.isError = true
            isValid.value = false
         }
         if (key === "zip" && (value === "" || !intRegExp.test(value))) {
            zip.value.isError = true
            isValid.value = false
         }
         if (key === "city" && value === "") {
            city.value.isError = true
            isValid.value = false
         }
         if (key === "country" && value === "") {
            country.value.isError = true
            isValid.value = false
         }
         if (store.coData.payment === "e-Money") {
            if (
               key === "emNumber" &&
               (value === "" || !intRegExp.test(value))
            ) {
               emNumber.value.isError = true
               isValid.value = false
            }
            if (key === "emPin" && (value === "" || !intRegExp.test(value))) {
               emPin.value.isError = true
               isValid.value = false
            }
         }
      }
      isValid.value = true
      if (isValid.value === true) {
         store.isModal = true
         store.isOrderConfirmation = true
      }
   }
</script>

<style scoped></style>

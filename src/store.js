import { reactive } from "vue"
import { useWindowSize } from "@vueuse/core"
const { width, height } = useWindowSize()
const f = new Intl.NumberFormat("en-us")

const store = reactive({
   version: "1.0.00",
   wWidth: width,
   wHeight: height,
   data: undefined,
   isModal: false,
   showMenu: false,
   showCart: false,
   isCheckout: false,
   isOrderConfirmation: false,
   cart: [],
   coData: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      payment: "e-Money",
      emNumber: "",
      emPin: "",
   },

   setData: function (d) {
      this.data = toRaw(d)
   },

   formatPrice: function (price) {
      return f.format(price)
   },

   findProductId: function (name) {
      let id
      this.data.forEach((item) => {
         if (item.name.includes(name.toUpperCase())) {
            id = item.id
         }
      })
      return id
   },
})
export default store

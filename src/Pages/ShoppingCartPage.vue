<template>
  <Fragment>
    <ShoppingCartContainer></ShoppingCartContainer>
    <button @click="buynow" class="btnbuy btn btn-primary" :disabled="isItems">
      Buy Now
    </button>
  </Fragment>
</template>

<script>
import ShoppingCartContainer from "../components/shopping-cart/ShoppingCartContainer";
import { Fragment } from "vue-fragment";
import router from "@/routes/router.js";
export default {
  name: "ShoppingCartPage",
  components: { ShoppingCartContainer, Fragment },
  methods: {
    buynow() {
      this.$store.state.cart.forEach(function(el){window.dataLayer.push({'event': 'add_event',
       'ecommerce': {
          key: "Purchase",
          segmentation: {
            id: el.id,
            name: el.brand,
            title:el.title,
            category:el.category,
            price:Math.round(el.price)
          },
        }
      });})
      router.push({ path: "/thankyou" });
    },
  },
  computed: {
    isItems() {
      window.console.log(this.$store.state.cart);
      return this.$store.state.cart.length < 1;
    },
  },
};
</script>

<style scoped>
.btnbuy {
  margin-left: 1120px;
  margin-top: 20px;
}
</style>

<template>
  <div>
    <!-- <b-container class="bv-example-row">
      <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container> -->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      controls
      indicators
      background="#ababab"
      img-width="960"
      img-height="350"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide caption="All phones">
        <template v-slot:img>
          <img
            class="d-block w-100 pointer"
            width="960"
            height="555"
            :src="require('@/assets/images/phones/Allphones.jpg')"
            alt="image slot"
            @click="routeTophones(slide)"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide caption="Apple phones">
        <template v-slot:img>
          <img
            class="d-block w-100 pointer"
            width="960"
            height="555"
            :src="require('@/assets/images/phones/Iphones.jpg')"
            alt="image slot"
            @click="routeTophones(slide)"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4" v-show="isShow">
      Slide #: {{ slide }}<br />
      Sliding: {{ sliding }}
    </p>
  </div>
</template>

<script>
import router from "@/routes/router.js";
export default {
  name: "HomeCarousel",
  data() {
    return {
      slide: 0,
      sliding: null,
      isShow: false,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
      this.slide = slide;
    },
    onSlideEnd(slide) {
      this.sliding = false;
      this.slide = slide;
    },
    routeTophones(slide) {
      if (slide == 0) router.push({ path: "/Allphones" });
      else router.push({ path: "/ApplePhones" });
    },
  }
};
</script>
<style scoped>
.pointer {
  cursor: pointer;
}
</style>
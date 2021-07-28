<template>
  <div class="animation-background">
    <div id="my-animation"></div>
  </div>
</template>

<script>
import lottie from "lottie-web";
import animationData from "@/assets/26215-ok-done.json";

export default {
  mounted() {
    lottie.loadAnimation({
      container: document.getElementById("my-animation"), // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#my-animation {
  width: 20rem;
  height: 20rem;
  position: absolute;
  z-index: 10;
  right: 20%;
  bottom: 15rem;

  @media screen and (max-width: 500px) {
    width: 15rem;
    height: 15rem;
    right: 50%;
    margin-right: calc(-15rem / 2);
  }
}
</style>

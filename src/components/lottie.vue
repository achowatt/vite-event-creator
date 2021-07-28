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
<style>
#my-animation {
  width: 50vw;
  height: 50vw;
  position: fixed;
  z-index: 10;
  left: 50%;
  margin-left: calc(-50vw / 2);
  background: rgb(0, 0, 0);
  border-radius: 50%;
}
</style>

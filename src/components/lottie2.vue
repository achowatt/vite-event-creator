<template>
  <transition name="fade">
    <div class="background">
      <div id="my-animation"></div>
    </div>
  </transition>
</template>

<script>
import lottie from "lottie-web";
import animationData from "@/assets/4879-trumpet-music.json";

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
.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 1s;
}

.background {
  position: fixed;
  background: black;
  width: 100%;
  height: 100vh;
}

#my-animation {
  position: fixed;
  width: 700px;
  height: 700px;
  left: 50%;
  margin-left: calc(-700px / 2);
  top: 50%;
  margin-top: calc(-700px / 2);
  background: rgb(0, 0, 0);
  border-radius: 50%;

  @media screen and (max-width: 400px) {
    width: 350px;
    height: 350px;
    margin-left: calc(-350px / 2);
    margin-top: calc(-350px / 2);
  }
}
</style>

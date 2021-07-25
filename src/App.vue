<template>
  <div>
    <TheNavigation />
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component
          :is="Component"
          :key="$route.path"
          class="main-wrapper"
        ></component>
      </transition>
    </router-view>
    <footer />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: { TheNavigation },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 100%;
  @media screen and (max-width: 740px) {
    font-size: 85%;
  }
}

body {
  /* background: radial-gradient(100% 225% at 100% 0%, #120037 0%, #000000 100%),
    linear-gradient(35deg, #c0ffc7 0%, #17001f 75%),
    linear-gradient(55deg, #2400ff 0%, #000000 100%),
    linear-gradient(
      90deg,
      #ffe037 0%,
      #ffe037 40%,
      #1dcd9f 40%,
      #1dcd9f 50%,
      #088c6f 50%,
      #088c6f 70%,
      #23033c 70%,
      #23033c 100%
    ),
    linear-gradient(
      180deg,
      #ff8fe5 0%,
      #ff8fe5 45%,
      #fbff64 45%,
      #fbff64 60%,
      #76e3ff 60%,
      #76e3ff 80%,
      #6eb6e7 80%,
      #6eb6e7 100%
    ); */
  /* background-blend-mode: screen, overlay, overlay, darken, normal; */
  background: black;
  background-image: url("./src/assets/music_image.svg");
  /* background-repeat: no-repeat;
  background-position: 50% 50%; */
}

.main-wrapper {
  min-height: calc(100vh); //screen height - nav bar
  padding-top: 8rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

h1 {
  font-size: 4rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  @media screen and (max-width: 740px) {
    font-size: 3rem;
  }
}

h2 {
  font-size: 2.5rem;
}

p {
  margin-bottom: 2rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: white;
}

button {
  border: none;
}

//Styling link for active page
.router-link-active {
  color: rgb(255, 187, 0);
}

//Transition
/* .slide-enter-active,
.slide-leave-active {
  transition: all 1s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
} */

.slide-enter-from {
  opacity: 0;
  transform: translateY(100vh);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-100vh);
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 1.2s, transform 0.5s;
}
</style>

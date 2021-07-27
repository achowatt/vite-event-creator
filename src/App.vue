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
  background: black;
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
  font-size: 6rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-family: "Zen Loop", sans-serif;
  @media screen and (max-width: 740px) {
    font-size: 3rem;
  }
}

h2 {
  font-size: 2rem;
  font-family: "Zen Loop", sans-serif;
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
  cursor: pointer;
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

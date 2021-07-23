<template>
  <div>
    <TheNavigation />
    <router-view v-slot="{ Component }">
      <transition name="moveUp" mode="in-out">
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
  font-size: 4rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
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

//Styling link for active page
.router-link-active {
  color: rgb(255, 187, 0);
}

//Transition
.moveUp-enter-from {
  opacity: 0;
  transform: translateY(100vh);
}

.moveUp-leave-to {
  opacity: 0;
  transform: translateY(-100vh);
}

.moveUp-enter-active,
.moveUp-leave-active {
  transition: opacity 1s, transform 0.7s;
}
</style>

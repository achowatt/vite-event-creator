<template>
  <TheNavigation />
  <router-view :key="$route.path"></router-view>
  <footer />
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

h1 {
  font-size: 4rem;
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
</style>

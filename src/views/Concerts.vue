<template>
  <div id="concerts" class="concerts-container">
    <h1>Yay Concerts</h1>
    <router-link
      v-for="{ id, bandName, slug } in concerts"
      :key="id"
      :to="{ name: 'concert.details', params: { id, slug } }"
    >
      <h2>{{ bandName }}</h2>
    </router-link>
  </div>
</template>

<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      concerts: sourceData.concerts,
    };
  },
};
</script>

<style lang="scss" scoped>
.concerts-container {
  background-image: url("https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,w_1367/v1627013128/interiordesign/concert-creator-app/dark-rider-JmVaNyemtN8-unsplash_vzrmag.jpg");
  background-size: cover;
}
</style>

<template>
  <div>
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

<style lang="scss" scoped></style>

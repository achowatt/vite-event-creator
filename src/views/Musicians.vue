<template>
  <div class="musicians-container">
    <div class="content-container">
      <h1>local musicians</h1>
      <div class="musician-list">
        <router-link
          v-for="musician in musicians"
          :to="{ name: 'musician.bio', params: { id: musician.id } }"
          :key="musician.id"
        >
          <ReusableCard :info="musician">
            <h2>{{ musician.fullName }}</h2>
            <p v-for="instrument in musician.instruments" :key="instrument">
              {{ instrument }}
            </p>
          </ReusableCard>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import musicianData from "@/musicians.json";
import ReusableCard from "@/components/ReusableCard.vue";
import { fetchMusicians } from "@/firebase.js";

export default {
  components: { ReusableCard },
  data() {
    return {
      musicians: [],
    };
  },
  created() {
    fetchMusicians().then((musicians) => (this.musicians = musicians));
  },
};
</script>

<style lang="scss" scoped>
.musicians-container {
  background: black;
  background-image: url("https://res.cloudinary.com/djv69vvs7/image/upload/c_fit,h_868,w_1147/v1627064655/interiordesign/concert-creator-app/bayu-martdiansyah-jKhtwPg-ELc-unsplash_ic5yyo.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right top;
  filter: contrast(1.1);
  background-attachment: fixed;
  position: relative;

  h2 {
    font-size: 2rem;
  }

  .content-container {
    max-width: 1200px;
    padding: 2rem;
    margin: 0 auto;
  }

  .musician-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    grid-gap: 1rem;
    grid-row-gap: 1.5rem;
  }
}
</style>

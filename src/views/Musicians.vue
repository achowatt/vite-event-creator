<template>
  <main class="musicians-container">
    <div class="content-container">
      <div class="header-section">
        <h1>local musicians</h1>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search by Name"
          v-model="nameSearch"
        />
      </div>
      <div class="musician-list">
        <router-link
          v-for="musician in findMusicians"
          :to="{
            name: 'musician.bio',
            params: { id: musician.id, slug: musician.slug },
          }"
          :key="musician.id"
        >
          <ReusableCard :info="musician">
            <h2>{{ musician.fullName }}</h2>
            <p>
              {{ musician.instrument }}
            </p>
          </ReusableCard>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
import ReusableCard from "@/components/ReusableCard.vue";
import { fetchMusicians } from "@/firebase.js";

export default {
  components: { ReusableCard },
  data() {
    return {
      musicians: [],
      nameSearch: "",
    };
  },
  computed: {
    findMusicians() {
      if (this.nameSearch === "") {
        return this.musicians;
      } else {
        return this.musicians.filter((musician) => {
          const regex = new RegExp(this.nameSearch, "gi");
          return musician.fullName.match(regex);
        });
      }
    },
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

  .header-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    @media screen and (max-width: 455px) {
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }

    h1 {
      margin-bottom: 0;
    }

    input {
      height: 2rem;
      width: 15rem;
      border: 1px rgba(255, 255, 255, 0.815) solid;
      background: rgba(0, 0, 0, 0.795);
      color: white;
      padding: 0 1rem;
    }
  }

  h2,
  p {
    background: rgba(0, 0, 0, 0.5);
    color: rgb(255, 187, 0);
    padding: 0 0.5rem;
    margin: 0;
  }

  p {
    margin: 0;
    color: white;
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

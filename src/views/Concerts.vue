<template>
  <main id="concerts" class="concerts-container">
    <div class="content-container">
      <div class="heading-container">
        <h1>Upcoming Concerts</h1>
        <select v-model="filter">
          <option disabled value="">Filter by Genre</option>
          <option value="All">All</option>
          <option value="Classical">Classical</option>
          <option value="Jazz">Jazz</option>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div class="concert-list">
        <router-link
          v-for="concertInfo in filteredConcerts"
          :key="concertInfo.id"
          :to="{
            name: 'concert.details',
            params: { id: concertInfo.id, slug: concertInfo.slug },
          }"
        >
          <ReusableCard :info="concertInfo">
            <h2>{{ concertInfo.band }}</h2>
            <p>Genre: {{ concertInfo.genre.join(", ") }}</p>
            <p>{{ concertInfo.date }}</p>
            <p>{{ concertInfo.location }}</p>
            <p>{{ concertInfo.time }}</p>
          </ReusableCard>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
import ReusableCard from "@/components/ReusableCard.vue";
import { fetchConcerts } from "@/firebase.js";
export default {
  components: { ReusableCard },
  data() {
    return {
      concerts: [],
      filter: "All",
    };
  },
  computed: {
    filteredConcerts() {
      if (this.filter != "All") {
        return this.concerts.filter((concert) =>
          concert.genre.includes(this.filter)
        );
      } else {
        return this.concerts;
      }
    },
  },
  created() {
    fetchConcerts().then((concerts) => {
      this.concerts = concerts;
    });
  },
};
</script>

<style lang="scss" scoped>
.concerts-container {
  background: black;
  background-image: url("https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,w_1367/v1627013128/interiordesign/concert-creator-app/dark-rider-JmVaNyemtN8-unsplash_vzrmag.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right top;
  filter: contrast(1.1);
  background-attachment: fixed;
  position: relative;

  .heading-container {
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
    select {
      height: 2rem;
      width: 10rem;
      border: 1px rgba(255, 255, 255, 0.815) solid;
      background: rgba(0, 0, 0, 0.795);
      color: white;
    }
  }
  .content-container {
    max-width: 1200px;
    padding: 2rem;
    margin: 0 auto;
  }
  .concert-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1rem;
    grid-row-gap: 1.5rem;

    h2 {
      background: rgba(0, 0, 0, 0.5);
      color: rgb(255, 187, 0);
      padding: 0 0.5rem;
    }
    p {
      margin-bottom: 0rem;
      background: rgba(0, 0, 0, 0.5);
      padding: 0 0.5rem;
    }
  }
}
</style>

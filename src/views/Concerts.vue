<template>
  <div id="concerts" class="concerts-container">
    <div class="content-container">
      <h1>Upcoming Concerts</h1>
      <div class="concert-list">
        <router-link
          v-for="concertInfo in concerts"
          :key="concertInfo.id"
          :to="{
            name: 'concert.details',
            params: { id: concertInfo.id, slug: concertInfo.slug },
          }"
        >
          <ReusableCard :info="concertInfo">
            <h2>{{ concertInfo.bandName }}</h2>
            <p>Hello Annanu</p>
            <p>{{ concertInfo.date }}</p>
          </ReusableCard>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import ReusableCard from "@/components/ReusableCard.vue";
export default {
  components: { ReusableCard },
  data() {
    return {
      concerts: sourceData.concerts,
    };
  },
};
</script>

<style lang="scss" scoped>
.concerts-container {
  background: black;
  background-image: url("https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,w_1367/v1627013128/interiordesign/concert-creator-app/dark-rider-JmVaNyemtN8-unsplash_vzrmag.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  filter: contrast(1.1);
  background-attachment: fixed;
  position: relative;

  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgb(0, 0, 0),
      rgba(255, 255, 255, 0) 15% 90%,
      rgb(0, 0, 0)
    );
    background-attachment: fixed;
    z-index: -1;
  }

  .content-container {
    max-width: 1200px;
    padding: 2rem;
    margin: 0 auto;
    text-shadow: 2px 2px 10px #000000a8;
  }
  .concert-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1rem;
    grid-row-gap: 1.5rem;
  }
}
</style>

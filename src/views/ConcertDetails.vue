<template>
  <div id="concert-details" class="concert-details-container">
    <div class="content-container">
      <GoBack />
      <h1>{{ concert.bandName }}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt odio
        reprehenderit aliquid fuga excepturi. Incidunt explicabo molestias eum
        non illum reprehenderit. Obcaecati earum atque ducimus, consectetur
        soluta recusandae repellendus reiciendis!
      </p>
      <h2>Meet the members</h2>
      <!-- Concert Details {{ $route.params.id }} -->
      <div
        v-for="member in concert.musicians"
        :key="member.id"
        :id="member.id"
        class="member-section"
      >
        <div>
          <img :src="member.image" :alt="member.name" class="member-image" />
        </div>
        <div class="member-info">
          <h3 class="name">{{ member.fullName }}</h3>
          <p class="bio">
            {{ member.bio }} Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Sunt odio reprehenderit aliquid fuga excepturi. Incidunt
            explicabo molestias eum non illum reprehenderit. Obcaecati earum
            atque ducimus, consectetur soluta recusandae repellendus reiciendis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt odio
            reprehenderit aliquid fuga excepturi. Incidunt explicabo molestias
            eum non illum reprehenderit. Obcaecati earum atque ducimus,
            consectetur soluta recusandae repellendus reiciendis!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
import GoBack from "@/components/GoBack.vue";
export default {
  components: { GoBack },
  computed: {
    concertId() {
      return parseInt(this.$route.params.id);
    },
    concert() {
      return sourceData.concerts.find(
        (concert) => concert.id === this.concertId
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.concert-details-container {
  /* background-image: url("https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,w_1367/v1627013128/interiordesign/concert-creator-app/dark-rider-JmVaNyemtN8-unsplash_vzrmag.jpg");
  background-size: cover; */

  .content-container {
    max-width: 1200px;
    padding: 2rem;
    margin: 0 auto;
    position: relative;
  }

  .member-section {
    display: flex;
    margin-bottom: 5rem;
    align-items: center;

    &:nth-of-type(odd) {
      div:nth-of-type(odd) {
        order: 2;
        padding-left: 5rem;
      }
      div:nth-of-type(even) {
        order: 1;
      }
    }

    &:nth-of-type(even) {
      div:nth-of-type(odd) {
        padding-right: 5rem;
      }
    }

    .member-image {
      width: auto;
      max-height: 400px;
    }
  }

  @media screen and (max-width: 980px) {
    .member-section {
      display: flex;
      flex-direction: column;
      align-items: unset;
      &:nth-of-type(odd) {
        div:nth-of-type(odd) {
          order: unset;
          padding-left: 0;
        }
        div:nth-of-type(even) {
          order: unset;
        }
      }

      &:nth-of-type(even) {
        div:nth-of-type(odd) {
          padding-right: 0;
        }
      }

      .member-image {
        max-width: 100%;
        max-height: none;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>

<template>
  <div id="concert-details" class="concert-details-container">
    <div class="content-container">
      <GoBack />
      <div class="band-image" :style="{ backgroundImage: imageBG }">
        <h1>{{ concert.bandName }}</h1>
        <p>{{ concert.date }}</p>
      </div>
      <div class="about">
        <p>About</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt odio
          reprehenderit aliquid fuga excepturi. Incidunt explicabo molestias eum
          non illum reprehenderit. Obcaecati earum atque ducimus, consectetur
          soluta recusandae repellendus reiciendis!
        </p>
      </div>
      <h2>Meet the musicians</h2>
      <!-- Concert Details {{ $route.params.id }} -->
      <div
        v-for="musician in concert.musicians"
        :key="musician.id"
        :id="musician.id"
        class="musician-section"
      >
        <div>
          <img
            :src="musician.image"
            :alt="musician.name"
            class="musician-image"
          />
        </div>
        <div class="musician-info">
          <h3 class="name">{{ musician.fullName }}</h3>
          <p class="bio">
            {{ musician.bio }} Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sunt odio reprehenderit aliquid fuga excepturi.
            Incidunt explicabo molestias eum non illum reprehenderit. Obcaecati
            earum atque ducimus, consectetur soluta recusandae repellendus
            reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Sunt odio reprehenderit aliquid fuga excepturi. Incidunt
            explicabo molestias eum non illum reprehenderit. Obcaecati earum
            atque ducimus, consectetur soluta recusandae repellendus reiciendis!
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
    imageBG() {
      return `url(${this.concert.image})`;
    },
  },
};
</script>

<style lang="scss" scoped>
.concert-details-container {
  background: black;
  /* background-image: url("https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,w_993/v1627092319/interiordesign/concert-creator-app/jacob-kiesow-XakAFeeQZI0-unsplash_iozekf.jpg"); */
  background-size: cover;
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
    background: rgba(0, 0, 0, 0.37);
    background-attachment: fixed;
    z-index: -1;
  }

  .content-container {
    max-width: 1200px;
    padding: 2rem;
    margin: 0 auto;
    position: relative;
    background: rgba(0, 0, 0, 0.336);
  }

  h1 {
    text-shadow: 2px 2px 10px #000000a8;
  }

  .band-image {
    width: 100%;
    height: 20rem;
    background-size: cover;
    background-position-y: 50%;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 2rem;
    h1 {
      margin-bottom: 0rem;
    }
  }

  h2 {
    margin-top: 3rem;
    /* background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(rgb(255, 208, 0), rgb(255, 174, 0)); */
  }

  .about {
    display: flex;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
    p:first-child {
      flex: 1;
      color: rgb(255, 145, 0);
    }
    p:last-child {
      flex: 10;
    }
  }

  .musician-section {
    display: flex;
    margin-bottom: 5rem;
    align-items: center;
    /* background: rgba(0, 0, 0, 0.493); */

    &:nth-of-type(odd) {
      div:nth-of-type(odd) {
        order: 2;
        padding-left: 5rem;
      }
      div:nth-of-type(even) {
        order: 1;
        /* padding-left: 2rem; */
      }
    }

    &:nth-of-type(even) {
      div:nth-of-type(odd) {
        padding-right: 5rem;
      }
    }

    .musician-image {
      width: auto;
      max-height: 400px;
      border-radius: 5px;
    }
  }

  @media screen and (max-width: 980px) {
    .musician-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 0;

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

      .musician-image {
        max-width: 100%;
        max-height: none;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>

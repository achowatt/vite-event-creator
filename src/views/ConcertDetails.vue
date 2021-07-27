<template>
  <div id="concert-details" class="concert-details-container">
    <div class="band-image" :style="{ backgroundImage: imageBG }">
      <div class="content-container move-bottom">
        <h1>{{ concert.band }}</h1>
      </div>
    </div>
    <div class="content-container">
      <div class="about">
        <p>Location</p>
        <p>
          {{ concert.location }}
        </p>
      </div>
      <div class="about">
        <p>Date</p>
        <p>
          {{ concert.date }}
        </p>
      </div>
      <div class="about">
        <p>Time</p>
        <p>
          {{ concert.time }}
        </p>
      </div>
      <div class="about">
        <p>About</p>
        <p>
          {{ concert.description }} Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Sunt odio reprehenderit aliquid fuga excepturi.
          Incidunt explicabo molestias eum non illum reprehenderit. Obcaecati
          earum atque ducimus, consectetur soluta recusandae repellendus
          reiciendis!
        </p>
      </div>

      <h2>Meet the musicians</h2>

      <div
        v-for="musician in musicians"
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
            {{ musician.about }} Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sunt odio reprehenderit aliquid fuga excepturi.
            Incidunt explicabo molestias eum non illum reprehenderit. Obcaecati
            earum atque ducimus, consectetur soluta recusandae repellendus
            reiciendis! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Sunt odio reprehenderit aliquid fuga excepturi. Incidunt
            explicabo molestias eum non illum reprehenderit. Obcaecati earum
            atque ducimus, consectetur soluta recusandae repellendus reiciendis!
          </p>
          <div id="icon-container">
            <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
            <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
            <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoBack from "@/components/GoBack.vue";
import { getConcert, getMusician } from "@/firebase.js";
export default {
  components: { GoBack },
  data() {
    return {
      concert: {},
      musicians: [],
    };
  },
  computed: {
    imageBG() {
      return `url("${this.concert.bandImage}")`;
    },
  },
  created() {
    getConcert(this.$route.params.id).then((data) => {
      //set concert data
      this.concert = data;
      //set musician data
      for (const m of data.musicians) {
        getMusician(m.id).then((data) => {
          this.musicians.push(data);
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.concert-details-container {
  position: relative;

  .band-image {
    width: 100%;
    height: 40rem;
    max-height: 100vh;
    margin-top: -8rem;
    background-size: cover;
    position: relative;
    z-index: -1;
    background-position: 50% 0%;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0) 0 4%,
        rgba(255, 255, 255, 0)
      );
      z-index: -1;
    }
    .move-bottom {
      position: relative;
      top: 30rem;
      h1 {
        margin: 0;
        text-shadow: 2px 2px 10px #000000a8;
      }
      /* p {
        margin: 0;
        text-shadow: 2px 2px 10px #000000a8;
      } */
    }
  }

  .content-container {
    max-width: 1200px;
    padding: 2rem;
    margin: 0 auto;
    position: relative;
  }

  h2 {
    margin: 2rem 0;
    font-size: 3rem;
  }

  .about {
    display: flex;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
    p {
      margin-bottom: 1rem;
    }
    p:first-child {
      flex: 1;
      color: rgb(255, 145, 0);
    }
    p:last-child {
      flex: 10;
      color: rgb(214, 214, 214);
    }
  }

  .musician-section {
    display: flex;
    margin-bottom: 5rem;
    align-items: center;
    /* background: rgba(0, 0, 0, 0.493); */
    h3 {
      margin-bottom: 1rem;
    }

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

    #icon-container {
      width: 6rem;
      display: flex;
      justify-content: space-between;
      padding: 0;
    }

    .musician-image {
      width: 350px;
      height: 400px;
      border-radius: 5px;
      object-fit: cover;
      object-position: left top;
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

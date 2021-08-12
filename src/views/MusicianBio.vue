<template>
  <main class="musician-details-container">
    <div class="musician-image" :style="{ backgroundImage: imageURL }">
      <div>
        <h1>{{ musician.fullName }}</h1>
        <h2>{{ musician.instrument }}</h2>
      </div>
    </div>
    <div class="content-container">
      <div class="two-column">
        <p>Biography</p>
        <p>
          {{ musician.about }} This information is not real. It is merely a
          placeholder for a website. These images are from unsplash.com (free
          and legal). Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Ipsa itaque laboriosam expedita placeat nam. Consequatur tempore sint
          quod optio rem veritatis adipisci, autem animi, molestias in dolor
          eius! Facere, itaque. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Ipsa itaque laboriosam expedita placeat nam.
          Consequatur tempore sint quod optio rem veritatis adipisci, autem
          animi, molestias in dolor eius! Facere, itaque. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Ipsa itaque laboriosam expedita
          placeat nam. Consequatur tempore sint quod optio rem veritatis
          adipisci, autem animi, molestias in dolor eius! Facere, itaque. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Ipsa itaque
          laboriosam expedita placeat nam. Consequatur tempore sint quod optio
          rem veritatis adipisci, autem animi, molestias in dolor eius! Facere,
          itaque.
        </p>
      </div>
      <div class="two-column">
        <p>Website</p>
        <p>{{ musician.website }}</p>
      </div>
      <div class="two-column">
        <p>Phone</p>
        <p>{{ musician.phone }}</p>
      </div>
      <div class="icon-container">
        <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
        <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
        <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
      </div>
    </div>
  </main>
</template>

<script>
import GoBack from "@/components/GoBack.vue";
import { getMusician } from "@/firebase.js";

export default {
  components: { GoBack },
  data() {
    return {
      musician: {},
    };
  },
  computed: {
    imageURL() {
      return `url("${this.musician.image}")`;
    },
  },
  created() {
    getMusician(this.$route.params.id).then((data) => (this.musician = data));
  },
};
</script>

<style lang="scss" scoped>
.musician-details-container {
  background-size: cover;
  background-position: 50% 0%;
  background-attachment: fixed;
  position: relative;
  z-index: -1;

  .back-to-musicians {
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 5;
    font-weight: bold;
  }
  .musician-image {
    width: 100%;
    height: 50rem;
    max-height: 100vh;
    margin-top: -8rem;
    background-size: cover;
    position: relative;
    background-attachment: fixed;

    & > div {
      max-width: 1200px;
      padding: 2rem;
      margin: 0 auto;
      position: absolute;
      bottom: 0;
      right: 0;
      text-align: right;
      h1 {
        margin: 0;
      }
    }
  }

  .two-column {
    display: flex;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
    p {
      line-height: 2;
    }
    p:first-child {
      flex: 2;
      color: orange;
    }
    p:last-child {
      flex: 10;
    }
  }
  .content-container {
    max-width: 1200px;
    padding: 2rem;
    margin: 0 auto;
    /* background: rgba(0, 0, 0, 0.733); */
  }
  .icon-container {
    width: 7rem;
    display: flex;
    justify-content: space-between;
  }
}
</style>

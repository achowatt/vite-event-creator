<template>
  <main id="home" class="home-container">
    <Lottie2 v-if="animation" />
    <div class="content-wrapper">
      <div>
        <h1 class="find-live-concerts">Find live concerts.</h1>
        <h1 class="meet-musicians">Meet musicians.</h1>
        <h1 class="share-your-passion">Share your passion.</h1>
      </div>
      <div class="button-container">
        <router-link to="/add-new-event" class="button-link btn"
          >Create Event</router-link
        >
      </div>
    </div>
  </main>
</template>

<script>
import Lottie2 from "@/components/lottie2.vue";
export default {
  components: { Lottie2 },
  data() {
    return {
      animation: false,
    };
  },
  mounted() {
    this.animation = true;
    setTimeout(() => (this.animation = false), 2000);
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  background-image: url("https://res.cloudinary.com/djv69vvs7/image/upload/c_scale,w_1443/v1627011288/interiordesign/concert-creator-app/yannis-papanastasopoulos-yWF2LLan-_o-unsplash_c9mur3.jpg");
  background-size: cover;
  filter: contrast(1.5);

  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      padding: 0.5rem;
      text-align: center;
      &.find-live-concerts {
        background: rgba(255, 187, 0, 0.562);
      }
      &.meet-musicians {
        background: rgba(33, 67, 117, 0.5);
      }
      &.share-your-passion {
        background: rgba(192, 21, 21, 0.493);
      }
    }
  }

  .button-container {
    margin: 2rem 0;
    font-size: 1.5rem;
    .button-link {
      border: 1px solid rgb(255, 102, 0);
      border-radius: 5px;
      padding: 0.5rem;
      background: rgba(66, 22, 1, 0.877);
      &:hover {
        background: rgba(240, 49, 49, 0.877);
        color: white;
      }
    }

    .new-profile-btn {
      color: white;
      border: 1px solid white;
      border-radius: 5px;
    }
  }
}
</style>

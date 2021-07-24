<template>
  <div id="home" class="home-container">
    <div class="content-wrapper">
      <div>
        <h1 class="find-live-concerts">Find live concerts.</h1>
        <h1 class="meet-musicians">Meet musicians.</h1>
        <h1 class="share-your-passion">Share your passion.</h1>
      </div>
      <div class="button-container">
        <router-link to="/create-event" class="create-event-btn btn"
          >Create Event</router-link
        >
        <router-link to="/add-new-musician" class="new-profile-btn btn"
          >New Profile</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

  .content-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      padding: 0.5rem;
      &.find-live-concerts {
        background: rgba(161, 158, 156, 0.151);
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
    .btn {
      padding: 0.5rem;
      background: transparent;
      border: none;
    }

    .create-event-btn {
      background: white;
      border-radius: 5px;
      color: black;
      margin-right: 2rem;
    }

    .new-profile-btn {
      color: white;
      border: 1px solid white;
      border-radius: 5px;
    }
  }
}
</style>

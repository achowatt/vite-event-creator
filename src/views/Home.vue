<template>
  <div id="home" class="home-container">
    <div class="content-wrapper">
      <div>
        <h1>Find live concerts.</h1>
        <h1>Meet musicians.</h1>
        <h1>Share music.</h1>
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
  min-height: calc(100vh - 8rem); //screen height - nav bar
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/src/assets/yannis-papanastasopoulos-yWF2LLan-_o-unsplash.jpg");
  background-size: cover;
  filter: contrast(1.5);

  .content-wrapper {
    background: rgba(65, 61, 61, 0.384);
    min-width: 50%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn {
    padding: 0.5rem;
    background: transparent;
    border: none;
  }

  .create-event-btn {
    background: white;
    border-radius: 5px;
    color: black;
  }

  .new-profile-btn {
    color: white;
    border: 1px solid white;
    border-radius: 5px;
  }
}
</style>

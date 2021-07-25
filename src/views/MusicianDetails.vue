<template>
  <div class="musician-details-container">
    <div class="content-container">
      <h1>Musician</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.musician-details-container {
  background: black;
  background-image: url("https://res.cloudinary.com/djv69vvs7/image/upload/c_fit,h_868,w_1147/v1627064655/interiordesign/concert-creator-app/bayu-martdiansyah-jKhtwPg-ELc-unsplash_ic5yyo.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  filter: contrast(1.1);
  background-attachment: fixed;
  position: relative;

  .content-container {
    max-width: 1200px;
    padding: 2rem;
    margin: 0 auto;
  }
}
</style>

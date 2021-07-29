<template>
  <div class="page-not-found-container">
    <div class="content-container">
      <h1>Not Found</h1>
      <p>
        Oops, we couldn't find that page. Try going
        <router-link> to="/">home</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page-not-found-container {
  .content-container {
    max-width: 1200px;
    padding: 2rem;
    margin: 0 auto;
  }
}
</style>

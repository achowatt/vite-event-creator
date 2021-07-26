<template>
  <span class="go-back">
    <button @click="$router.back()">Go Back</button>
  </span>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
  background: none;
  border: none;
  color: rgb(0, 255, 128);
  font-size: 1rem;
  position: fixed;
  top: 2rem;
  right: 3rem;
  z-index: 10;
  cursor: pointer;
}
</style>

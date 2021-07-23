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
  color: white;
  font-size: 1rem;
  position: absolute;
  top: 2rem;
  right: 3rem;
}
</style>

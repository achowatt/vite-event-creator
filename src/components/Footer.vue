<template>
  <div class="footer">
    <div class="content-container">
      <p>Made by Anna Chowattanakul &copy;</p>
      <a href="https://annachowattanakul.ca">Visit my Website</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(rgba(5, 5, 5, 0.11), black);
  z-index: 10;
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p,
    a {
      margin: 0;
      color: rgb(255, 239, 205);
    }
  }
}
</style>

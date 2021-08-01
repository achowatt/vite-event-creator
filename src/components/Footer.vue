<template>
  <div class="footer">
    <div class="content-container">
      <a
        class="visit"
        rel="noopener"
        target="_blank"
        href="https://annachowattanakul.ca"
        >Built &amp; Designed by <span>Anna Chowattanakul</span> &copy;</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 10;
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to top, black, rgba(0, 0, 0, 0.726));
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      margin: 0;
      font-size: 0.9rem;
    }
    span {
      color: rgb(255, 174, 0);
    }
  }
}
</style>

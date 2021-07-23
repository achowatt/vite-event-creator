<template>
  <div id="nav" class="nav-container">
    <div class="nav-width">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/concerts">Concerts</router-link></li>
        <li><router-link to="/musicians">Musicians</router-link></li>
      </ul>
      <router-link to="/create-event" class="button-link"
        >Create Event</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-container {
  display: flex;
  height: 8rem;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.3rem;

  .nav-width {
    display: flex;
    max-width: 1200px;
    justify-content: space-between;
    width: 100%;
    padding: 0 2rem;
  }
  ul {
    display: flex;
    align-items: center;
    li:not(:last-child) {
      margin-right: 2rem;
    }
  }
  .button-link {
    border: 1px solid rgb(255, 102, 0);
    border-radius: 5px;
    padding: 0.5rem;
    &:hover {
      background: rgb(255, 102, 0);
      color: white;
    }
    &.router-link-active {
      background: rgb(255, 102, 0);
      border: 1px solid rgb(255, 102, 0);
      color: white;
    }
  }
}
</style>

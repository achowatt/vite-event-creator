<template>
  <nav>
    <div
      class="nav-button"
      :class="{ opened: navigationToggle }"
      @click="navigationToggle = !navigationToggle"
    ></div>
    <div id="nav" class="nav-container" :class="{ slideIn: navigationToggle }">
      <div class="nav-width">
        <ul>
          <li>
            <router-link to="/" @click="toggleNav()">Home</router-link>
          </li>
          <li>
            <router-link to="/concerts" @click="toggleNav()"
              >Concerts</router-link
            >
          </li>
          <li>
            <router-link to="/musicians" @click="toggleNav()"
              >Musicians</router-link
            >
          </li>
        </ul>
        <router-link to="/add-new-event" class="button-link" @click="toggleNav()"
          >Create Event</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navigationToggle: false,
    };
  },
  methods: {
    toggleNav() {
      if (this.navigationToggle === true) {
        this.navigationToggle = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-button {
  display: none;
}
.nav-container {
  position: fixed;
  width: 100%;
  display: flex;
  min-height: 8rem;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.3rem;
  z-index: 3;
  background: linear-gradient(black, rgba(0, 0, 0, 0.637), rgba(0, 0, 0, 0));
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

@media screen and (max-width: 455px) {
  .nav-button {
    display: block;
    width: 50px;
    height: 50px;
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 4;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -20px;
      margin-top: -5px;
      width: 40px;
      height: 2px;
      background: orange;
      transition: transform 0.3s;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -20px;
      margin-top: 5px;
      width: 40px;
      height: 2px;
      background: orange;
      transition: transform 0.3s;
    }
  }

  .opened {
    &.nav-button::before {
      transform: translateY(5px) rotateZ(45deg);
      transform-origin: 50% 50%;
      transition: transform 0.3s;
    }

    &.nav-button::after {
      transform: translateY(-5px) rotateZ(-45deg);
      transform-origin: 50% 50%;
      transition: transform 0.3s;
    }
  }

  .nav-container {
    height: 100%;
    font-size: 1.2rem;
    background: rgba(0, 0, 0, 0.911);
    transform: translateX(100vw);
    transition: transform 0.3s;
    .nav-width {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100px;
      margin-bottom: 2rem;

      li:not(:last-child) {
        margin-right: 0rem;
      }
    }
    .button-link {
      padding: 0.5rem 0;
      width: 120px;
      text-align: center;
    }

    &.slideIn {
      transform: translateX(0vw);
    }
  }
}
</style>

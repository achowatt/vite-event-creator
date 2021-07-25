<template>
  <div class="overlay-modal" @click="closeBio" ref="overlay">
    <div class="modal-container">
      <div
        class="modal-header"
        :style="{ backgroundImage: imageBG }"
        style="background-repeat: no-repeat"
      >
        <button type="button" class="close-button" ref="closeButton">X</button>
        <h1>{{ info.fullName }}</h1>
        <p>{{ info.instrument }}</p>
      </div>
      <div class="modal-body">
        <h2 class="bio">Biography</h2>
        <div>
          <p class="description">
            {{ info.bio }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BioModal",
  props: ["info"],
  data() {
    return {
      imageBG: `url(${this.info.imageUrl})`,
    };
  },
  methods: {
    closeBio(e) {
      if (
        e.target == this.$refs.overlay ||
        e.target == this.$refs.closeButton
      ) {
        this.$emit("closeBio");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay-modal {
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.753);

  .close-button {
    font-size: 2rem;
    color: rgb(49, 49, 49);
    background: transparent;
    position: absolute;
    top: 0;
    right: 2rem;
    z-index: 99;
    @media screen and (max-width: 900px) {
      position: fixed;
    }
  }

  .modal-container {
    position: absolute;
    left: 50%;
    margin-left: -450px;
    width: 100%;
    max-width: 900px;
    height: 100vh;
    background: white;

    overflow: scroll;
    overscroll-behavior: contain;

    @media screen and (max-width: 900px) {
      max-width: unset;
      margin-left: 0;
      left: 0;
    }

    .modal-header {
      background-repeat: no-repeat;
      background-size: cover;
      height: 500px;
      width: 100%;
      position: relative;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;

      h1 {
        color: white;
        margin-bottom: 0;
      }
      p {
        font-size: 2rem;
        color: white;
        margin-bottom: 0;
      }
    }

    .modal-body {
      padding: 2rem;
      .bio {
        margin-bottom: 1rem;
      }
      .description {
        margin-top: 1rem;
        line-height: 1.5;
      }
    }
  }
}
</style>

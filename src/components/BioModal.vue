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
        <div class="two-column">
          <p>Biography</p>
          <p>
            {{ info.about }} This information is not real. It is merely a
            placeholder for a website. These images are from unsplash.com (free
            and legal). Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Ipsa itaque laboriosam expedita placeat nam. Consequatur
            tempore sint quod optio rem veritatis adipisci, autem animi,
            molestias in dolor eius! Facere, itaque. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Ipsa itaque laboriosam expedita
            placeat nam. Consequatur tempore sint quod optio rem veritatis
            adipisci, autem animi, molestias in dolor eius! Facere, itaque.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            itaque laboriosam expedita placeat nam. Consequatur tempore sint
            quod optio rem veritatis adipisci, autem animi, molestias in dolor
            eius! Facere, itaque. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ipsa itaque laboriosam expedita placeat nam.
            Consequatur tempore sint quod optio rem veritatis adipisci, autem
            animi, molestias in dolor eius! Facere, itaque.
          </p>
        </div>
        <div class="two-column">
          <p>Website</p>
          <p>{{ info.website }}</p>
        </div>
        <div class="two-column">
          <p>Phone</p>
          <p>{{ info.phone }}</p>
        </div>
        <div class="two-column">
          <p>Social Media</p>
          <p></p>
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
      imageBG: `url(${this.info.image})`,
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
  background: rgba(0, 0, 0, 0.858);
  .close-button {
    font-size: 2rem;
    color: rgb(49, 49, 49);
    background: transparent;
    position: absolute;
    top: 1rem;
    right: 2rem;
    z-index: 99;
    @media screen and (max-width: 900px) {
      position: fixed;
    }
  }
  .two-column {
    display: flex;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
    p {
      line-height: 2;
    }
    p:first-child {
      flex: 2;
      color: orange;
    }
    p:last-child {
      flex: 10;
      color: black;
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
    }
  }
}
</style>

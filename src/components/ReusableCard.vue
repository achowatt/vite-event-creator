<template>
  <div
    class="concert-card"
    :style="{ backgroundImage: imageBG }"
    style="background-repeat: no-repeat"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {};
  },
  computed: {
    imageBG() {
      return `url(${this.info.bandImage || this.info.image})`;
    },
  },
};
</script>

<style lang="scss" scoped>
.concert-card {
  background-size: cover;
  height: 200px;
  padding: 1rem;
  border-radius: 5px;
  border: rgba(255, 255, 255, 0.671) solid 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after {
    content: "Click for more info";
    display: grid;
    place-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.863);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::after {
    opacity: 1;
    transition: opacity 0.3s;
  }
}
</style>

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
      return `url(${this.info.image})`;
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
  border: rgba(255, 255, 255, 0.151) solid 1px;
  display: grid;
  place-items: center;
}
</style>

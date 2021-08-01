<template>
  <button
    v-if="chosen"
    class="selected"
    type="button"
    @click="removeGenre(genre)"
  >
    {{ genre }}
  </button>
  <button v-else type="button" class="unselected" @click="addGenre(genre)">
    {{ genre }}
  </button>
</template>

<script>
export default {
  props: ["genre"],
  emits: ["addGenre", "removeGenre"],
  data() {
    return {
      chosen: false,
      selected: "selected",
      unselected: "unselected",
    };
  },
  methods: {
    addGenre(genre) {
      this.$emit("addGenre", genre);
      this.chosen = true;
    },
    removeGenre(genre) {
      this.chosen = false;
      this.$emit("removeGenre", genre);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  height: 3rem;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  display: grid;
  place-items: center;
  color: white;
  &.selected {
    background: rgb(255, 169, 57);
    border: none;
  }
  &.unselected {
    background: rgb(0, 0, 0);
    border: 1px solid white;
    cursor: pointer;
    display: grid;
    place-items: center;
  }
}
</style>

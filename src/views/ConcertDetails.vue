<template>
  <div id="concert-details" class="concert-details-container">
    <GoBack />
    <h1>{{ concert }}</h1>
    Concert Details {{ $route.params.id }}
  </div>
</template>

<script>
import sourceData from "@/data.json";
import GoBack from "@/components/GoBack.vue";
export default {
  components: { GoBack },
  computed: {
    concertId() {
      return parseInt(this.$route.params.id);
    },
    concert() {
      return sourceData.concerts.find(
        (concert) => concert.slug === this.concertId
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.concert-details-container {
  min-height: calc(100vh - 8rem);
}
</style>

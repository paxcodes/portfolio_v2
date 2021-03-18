<template>
  <div class="wrapper" v-on:click="toggleZoom">
    <ZoomImage
      :pose="pose"
      :src="screenshot.src"
      :alt="screenshot.alt"
      class="image"
    />
  </div>
</template>

<script>
import posed from "vue-pose";

export default {
  props: ["screenshot"],
  data: () => ({ isZoomed: false }),
  methods: {
    zoomIn() {
      this.isZoomed = true;
    },
    zoomOut() {
      this.isZoomed = false;
    },
  },
  computed: {
    toggleZoom() {
      return this.isZoomed ? this.zoomOut : this.zoomIn;
    },
    pose() {
      return this.isZoomed ? "zoomedIn" : "zoomedOut";
    },
  },
  components: {
    ZoomImage: posed.img({
      zoomedIn: {
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        flip: true,
      },
      zoomedOut: {
        position: "static",
        width: "auto",
        height: "auto",
        flip: true,
      },
    }),
  },
};
</script>

<style>
.wrapper {
  height: 8rem;
}

.image {
  display: block;
  max-width: 100%;
  margin: auto;
}
</style>
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

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99],
};

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
        transition,
      },
      zoomedOut: {
        position: "static",
        width: "auto",
        height: "auto",
        flip: true,
        transition,
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
<template>
  <div class="wrapper" v-on:click="toggleZoom">
    <Frame :pose="pose" class="frame" />
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
    Frame: posed.div({
      zoomedIn: { opacity: 1, applyAtStart: { display: "block" } },
      zoomedOut: { opacity: 0, applyAtEnd: { display: "none" } },
    }),
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

.frame {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  background: white;
  transform: translateZ(0);
}
</style>
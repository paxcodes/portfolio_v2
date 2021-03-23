<template>
  <div class="wrapper" v-on:click="toggleZoom">
    <Frame :pose="pose" class="frame" />
    <ZoomImage
      :pose="pose"
      :src="screenshot.src"
      :alt="screenshot.alt"
      class="image"
    />
    <figcaption>{{ screenshot.alt }}</figcaption>
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
      window.addEventListener("scroll", this.zoomOut);
      this.isZoomed = true;
    },
    zoomOut() {
      window.removeEventListener("scroll", this.zoomOut);
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
        height: "auto",
        transition,
      },
      zoomedOut: {
        position: "static",
        width: "auto",
        height: "7rem",
        flip: true,
        transition,
      },
    }),
  },
};
</script>

<style>
.wrapper {
  height: 9rem;
  width: 10rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
}

.image {
  display: block;
  height: 7rem;
  max-width: 100%;
  margin: auto;
  align-self: center;
}

figcaption {
  font-style: italic;
  font-size: 11px;
  margin-top: 5px;
}

.image:hover {
  cursor: zoom-in;
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
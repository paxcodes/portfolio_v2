<template>
  <div id="app">
    <img alt="hero-ish image" src="./assets/icon.png" width="250" />
    <HelloWorld msg="Hi! I'm Pax. Let's build something great." />
    <OpenSourceWork />
    <ProjectsList />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import OpenSourceWork from "./components/OpenSourceWork.vue";
import ProjectsList from "./components/ProjectsList.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    OpenSourceWork,
    ProjectsList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 720px;
}
</style>

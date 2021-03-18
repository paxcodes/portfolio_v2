<template>
  <div id="app">
    <img
      alt="hero-ish image"
      src="./assets/icon.png"
      width="250"
      style="margin: auto; display: block"
    />
    <HelloWorld msg="Hi! I'm Pax. Let's build something great." />
    <OpenSourceWork />
    <ProjectsList />
    <Education />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import OpenSourceWork from "./components/oss/OpenSourceWork.vue";
import ProjectsList from "./components/projects/ProjectsList.vue";
import Education from "./components/Education.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    OpenSourceWork,
    ProjectsList,
    Education,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 720px;
  padding: 20px;
}

a {
  color: #3774a6;
  text-decoration: none;
}

h2 {
  text-align: center;
  font-size: 30px;
  margin: 40px 0 20px;
  text-decoration: underline;
  text-underline-position: under;
}

h3 {
  font-size: 24px;
}
</style>

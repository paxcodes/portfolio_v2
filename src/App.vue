<template>
  <div id="app">
    <Navigation />
    <div id="main-container">
      <img
        alt="hero-ish image"
        src="./assets/icon.png"
        width="250"
        style="margin: auto; display: block"
      />
      <HelloWorld />
      <OpenSourceWork />
      <ProjectsList />
      <Education />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import OpenSourceWork from "./components/oss/OpenSourceWork.vue";
import ProjectsList from "./components/projects/ProjectsList.vue";
import Education from "./components/Education.vue";
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    OpenSourceWork,
    ProjectsList,
    Education,
    Navigation,
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#main-container {
  margin: 60px auto;
  max-width: 720px;
  padding: 20px;
}

.section {
  padding-top: 1px;
}

a {
  color: #3774a6;
  text-decoration: none;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  text-align: center;
  font-size: 36px;
  margin: 70px 0 20px;
  text-decoration: underline;
  text-underline-position: under;
}

h3 {
  font-size: 24px;
}
</style>

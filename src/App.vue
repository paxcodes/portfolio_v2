<template>
  <div id="app">
    <img alt="hero-ish image" src="./assets/icon.png" width="250" />
    <HelloWorld msg="Hi! I'm Pax. Let's build something great." />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
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

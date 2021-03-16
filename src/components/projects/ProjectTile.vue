<template functional>
  <div>
    <h3>{{ props.project.title }}</h3>
    
    <p>
      {{ props.project.description }}
    </p>
    <ul>
      <li v-for="image in props.project.screenshots" :key="image.src">
        <img :src="image.src" :alt="image.alt" />
        <span>{{ image.alt }}</span>
      </li>
    </ul>
  </div>
</template>

<style>
ul {
  list-style-type: none;
}
</style>
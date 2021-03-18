<template functional>
  <div>
    <h3>{{ props.project.title }}</h3>
    <ul>
      <li
        v-for="(data, key) in props.project.builtWith"
        :key="props.project.title + key"
      >
        <slot name="built_with" :built-with="{ key, data }"></slot>
      </li>
    </ul>
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
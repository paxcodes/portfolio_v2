<template functional>
  <div class="project">
    <h3>{{ props.project.title }}</h3>
    <ul class="no-bullets built-with">
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
    <div class="screenshots">
      <slot name="screenshots" :screenshots="props.project.screenshots"></slot>
    </div>
  </div>
</template>

<style>
.project {
  margin: 40px 0 80px;
}
.screenshots {
  display: flex;
}

.built-with {
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 0;
}

.no-bullets {
  list-style-type: none;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
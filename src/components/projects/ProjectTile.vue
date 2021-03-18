<template functional>
  <div>
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
.screenshots {
  display: flex;
}

.built-with {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.no-bullets {
  list-style-type: none;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
<template functional>
  <div class="project">
    <h3 style="margin: 0">
      <a
        v-if="props.project.link"
        :href="props.project.link"
        target="_blank"
        rel="noopener noreferrer"
        >{{ props.project.title }} &nbsp;
        <img
          class="open-new-tab"
          :src="require(`@/assets/open-external-link.svg`)"
          alt="open in new tab"
          height="15"
      /></a>
      <span v-else>{{ props.project.title }}</span>
    </h3>
    <div class="github" v-if="props.project.github">
      <img
        :src="require(`@/assets/github.png`)"
        alt="source code"
        height="20"
      />
      <ul class="no-bullets">
        <li v-for="value in props.project.github" :key="value">
          <a
            :href="`https://github.com/${value}`"
            target="_blank"
            rel="noopener noreferrer"
            >{{ value }}</a
          >
        </li>
      </ul>
    </div>
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

.github {
  display: flex;
  font-size: 0.85rem;
  align-items: center;
  margin-bottom: 1.5rem;
}

.github > ul,
.github > ul > li {
  margin: 0;
  padding: 0 0 0 5px;
}

.no-bullets {
  list-style-type: none;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
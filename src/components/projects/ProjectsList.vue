<template>
  <div id="projects">
    <h2>Projects</h2>
    <ProjectTile :project="project" />
  </div>
</template>

<script>
import ProjectTile from "./ProjectTile.vue";

export default {
  data: () => {
    return {
      project: { title: "Weekly Roundup Generator" },
    };
  },
  components: { ProjectTile },
};
</script>


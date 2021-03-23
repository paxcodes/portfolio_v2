<template>
  <div id="projects" class="section">
    <h2>Projects</h2>
    <ProjectTile
      v-for="project in projects"
      :key="project.title"
      :project="project"
    >
      <template v-slot:built_with="{ builtWith }">
        <a v-if="builtWith.data.link" :href="builtWith.data.link">
          <BuiltWithIconOrText :builtWith="builtWith" />
        </a>
        <BuiltWithIconOrText v-else :builtWith="builtWith" />
      </template>

      <template v-slot:screenshots="{ screenshots }">
        <ZoomImage
          v-for="(screenshot, index) in screenshots"
          :screenshot="screenshot"
          :key="`screenshot${index}-${project.title}`"
        />
      </template>
    </ProjectTile>
  </div>
</template>

<script>
import Project from "@/models/Project.js";
import ProjectTile from "./ProjectTile.vue";
import ZoomImage from "./ZoomImage.vue";
import BuiltWithIconOrText from "./BuiltWithIconOrText.vue";
import ApiService from "@/services/ApiService.js";
export default {
  data: () => {
    return {
      projects: [],
    };
  },
  components: { ProjectTile, BuiltWithIconOrText, ZoomImage },
  created() {
    ApiService.GetProjects()
      .then(({ data }) => {
        this.projects = data.map((project) => new Project(project));
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>


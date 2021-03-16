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
      project: {
        title: "Weekly Roundup Generator",
        builtWith: ["Python", "Pytest", "PyInstaller", "Typer"],
        description: `Generates a report on the organization’s website, Facebook page, and
      SoundCloud account activity by integrating with Google Analytics and
      Facebook API; Data is stored in a JSON file so current week’s data can be
      compared with last week’s. A web form is provided for the user to enter
      SoundCloud data not available in their API.`,
        screenshots: [
          {
            src:
              "https://margret.pw/static/cli_2-ee723e51b623486e11169d66a5d959b1.png",
            alt: "CLI app",
          },
          {
            src:
              "https://margret.pw/static/test_a-081b8346c3d2a96231df28ecca86c213.png",
            alt: "Tests without real HTTP calls",
          },
        ],
      },
    };
  },
  components: { ProjectTile },
};
</script>


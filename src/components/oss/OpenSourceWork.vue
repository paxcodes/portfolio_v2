<template>
  <div id="os-contributions">
    <h2>Open-Source Contributions</h2>
    <PullRequestFeatured
      v-for="pr in prs"
      :pr="pr"
      :key="pr.project + pr.issueNum"
    />
    <PullRequestOther
      v-for="other_pr in other_prs"
      :pr="other_pr"
      :key="other_pr.project"
    />
  </div>
</template>

<script>
import PullRequestFeatured from "./PullRequestFeatured.vue";
import PullRequestOther from "./PullRequestOther.vue";

export default {
  data: () => {
    return {
      prs: [
        {
          project: "pytest-dev/pytest",
          issueNum: 8319,
          link: "https://github.com/pytest-dev/pytest/pull/8319",
          title: "Type annotation for request.param",
        },
        {
          project: "pandas-dev/pandas",
          issueNum: 37840,
          link: "https://github.com/pandas-dev/pandas/pull/37840",
          title: "TST: Add test for setting item using python list (#19406)",
        },
        {
          project: "sysid/sse-starlette",
          issueNum: 3,
          link: "https://github.com/sysid/sse-starlette/pull/3",
          title: "Send pings as a custom `ping` event",
        },
      ],
      other_prs: [
        {
          count: 5,
          project: "topanswers/topanswers",
        },
        {
          count: 4,
          project: "Vancouver-Datajam/project_4",
        },
      ],
    };
  },
  components: { PullRequestFeatured, PullRequestOther },
};
</script>

<style>
#os-contributions {
  text-align: center;
}
</style>
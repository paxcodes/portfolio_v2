<template>
  <div>
    <h2 style="margin: 40px">Open-Source Contributions</h2>
    <PullRequestFeatured
      v-for="pr in prs"
      :pr="pr"
      :key="pr.project + pr.issueNum"
    />
  </div>
</template>

<script>
import PullRequestFeatured from "./PullRequestFeatured.vue";

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
    };
  },
  components: { PullRequestFeatured },
};
</script>

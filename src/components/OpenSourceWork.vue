<template>
  <div>
    <h2 style="margin: 40px">Open-Source Contributions</h2>
    <FeaturedPR v-for="pr in prs" :pr="pr" :key="pr.project + pr.issueNum" />
  </div>
</template>

<script>
import FeaturedPR from "./FeaturedPR.vue";

export default {
  data: () => {
    return {
      prs: [
        {
          project: "pytest-dev/pytest",
          issueNum: 8319,
          title: "Type annotation for request.param",
        },
        {
          project: "pandas-dev/pandas",
          issueNum: 37840,
          title: "TST: Add test for setting item using python list (#19406)",
        },
        {
          project: "sysid/sse-starlette",
          issueNum: 3,
          title: "Send pings as a custom `ping` event",
        },
      ],
    };
  },
  components: { FeaturedPR },
};
</script>

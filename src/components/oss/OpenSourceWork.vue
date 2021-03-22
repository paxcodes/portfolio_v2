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
import ApiService from "@/services/ApiService.js";

export default {
  data: () => {
    return {
      prs: [],
      other_prs: [],
    };
  },
  components: { PullRequestFeatured, PullRequestOther },
  created() {
    ApiService.GetFeaturedPRs()
      .then(({ data }) => {
        this.prs = data;
      })
      .catch((error) => {
        console.log(error);
      });
    ApiService.GetOtherPRs()
      .then(({ data }) => {
        this.other_prs = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
#os-contributions {
  text-align: center;
}
</style>
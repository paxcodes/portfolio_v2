<template functional>
  <div class="pr">
    <div>
      <span class="os-project">
        <span title="Status: Merged" class="State State--merged">
          <svg
            height="16"
            class="octicon octicon-git-merge"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.45 1.9a2.25 2.25 0 10-1.95.218v5.256a2.25 2.25 0 101.5 0V7.123A5.735 5.735 0 009.25 9h1.378a2.251 2.251 0 100-1.5H9.25a4.25 4.25 0 01-3.8-2.346zM12.75 9a.75.75 0 100-1.5.75.75 0 000 1.5zm-8.5 4.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
            ></path>
          </svg>
          Merged
        </span>
        &nbsp;
        <a :href="props.pr.link" :title="props.pr.title"
          >{{ props.pr.project }} #{{ props.pr.issueNum }}</a
        >
        <br
      /></span>
      <p class="pr-title">{{ props.pr.title }}</p>
    </div>
  </div>
</template>


<style scoped>
.pr {
  margin: 30px 0;
}
.os-project {
  font-weight: bold;
}

.pr-title {
  font-style: italic;
  margin-top: 5px;
}
</style>

<style>
.State--merged {
  color: #fff;
  background-color: #6f42c1;
  display: flex;
  align-items: center;
}

.State {
  display: inline-block;
  padding: 5px 12px;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
  border-radius: 2em;
}

.octicon {
  overflow: hidden;
  vertical-align: text-bottom;
  display: inline-block;
  fill: currentColor;
}
</style>
<template functional>
  <div id="navigation">
    <ul>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#os-contributions">Open-Source Contributions</a></li>
      <li><a href="#education">Education</a></li>
      <li>
        <a href="mailto:pax.margret@tutanota.com"
          ><img
            style="background: white"
            :src="require('@/assets/email.svg')"
            alt="email me"
            height="20"
        /></a>
      </li>
      <li>
        <a
          href="https://github.com/paxcodes"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            style="background: black"
            :src="require('@/assets/github-light.png')"
            alt="my github"
            height="32"
        /></a>
      </li>
    </ul>
  </div>
</template>

<style>
#navigation {
  background: black;
  position: sticky;
  top: 0;
  text-align: center;
}

#navigation a {
  color: whitesmoke;
  font-weight: bold;
  display: inline-block;
  padding: 1rem;
}

#navigation > ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
}

#navigation > ul > li {
  display: flex;
  align-items: center;
  margin: 0 1rem;
}
</style>
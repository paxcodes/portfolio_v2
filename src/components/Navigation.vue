<template functional>
  <nav id="navigation">
    <label for="hamburger">&#9776;</label>
    <input type="checkbox" id="hamburger" />

    <div id="menu-links">
      <a href="#projects">Projects</a>
      <a href="#os-contributions">Open-Source Contributions</a>
      <a href="#education">Education</a>

      <a href="mailto:pax.margret@tutanota.com"
        ><img
          style="background: white"
          :src="require('@/assets/email.svg')"
          alt="email me"
          height="20"
      /></a>

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
    </div>
  </nav>
</template>

<style>
#navigation {
  background: black;
  position: sticky;
  top: 0;
  text-align: center;
}

#navigation > #menu-links {
  display: flex;
  justify-content: center;
}

#navigation > #menu-links > a {
  display: flex;
  align-items: center;
  margin: 0 1rem;
  color: whitesmoke;
  font-weight: bold;
  padding: 1rem;
}

#navigation label,
#hamburger {
  display: none;
}

@media screen and (max-width: 730px) {
  #navigation {
    text-align: center;
  }

  #navigation label {
    display: inline-block;
    color: white;
    font-style: normal;
    font-size: 1.5em;
    padding: 10px;
  }

  #navigation > #menu-links {
    height: 100vh;
    flex-direction: column;
    justify-content: space-evenly;
  }

  #navigation > #menu-links > a {
    height: 100%;
    border-top: 1px solid #333;
    margin: 0;
    padding: 0;
    justify-content: center;
  }

  /* #main-container:nav-toggled-on {
   margin: 0;
 }

 */
}
</style>


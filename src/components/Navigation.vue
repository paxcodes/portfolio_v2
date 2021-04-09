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
  #navigation label {
    display: inline-block;
    color: white;
    font-size: 1.5em;
    padding: 10px;
  }

  #navigation > #menu-links {
    flex-direction: column;
    align-items: center;
  }

  #navigation > #menu-links > a {
    height: 100%;
    border-top: 1px solid #333;
    padding: 30px;
  }
  #navigation > #menu-links > a:first-child {
    border: none;
  }
}
</style>


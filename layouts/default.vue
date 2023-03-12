<template>
  <main>
    <header id="header">
      <a id="logo" href="#first">Potter Portfolio</a>
      <nav id="menu">
        <a href="#second">About</a>
        <a href="#third">Experience</a>
        <a href="#fourth">Skills</a>
        <a href="#fifth">Accolades</a>
        <a href="#sixth">Connect</a>
      </nav>
    </header>
    <Nuxt />
    <footer id="footer">
      <div class="footer__inner">
        <img src="george-mahoney-potter-remote.jpg" alt="Thank you for visiting!" title="Thank you for visiting!">
        <h2>Thank You for Visiting!</h2>
        <a href="" class="button">
          Download this website
        </a>
      </div>
    </footer>
  </main>
</template>

<script>
  export default {
    name: 'default'
  }
</script>

<!--suppress SassScssResolvedByNameOnly -->
<style lang="scss" scoped>

  #header {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 20;
    background: $secondary-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #555;

    #logo {
      padding: 1rem;
      font-family: $secondary-font;
      font-weight: 700;
      font-size: 1.2rem;
    }

    a {
      color: $primary-color;
      text-decoration: none;
    }

    nav {
      display: flex;
      align-items: center;

      a {
        display: block;
        padding: 1rem;
        font-size: 1rem;
        line-height: 1.2rem;
      }
    }
  }

  footer#footer {
    min-height: calc(100vh - 3.2rem);
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
    padding-top: 2rem;
    background: $primary-color;
    color: #222;

    img {
      max-width: 600px;
      border-radius: 300px;
    }

    a.button {
      color: $secondary-color;
      border-color: $secondary-color;
    }
  }

</style>

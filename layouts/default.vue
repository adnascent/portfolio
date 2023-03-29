<template>
  <main>
    <header id="header"
            ref="headerObserver"
    class="header--inverted">
      <a id="logo" href="#first">Potter Portfolio</a>
      <nav id="menu">
        <a href="#second"
           ref="aboutMenu">
          About
        </a>
        <a href="#third"
           ref="experienceMenu">
          Experience
        </a>
        <a href="#fourth"
           ref="skillsMenu">
          Skills
        </a>
        <a href="#fifth"
           ref="accoladesMenu">
          Accolades
        </a>
        <a href="#sixth"
           ref="connectMenu">
          Connect
        </a>
      </nav>
    </header>
    <slot />
    <footer id="footer">
      <div class="footer__inner">
        <img src="/george-mahoney-potter-remote.jpg" alt="Thank you for visiting!" title="Thank you for visiting!">
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
    name: 'default',
    data: function() {
      return {
        observer: null
      }
    },
    mounted() {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          console.log(entry.target.id)
          if (entry && entry.isIntersecting && entry.target.id) {
            document.querySelectorAll("#menu a").forEach((element) => {
              element.classList.remove('active')
            })
            const entryId = entry.target.id
            const accolades = ['certification', 'education', 'organizations', 'testimonials', 'hobbies']
            if (accolades.includes(entryId) && this.$refs.accoladesMenu) {
              this.$refs.accoladesMenu.classList.add('active')
            }
            else if (this.$refs[entry.target.id + 'Menu']) {
              this.$refs[entry.target.id + 'Menu'].classList.add('active')
            }
          }
        },
        {
          rootMargin: "-40% 0% -40%",
        }
      )

      document.querySelectorAll("section").forEach((section) => {
        this.observer.observe(section)
      })

      // Observer for if the user scrolls to the top of the page
      const observerHeader = new IntersectionObserver(
        ([entry]) => {
          console.log(entry)
          if (entry && this.$refs.headerObserver) {
            if (entry.isIntersecting) {
              this.$refs.headerObserver.classList.add('header--inverted')
            } else {
              this.$refs.headerObserver.classList.remove('header--inverted')
            }
          }
        },
        { rootMargin: "-100% 0% 0%" }
      )
      observerHeader.observe(document.querySelector("#intro"))
    }
  }
</script>

<!--suppress SassScssResolvedByNameOnly -->
<style lang="scss" scoped>

  #header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: $background;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    z-index: 1000;
    background: $primary-color;
    box-shadow: 0 0 0.5rem rgba(0,0,0,0.25);

    &, * {
      transition: all 0.5s ease;
    }

    &.header--inverted {
      background: none;
      border-bottom: 1px solid #555;
      box-shadow: none;

      #logo {
        padding: 1.25rem;
      }

      a {
        color: #fff;
      }

      nav {
        a {
          padding: 1rem;
        }
      }
    }

    #logo {
      padding: 0.5rem;
      font-family: $secondary-font;
      font-weight: 700;
      font-size: 1.2rem;
    }

    a {
      color: $white;
      text-decoration: none;
    }

    nav {
      display: flex;
      align-items: center;

      a {
        display: block;
        padding: 0.75rem 1rem;
        font-size: 1rem;
        line-height: 1.2rem;

        &.active {
          text-decoration: underline;
        }
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
    color: $white;

    img {
      max-width: 600px;
      border-radius: 300px;
    }

    a.button {
      color: $white;
      border-color: $white;
    }
  }

</style>

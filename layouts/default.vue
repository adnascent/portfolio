<template>
  <main>
    <header id="header"
            ref="headerObserver"
            class="header--inverted">
      <a id="logo"
         ref="#intro"
         href="#intro"
         @click="scrollTo(); menuActive = false">
        Potter Portfolio
      </a>
      <div id="menu"
           :class="{'menu--active': menuActive}"
           @click="toggleMenu()">
        <div id="burger"
             :class="{'burger--active': menuActive}">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav id="navigation">
          <a href="#about"
             @click="scrollTo"
             ref="aboutMenu">
            About
          </a>
          <a href="#experience"
             @click="scrollTo"
             ref="experienceMenu">
            Experience
          </a>
          <a href="#skills"
             @click="scrollTo"
             ref="skillsMenu">
            Skills
          </a>
          <a href="#certification"
             @click="scrollTo"
             ref="accoladesMenu">
            Accolades
          </a>
          <a href="#connect"
             @click="scrollTo"
             ref="connectMenu">
            Connect
          </a>
        </nav>
      </div>
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
        observer: null,
        menuActive: false,
      }
    },
    mounted() {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry && entry.isIntersecting && entry.target.id) {
            document.querySelectorAll("#navigation a").forEach((element) => {
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
    },
    methods: {
      /**
       * Scrolls to the section of the page that the user clicks on.
       */
      scrollTo() {
        event.preventDefault()
        const id = event.target.getAttribute('href')
        const element = document.querySelector(id)
        element.scrollIntoView({
          behavior: 'smooth'
        })
      },
      /**
       * Toggles the menu on mobile devices.
       */
      toggleMenu() {
        this.menuActive = !this.menuActive
      }
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

      #menu nav#navigation {

        a {
          padding: 1rem;

          @media (max-width: $screen-sm) {
            padding: 0.75rem 2.25rem;
          }
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

    #menu {

      &.menu--active {

        nav#navigation {
          @media (max-width: $screen-sm) {
            display: block;
            opacity: 1;
          }
        }

        #burger {
          span {
            &:nth-child(1) {
              transform: translateY(0.4rem) rotate(45deg);
            }

            &:nth-child(2) {
              opacity: 0;
            }

            &:nth-child(3) {
              transform: translateY(0.15rem) rotate(-45deg);
            }
          }
        }
      }

      #burger {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
        padding: 0.25rem 0;

        @media (max-width: $screen-sm) {
          display: block;
        }

        span {
          width: 100%;
          height: 0.15rem;
          background: $white;
          display: block;
          transition: all 0.5s ease;

          &:nth-child(1) {
            transform: translateY(0);
          }

          &:nth-child(2) {
            transform: translateY(0.25rem);
          }

          &:nth-child(3) {
            transform: translateY(0.5rem);
          }
        }
      }

      nav#navigation {
        display: flex;
        align-items: center;
        transition: all 0.5s ease;

        @media (max-width: $screen-sm) {
          display: none;
          opacity: 0;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: 100vh;
          background: $primary-color;
          flex-wrap: wrap;
          align-content: start;
        }

        a {
          display: block;
          padding: 0.75rem 1rem;
          line-height: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          font-size: 0.8rem;

          @media (max-width: $screen-sm) {
            width: 100%;
            text-align: left;
            padding: 0.75rem 1.5rem;
            color: #fff;
          }

          &.active {
            text-decoration: underline;
          }
        }
      }
    } // #menu
  }

  footer#footer {
    min-height: calc(100vh - 3.2rem);
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
    padding: 4rem 0;
    background: $primary-color;
    color: $white;

    @media (max-width: $screen-sm) {
      padding-top: 0;
    }

    img {
      max-width: 600px;
      width: 100%;
      border-radius: 100%;

      @media (max-width: $screen-xl) {
        max-width: 500px;
      }

      @media (max-width: $screen-md) {
        max-width: 400px;
      }

      @media (max-width: $screen-sm) {
        max-width: 100%;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        margin-bottom: 2rem;
      }
    }

    a.button {
      color: $white;
      border-color: $white;
    }
  }

</style>

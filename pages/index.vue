<template>
  <main>
    <section id="intro">
      <div class="intro__meta">
      <h1>
        George <span>Mahoney&#x2011;Potter</span>
      </h1>
      <ul>
        <li>Web developer</li>
        <!--<li>Collaborator</li>
        <li>Designer</li>
        <li>Idea generator</li>
        <li>Leader</li>-->
      </ul>
      </div>
      <video src="/background.mp4"
             autoplay
             muted
             loop
             class="intro__video" />
      <!-- @formatter off -->
      <div class="intro__doodle">
      <css-doodle class="intro__doodle__inner">
        <!--suppress CssInvalidAtRule, CssInvalidPseudoSelector -->
        <component :is="'style'">
          :doodle {
            @grid: 25x1 / 18vmin;
          }
          :container {
            perspective: 30vmin;
          }

          @place-cell: center;
          @size: 100%;

          transform: rotate(calc(@i * 5deg));
          border-radius: 50%;
          border: 5px solid hsla(calc(10 + 4 * @i), 70%, 68%, @r.8);

          transform-style: preserve-3d;
          will-change: transform, opacity;
          animation: scale-up 10s ease-in infinite;
          animation-delay: calc(-7s / @size() * @i());

          @keyframes scale-up {
            0%, 100% {
              transform: translate3d(0, 0, 0) rotate(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            95% {
              transform:
                translate3d(0, 0, 45vmin)
                rotateX(calc(@p(-1, 1) * @r(30deg, 330deg)))
                rotateY(calc(@p(-1, 1) * @r(30deg, 330deg)))
                rotateZ(calc(@p(-1, 1) * @r(30deg, 330deg)))
            }
          }
        </component>
      </css-doodle>
      </div>
      <!-- @formatter on -->
    </section>

    <section id="about">
      <h2>About</h2>
      <div class="about__inner">
        <div class="about__image">
          <img src="/george-mahoney-potter.jpg" alt="About me">
        </div>
        <div class="about__content">
          <h3>Hello there!</h3>
          <p>
            As a computer enthusiast from a young age, a computer graphics major,
            business minor, and web developer for the past 12 years, I bring a healthy mixture of technological prowess,
            creativity, business acumen, and leadership skills.
          </p>
          <p>
            Please take a look below at some of my professional accomplishments over the years.
            If you find that I am a great fit for your working needs, please contact me and I would love to respond.
          </p>
          <a href="#" class="button">Download resume</a>
        </div>
      </div>
    </section>

    <section id="experience">
      <h2>Experience</h2>
      <div class="experience__inner">
        <div class="experience__container">
          <div class="experience__image">
            <div>
            <img src="/ofs.jpg" alt="OFS Brands examples">
            </div>
          </div>
          <div class="experience__content">
            <h3>OFS Brands</h3>

            <h5>Employed from July 2016</h5>
            <p>Work includes: creating and managing multiple brand websites, an e-commerce store, internal website portals,
            and varies B2B toolsets, along with ideation planning, technology support, and reporting.</p>

            <h4>Website Development</h4>
            <p>Written and maintained every brand facing website, co-wrote company internal tools covering
            literature sample ordering, learning platforms, crm systems, and a whole lot more.</p>

            <h4>Ideation Contributions</h4>
            <p>Brought to life various internal tools by creating UX/UI templates, submitting feature ideas, and researching solutions.
            As a recent example, I have helped plan, research, and developed an online catalog that allowed OFS to convert static pricing
            PDFs into a web-tool that allows users to customize 3d models with over 5,000 part numbers with millions of combinations,
            while saving hundreds of thousands of dollars spent on PDF creation.</p>

            <h4>Programming Support</h4>
            <p>Have helped several user groups involving industry dealers, sales representatives, and end users with support cases through a
            ticket system and delivering website changes from inter departmental requests.</p>
          </div>
        </div>
        <div class="experience__container">
          <div class="experience__image">
            <img src="/cli.jpg" alt="CLI Examples">
          </div>
          <div class="experience__content">
            <h3>CLI</h3>

            <h5>Previously Employed January 2013 - July 2016</h5>
            <p>Work included: creating and managing multiple e-commerce stores and websites, web consulting, marketing emails, ad
            creation, programming support, software development, statistical reporting.</p>

            <h4>Website Development</h4>
            <p>I've successfully helped launch several national branded ecommerce stores. While continually supporting them with site
            updates and customer usability through A/B split tests.</p>

            <h4>Email Marketing</h4>
            <p>Email marketing is a constant supplier of business at CLI International. I developed emails on a daily bases that reach
            hundreds of thousands of subscribers.</p>

            <h4>Programming Support</h4>
            <p>When a front end application is needed, I lent my hand to create frontend programs. I've also helped
            maintain databases and contribute C# code on asp.net projects.</p>
          </div>
        </div>
        <div class="experience__container">
          <div class="experience__image">
            <img src="/ridetech.jpg" alt="RideTech examples">
          </div>
          <div class="experience__content">
            <h3>RideTech</h3>

            <h5>Previously Employed January 2010 - January 2013</h5>
            <p>Work involved: creating and editing an eCommerce store, designing email marketing campaigns, using social media,
            developing content management systems, and on occasion, laying out print media.</p>

            <h4>Ecommerce Development</h4>
            <p>Every year that I worked at Ridetech, website sales increased by 30%. At the point of departure, online web sales
            compared to all other sales was at the highest point in company history.</p>

            <h4>Email and Social Media Marketing</h4>
            <p>Keeping constant contact with customers was a big priority at Ridetech. We leveraged email and social media marketing
            to include race event results, customer photographs, and installation tips. With targeted engaging content, the facebook
            page grew from a couple thousand to tens of thousands.</p>

            <h4>Print Displays</h4>
            <p>Fliers, Vehicle Vinyl Wraps, and Booth Displays are all things I've helped create for Ridetech. For the catalog I worked
            cooperatively with another designer to supply product photography and technical graphics.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="skills">
      <h2>Skills</h2>

      <div class="skills__groups">
        <div class="skills__group">
          <h3><span class="skills__icon"><TerminalSvg /></span> Languages</h3>
          <div class="skills__set">
            <div class="skills__individual">
              <div>
                PHP
              </div>
            </div>
            <div class="skills__individual">
              <div>
                Javascript
              </div>
            </div>
          </div>
        </div>

        <div class="skills__group">
          <h3><span class="skills__icon"><ConstructionSvg /></span> Frameworks</h3>
          <div class="skills__set">
            <div class="skills__individual">
              <div>
                Drupal
              </div>
            </div>
            <div class="skills__individual">
              <div>
                Vue
              </div>
            </div>
            <div class="skills__individual">
              <div>
                Nuxt
              </div>
            </div>
            <div class="skills__individual">
              <div>
                Symphony
              </div>
            </div>
            <div class="skills__individual">
              <div>
                Wordpress
              </div>
            </div>
          </div>
        </div>

        <div class="skills__group">
          <h3><span class="skills__icon"><ApplicationSvg /></span> Software</h3>
          <div class="skills__set">
            <div class="skills__individual">
              <div>
                Jetbrains Suite
                <small>Phpstorm, Webstorm</small>
              </div>
            </div>
            <div class="skills__individual">
              <div>
                Adobe creative suite
                <small>Photoshop, Illustrator, InDesign</small>
              </div>
            </div>
          </div>
        </div>

        <div class="skills__group">
          <h3><span class="skills__icon"><CloudApplicationSvg /></span> Cloud software</h3>
          <div class="skills__set">
            <div class="skills__individual">
              <div>
                Google documents
              </div>
            </div>
            <div class="skills__individual">
              <div>
                Shopify
              </div>
            </div>
            <div class="skills__individual">
              <div>
                Mailchimp
              </div>
            </div>
            <div class="skills__individual">
              <div>
                Jira
              </div>
            </div>
          </div>
        </div>

        <div class="skills__group">
          <h3><span class="skills__icon"><CloudSvg /></span> Cloud platforms</h3>
          <div class="skills__set">
            <div class="skills__individual">
              <div>
                AWS
                <small>S3, Lambda, Cloudfront, CloudSearch</small>
              </div>
            </div>
            <div class="skills__individual">
              <div>
                Google Cloud
                <small>Google Maps API, Compute Engine</small>
              </div>
            </div>
          </div>
        </div>

        <div class="skills__group">
          <h3><span class="skills__icon"><CommitSvg /></span> Version control</h3>
          <div class="skills__set">
            <div class="skills__individual">
              <div>
                Git
                <small>Gitlab, Github</small>
              </div>
            </div>
            <div class="skills__individual">
              <div>
                SVN
                <small>TortoiseSvn</small>
              </div>
            </div>
          </div>
        </div>

        <div class="skills__group">
          <h3><span class="skills__icon"><CodeSvg /></span> Development principles</h3>
          <div class="skills__set">
            <div class="skills__individual">
              <div>
                Code development
              </div>
            </div>
            <div class="skills__individual">
              <div>
                Containerization
              </div>
            </div>
            <div class="skills__individual">
              <div>
                Deployment pipelines
              </div>
            </div>
            <div class="skills__individual">
              <div>
                Code testing
              </div>
            </div>
            <div class="skills__individual">
              <div>
                Documentation and training
              </div>
            </div>
            <div class="skills__individual">
              <div>
                Coding standards
              </div>
            </div>
          </div>
        </div>

        <div class="skills__group">
          <h3><span class="skills__icon"><DesktopSvg /></span> OS</h3>
          <div class="skills__set">
            <div class="skills__individual">
              <div>
                Windows
              </div>
            </div>
            <div class="skills__individual">
              <div>
                Ubuntu
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="certification">
      <h2>Certifications</h2>
      <div class="certification__inner">
        <div class="certification__image">
          <img src="/aquia.png" alt="Aquia Drupal Developer Certification">
        </div>
        <div class="certification__content">
          <h3>Aquia Drupal Developer Certification</h3>
          <h4>Drupal community involvement:</h4>
          <ul>
            <li>Drupal Association member</li>
            <li>DrupalCon Attendee</li>
            <li>Community Contributor</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="education">
      <h2>Education</h2>
      <div class="education__inner">
        <div class="education__content">
          <h3>Purdue University</h3>
          <strong>GPA: 3.77/4.0</strong><br />
          August 2006 - December 2009<br />
          West Lafayette, IN<br />
          Major in Computer Graphics Technology<br />
          Minor in Business Management<br />
          Graduated with academic honors<br />
          Top 10 percentile of graduating class
        </div>
        <div class="education__content">
          <h3>Madison Consolidated High School</h3>
          <strong>GPA: 3.85/4.0</strong><br />
          August 2002 - May 2006<br />
          Madison, IN<br />
          Graduated with a class rank of 32<br />
          Academic Honors Diploma
        </div>
      </div>
    </section>

    <section id="organizations">
      <h2>Organizations</h2>
      <div class="organizations__inner">
        <div class="organizations__content">
          <h3>
            Dubois County Emerging Leaders
            <small>2010-2016</small>
          </h3>
          <p>A philanthropic giving circle.</p>
          <p>Involved with leadership training exercises.</p>
        </div>
        <div class="organizations__content">
          <h3>
            Boy Scouts of America
            <small>2002-2006</small>
          </h3>
          <p>Troop leader for 4 years. </p>
          <p>Achieved the rank of Eagle Scout.</p>
        </div>
      </div>
    </section>

    <section id="testimonials">
      <h2>Testimonials</h2>
      <div class="testimonials__inner">
        <div class="testimonial testimonial--active">
          <p>I've enjoyed working with George at OFS for the past 4 years.</p>
          <div class="testimonial__author">
            John Smith
            <small>OFS</small>
            <img src="https://via.placeholder.com/150x150" alt="Jake R.">
          </div>
        </div>
        <div class="testimonial">
          <p>George brought a fun personality into work and collaborated with me on several key projects.</p>
          <div class="testimonial__author">
            Mike M.
            <small>CLI Web Developer</small>
            <img src="https://via.placeholder.com/150x150" alt="Mike M.">
          </div>
        </div>
        <div class="testimonial">
          <p>He's an amazing husband that would never fake a testimonial on my behalf.</p>
          <div class="testimonial__author">
            Cayla Mahoney-Potter
            <small>A pretty cool wife</small>
            <img src="https://via.placeholder.com/150x150" alt="Cayla Madison Mahoney-Potter">
          </div>
        </div>
      </div>
    </section>

    <section id="hobbies">
      <h2>Hobbies</h2>
      <div class="hobbies__inner">
        <p class="hobbies__description">You've made it this far!  You must really care about me, here's a bonus, my top four hobbies:</p>
        <div class="hobbies__groups">
          <div class="hobbies__group">
            <img src="/dogs-v2.jpg" alt="Animal lover">
            <h3>Animal lover</h3>
            <p>Two annoyingly friendly dogs, 1 hot tempered rabbit.</p>
          </div>
          <div class="hobbies__group">
            <img src="/houseplants.jpg" alt="Houseplants addict">
            <h3>Houseplants addict</h3>
            <p>At 150 plants owned, down to 149 next week.</p>
          </div>
          <div class="hobbies__group">
            <img src="/photography.jpg" alt="Photography hobbyist">
            <h3>Photography hobbyist</h3>
            <p>Since my first 1 megapixel camera in 2008.
              <a href="#"
                 class="link">View some of my photographs</a>.
            </p>
          </div>
          <div class="hobbies__group">
            <img src="/music.jpg" alt="Music super fan">
            <h3>Music super fan</h3>
            <p>Logged over 2,000 hours of listening on Spotify last year.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="connect">
      <h2>Connect</h2>
      <div class="connect__inner">

        <div class="connect__content">
          <h3>Connect with me</h3>
          <p>Reach out for further details or discussions.</p>
          <div class="connect__social">
            <a href="">
              <LinkedInSvg />
            </a>
            <a href="">
              <FacebookSvg />
            </a>
            <a href="">
              <GitHubSvg />
            </a>
            <a href="">
              <StackOverflowSvg />
            </a>
          </div>
          <div>
            <strong>Location:</strong> New Albany, IN<br />
            <strong>Phone:</strong> 812.631.5833<br />
            <strong>Email:</strong> georgpotter@gmail.com
          </div>
        </div>
        <div class="connect__form">
          <h3>Quick contact</h3>
          <form>
            <div class="form__group">
              <label>Name</label>
              <input type="email" class="form-control" placeholder="Name">
            </div>
            <div class="form__group">
              <label>Email</label>
              <input type="email" placeholder="Email">
            </div>
            <div class="form__group">
              <label>Company</label>
              <input type="email" placeholder="Company">
            </div>
            <div class="form__group">
              <label>Message</label>
              <textarea placeholder="Message"></textarea>
            </div>
            <div class="form__group">
              <button type="submit" class="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

  </main>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script>
  import ApplicationSvg from '~/components/svgs/ApplicationSvg.vue'
  import CloudApplicationSvg from '~/components/svgs/CloudApplicationSvg.vue'
  import CloudSvg from '~/components/svgs/CloudSvg.vue'
  import CodeSvg from '~/components/svgs/CodeSvg.vue'
  import CommitSvg from '~/components/svgs/CommitSvg.vue'
  import ConstructionSvg from '~/components/svgs/ConstructionSvg.vue'
  import DesktopSvg from '~/components/svgs/DesktopSvg.vue'
  import TerminalSvg from '~/components/svgs/TerminalSvg.vue'
  import FacebookSvg from '~/components/svgs/FacebookSvg.vue'
  import LinkedInSvg from '~/components/svgs/LinkedInSvg.vue'
  import GitHubSvg from '~/components/svgs/GitHubSvg.vue'
  import StackOverflowSvg from '~/components/svgs/StackOverflowSvg.vue'

  export default {
    name: 'IndexPage',
    components: {
      ApplicationSvg,
      CloudApplicationSvg,
      CloudSvg,
      CodeSvg,
      CommitSvg,
      ConstructionSvg,
      DesktopSvg,
      TerminalSvg,
      FacebookSvg,
      LinkedInSvg,
      GitHubSvg,
      StackOverflowSvg,
    }
  }
</script>

<!--suppress SassScssResolvedByNameOnly -->
<style lang="scss" scoped>

  section {
    border-bottom: 1px solid #555;
    min-height: calc(100vh - 3.2rem);
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
    padding-top: 2rem;
    background: $background linear-gradient(335deg, $background-dark 0%, $background 500px, $background 100%);

    h2 {
      position: absolute;
      left: 2rem;
      top: 0;
      z-index: 1;
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      line-height: 100%;
      padding: 30px 1rem 0;
      margin: 0;
      width: 220px;
      height: 110px;
      background: $primary-color;
      color: $white;
      border-bottom-left-radius: 120px;
      border-bottom-right-radius: 120px;
    }

    img {
      max-width: 100%;
      border-radius: 100%;
    }
  }

  section#intro {
    background: $primary-color;
    position: relative;
    height: 100vh;

    .intro__video {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 500;
      object-fit: cover;
      mix-blend-mode: multiply;
    }

    .intro__meta {
      color: #fff;
      z-index: 550;
      position: relative;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 3rem;
      mix-blend-mode: difference;

      @media (max-width: $screen-md) {
        font-size: 2rem;
      }
    }

    h1 {
      margin: 0;
      line-height: 100%;

      @media (max-width: $screen-md) {
        font-size: 3rem;
      }
    }

    ul {
      list-style: none;
      padding: 0;
    }

    .intro__doodle {
      width: 100%;
      height: 100vh;
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 0;

      .intro__doodle__inner {
        display: flex;
        width: 500px;
        height: 500px;
        position:absolute;
        bottom: 0;
        right: 0;
      }
    }
  }

  #about {
    .about__inner {
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: $screen-md) {
        flex-wrap: wrap;
      }

      .about__image {
        max-width: 600px;
        width: 40%;
        border-radius: 100%;
        box-shadow: 0 0 1rem rgb(0 0 0);

        @media (max-width: $screen-lg) {
          width: 30%;
        }

        @media (max-width: $screen-md) {
          width: 100%;
          max-width: 400px;
        }

        img {
          object-fit: cover;
        }
      }

      .about__content {
        text-align: left;
        padding: 2rem;
        max-width: 600px;

        .button {
          margin-top: 1rem;
        }
      }
    }
  }

  section#experience {

    .experience__inner {
      padding: 2rem 0 2rem 2rem;

      @media (max-width: $screen-sm) {
        padding: 2rem;
      }

      .experience__container {
        display: flex;
        margin-bottom: 2rem;
        border: 2px solid $secondary-color;
        border-right: 0;
        border-top-left-radius: 1000px;
        border-bottom-left-radius: 1000px;
        overflow: hidden;
        background: $background;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);

        @media (max-width: $screen-sm) {
          flex-wrap: wrap;
          border-radius: 0.25rem;
          border: 2px solid $secondary-color;
        }

        .experience__image {
          max-width: 30%;
          flex: 30%;
          position: relative;

          @media (max-width: $screen-md) {
            max-width: 40%;
            flex: 40%;
          }

          @media (max-width: $screen-sm) {
            max-width: 100%;
            flex: 100%;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0;
            position: absolute;

            @media (max-width: $screen-sm) {
              position: relative;
              object-fit: fill;
              border-bottom: 2px solid $secondary-color;
            }
          }
        }

        .experience__content {
          text-align: left;
          padding: 3rem 3rem;
          flex: 70%;

          @media (max-width: $screen-md) {
            flex: 60%;
            padding: 2rem;
          }

          @media (max-width: $screen-sm) {
            flex: 100%;
          }
        }

      }

    }
  }

  section#skills {

    @media (max-width: $screen-md) {
      padding-top: 8rem;
    }

    .skills__group {
      margin-bottom: 4rem;
      padding: 0 2rem;

      h3 {
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #333;
        padding-bottom: 1rem;

        .skills__icon {
          padding: 1rem;
          border-radius: 2rem;
          background: $primary-color;
          width: 4rem;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;

          &:deep(svg) {
            width: 100%;

            * {
              fill: $white;
            }
          }

        }

        img {
          width: 3rem;
          margin-right: 1rem;
        }
      }

      .skills__set {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;

        .skills__individual {
          flex: 50%;
          max-width: calc(50% - 1rem);

          @media (max-width: $screen-sm) {
            flex: 100%;
            max-width: 100%;
          }

          div {
            display: flex;
            justify-content: center;
            align-items: center;
            background: $secondary-color;
            color: #fff;
            padding: 2rem;
            text-align: center;
            flex-wrap: wrap;
            font-size: 1.2rem;
            border-radius: 20rem;

            small {
              display: block;
              flex: 100%;
              font-size: 0.7rem;
            }
          }
        }
      }
    }

  }

  section#certification {

    .certification__inner {
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: $screen-sm) {
        flex-wrap: wrap;
      }

      .certification__image {
        max-width: 40%;
        border-radius: 1000px;
        box-shadow: 0 0 1rem rgb(0, 0, 0, 0.2);
        padding-bottom: 40%;
        position: relative;
        background: $secondary-color;
        width: 800px;

        @media (max-width: $screen-md) {
          max-width: 50%;
        }

        @media (max-width: $screen-sm) {
          max-width: 100%;
          width: 100%;
          padding-bottom: 100%;
        }

        img {
          object-fit: contain;
          position: absolute;
          left: 20%;
          top: 20%;
          width: 60%;
          height: 60%;
        }
      }

      .certification__content {
        text-align: left;
        padding: 2rem;
        max-width: 600px;

        .button {
          margin-top: 1rem;
        }
      }
    }
  }

  section#education {

    @media (max-width: $screen-md) {
      padding-top: 3rem;
    }

    .education__inner {
      display: flex;
      width: 100%;
      max-width: 1200px;

      @media (max-width: $screen-sm) {
        flex-wrap: wrap;
      }

      .education__content {
        border: 1px solid $primary-color;
        padding: 3rem;
        margin: 1rem;
        background: $background;
        flex: 50%;

        h3 {
          display: block;
          margin: 0 0 2rem;
          padding: 0 0 2rem;
          border-bottom: 1px solid $primary-color;
        }
      }
    }
  }

  section#organizations {

    @media (max-width: $screen-md) {
      padding-top: 3rem;
    }

    .organizations__inner {
      display: flex;
      width: 100%;
      max-width: 1200px;

      @media (max-width: $screen-sm) {
        flex-wrap: wrap;
      }

      .organizations__content {
        border: 1px solid $primary-color;
        padding: 3rem;
        margin: 1rem;
        background: $background;
        flex: 50%;

        h3 {
          display: block;
          margin: 0 0 2rem;
          padding: 0 0 2rem;
          border-bottom: 1px solid $primary-color;

          small {
            display: block;
            font-weight: 400;
            font-size: 1rem;
          }
        }
      }
    }
  }

  section#testimonials {

    .testimonial {
      position: absolute;
      opacity: 0.0;
      font-size: 1.4rem;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      &.testimonial--active {
        opacity: 1;
      }

      .testimonial__author {
        font-size: 1.2rem;

        small {
          display: block;
          margin: 1rem 0;
          font-size: 0.8rem;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
        }

        img {
          margin: 0 auto;
          width: 64px;
        }
      }
    }

  }

  section#connect {
    padding: 7rem 2rem 2rem 2rem;

    .connect__inner {
      display: flex;
      width: 100%;
      max-width: 1200px;

      @media (max-width: $screen-sm) {
        flex-wrap: wrap;
      }

      .connect__content {
        flex: 50%;
        text-align: left;

        .connect__social {
          display: flex;

          a {
            display: block;
            margin-right: 1rem;
            margin-bottom: 1rem;
          }

          :deep(svg), img {
            width: 64px;
          }
        }
      }

      .connect__form {
        flex: 50%;
        text-align: left;

        form {

          .form__group {
            margin-bottom: 1rem;

            label {
              display: block;
              margin-bottom: 0.5rem;
              text-transform: uppercase;
              font-size: 0.8rem;
              letter-spacing: 0.1rem;
            }

            input, textarea {
              border-radius: 10rem;
              border: 1px solid $primary-color;
              padding: 1rem 1.5rem;
              display: block;
              width: 100%;
            }

            button.button {
              background: $primary-color;
              color: $white;
            }
          }
        }
      }
    }

  }

  section#hobbies {
    padding-top: 7rem;

    .hobbies__description {
      padding: 0 2rem;
    }

    .hobbies__inner {

      .hobbies__groups {
        display: flex;
        padding: 0 1rem 1rem 1rem;

        @media (max-width: $screen-sm) {
          flex-wrap: wrap;
        }

        .hobbies__group {
          flex: 25%;
          padding: 2rem;
          font-size: 0.8rem;
          line-height: 130%;

          @media (max-width: $screen-sm) {
            flex: 50%;
          }
        }
      }
    }
  }

</style>

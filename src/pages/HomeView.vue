<template>
  <div class="home">
    <a href="#content-container" class="sr-only">Skip to main content</a>
    <MainBanner />
    <!-- Homepage Main Content Container -->
    <div id="content-container">
      <!-- Main Carousel -->
      <section id="main-carousel-section">
        <div class="container">
          <div class="row">
            <div class="col">
              <div id="mainCarousel" class="carousel slide carousel-fade" data-ride="carousel">
                <a class="carousel-control-prev-mobile" href="#mainCarousel" role="button" data-slide="prev"
                  title="Mobile Main Carousel Previous Slide">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <ol class="carousel-indicators">
                  <li data-target="#mainCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#mainCarousel" data-slide-to="1"></li>
                  <li data-target="#mainCarousel" data-slide-to="2"></li>
                </ol>
                <a class="carousel-control-next-mobile" href="#mainCarousel" role="button" data-slide="next"
                  title="Mobile Main Carousel Next Slide">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="slide-container">
                      <img class="slide-image" src="../assets/images/slider1.png"
                        alt="Tap into the unmatched work ethos service members bring to the workforce">
                      <img class="slide-image-mobile" src="../assets/images/slider1-mobile.png" alt="Become a Partner">
                      <div class="slide-overlay">
                        <div class="slide-content">
                          <div class="slider-white-content-bg">
                            <p>Tap into the unmatched work ethos service members bring to the workforce.</p>
                            <a href="industry-employers.htm" title="Become a SkillBridge Partner">Become a Partner</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="slide-container">
                      <img class="slide-image" src="../assets/images/slider2.png"
                        alt="Military members, find your next career step after your military service">
                      <img class="slide-image-mobile" src="../assets/images/slider2-mobile.png" alt="Get Started">
                      <div class="slide-overlay">
                        <div class="slide-content">
                          <div class="slider-white-content-bg">
                            <p>Military members, find your next career step after your military service.</p>
                            <a href="military-members.htm" title="Get Started">Get Started</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="slide-container">
                      <img class="slide-image" src="../assets/images/slider4.png"
                        alt="Commands, help service members find meaningful and gainful employment">
                      <img class="slide-image-mobile" src="../assets/images/slider4-mobile.png" alt="Get Started">
                      <div class="slide-overlay">
                        <div class="slide-content">
                          <div class="slider-white-content-bg">
                            <p>Commands, help service members find meaningful and gainful employment.</p>
                            <a href="commanders-education-office.htm" title="Get Started">Get Started</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev"
                  title="Main Carousel Previous Slide">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next"
                  title="Main Carousel Next Slide">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- User Types CTA -->
      <section id="user-cta-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <img src="../assets/images/home-user-partners.png" alt="Industry Partners" />
              <h2>Industry Partners</h2>
              <ul>
                <li>
                  <a href="industry-employers.htm?section=2" title="Potential Partners: Get Started">Potential Partners:
                    Get Started<span class="cta-right-arrow"></span>
                  </a>
                </li>
                <li>
                  <a href="industry-employers.htm" title="Information and Tools">Information and Tools<span
                      class="cta-right-arrow"></span>
                  </a>
                </li>
                <li>
                  <a href="https://skillbridge.org" title="Partner CMS Login" target="_blank">Partner CMS Login<span
                      class="cta-right-arrow"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-4">
              <img src="../assets/images/home-user-members.png" alt="Military Members & Spouses" />
              <h2>Military Members</h2>
              <ul>
                <li><a href="locations.htm" title="Find a SkillBridge Opportunity">Find a SkillBridge Opportunity<span
                      class="cta-right-arrow"></span></a></li>
                <li><a href="military-members.htm" title="Information and Tools">Information and Tools<span
                      class="cta-right-arrow"></span></a></li>
              </ul>
            </div>
            <div class="col-lg-4">
              <img src="../assets/images/home-user-commands.png" alt="Commanders and Counselors" />
              <h2>Commanders and Counselors</h2>
              <ul>
                <li><a href="locations.htm" title="SkillBridge Locations Map">SkillBridge Locations Map<span
                      class="cta-right-arrow"></span></a></li>
                <li><a href="commanders-education-office.htm" title="Information and Tools">Information and Tools<span
                      class="cta-right-arrow"></span></a></li>
                <li><a href="commanders-education-office.htm?tab=tools" title="Guidance and Handbooks">Guidance and
                    Handbooks<span class="cta-right-arrow"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Find Opportunities -->
      <section id="find-opportunity-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 order-lg-1 order-2">
              <img class="responsive" src="../assets/images/homepage-map.png" alt="Find a SkillBridge Opportunity" />
            </div>
            <div class="col-lg-7 order-lg-2 order-1" id="find-opportunities-content-container">
              <div id="find-opportunities-content">
                <h1>Find a SkillBridge Opportunity</h1>
                <p>Many industry partners with opportunities in a variety of fields offer real-world training and work
                  experience in high-demand fields for service members who have 180 days or fewer of service remaining
                  prior to their date of military discharge.</p>
                <a href="locations.htm" title="Go to the SkillBridge Locations Map">Go to the SkillBridge Locations
                  Map</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Program Growth -->
      <section id="program-growth-section">
        <div class="container">
          <div class="row">
            <div class="col">
              <div id="program-growth-border-container">
                <div class="row">
                  <div class="col-lg-4">
                    <div id="program-growth-left-container">
                      <div class="flex-start">
                        <h2>SkillBridge Program Growth</h2>
                        <p>The SkillBridge program continues to provide strong results for business leaders and our
                          transitioning military members.</p>
                      </div>
                      <span id="growth-quarter">Q3 2024</span>
                    </div>
                  </div>
                  <!--Active in DB-->
                  <div class="col-lg-8">
                    <div id="home-growth-stats-container">
                      <div class="row">
                        <div class="col-6 col-lg-4">
                          <div class="home-growth-stat-container">
                            <img src="../assets/images/icon-home-opportunities.png" alt="Opportunities" />
                            <h3>Opportunities</h3>
                            <span class="growth-num">8,494</span>
                          </div>
                        </div>
                        <!-- <div class="col-6 col-lg-4">
                                                <div class="home-growth-stat-container">
                                                    <img src="images/icon-home-programs.png" alt="Programs" />
                                                    <h3>Programs</h3>
                                                    <span class="growth-num">6,030</span>
                                                </div>
                                            </div> -->
                        <div class="col-12 col-lg-4">
                          <div class="home-growth-stat-container">
                            <img src="../assets/images/icon-home-organizations.png" alt="Organizations" />
                            <h3>Organizations</h3>
                            <span class="growth-num">4,945</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section id="testimonials-section">
        <div class="container">
          <div class="row">
            <div class="col">
              <div id="responsive-quote-icon"></div>
              <div id="what-theyre-saying-top-bar"></div>
              <h2>What they're saying...</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-2 d-none d-lg-block">
              <div id="quote-icon"></div>
            </div>
            <div class="col-lg-8">
              <div id="testimonialsCarousel" class="carousel slide carousel-fade" data-ride="carousel">
                <a class="carousel-control-prev" href="#testimonialsCarousel" role="button" data-slide="prev"
                  title="Testimonials Carousel Previous Slide">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <ol class="carousel-indicators">
                  <li data-target="#testimonialsCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#testimonialsCarousel" data-slide-to="1"></li>
                  <li data-target="#testimonialsCarousel" data-slide-to="2"></li>
                  <li data-target="#testimonialsCarousel" data-slide-to="3"></li>
                </ol>
                <a class="carousel-control-next" href="#testimonialsCarousel" role="button" data-slide="next"
                  title="Testimonials Carousel Next Slide">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="testimonial-item">
                      <p class="testimonial-content">MSSA is groundbreaking in that it really helps service members
                        recognize those skills that they bring to the table. They're dedicated, they're focused, they're
                        driven, they never take no for an answer—these are the kinds of people you want in your company.
                      </p>
                      <span class="testimonial-name">Anthony S.</span>
                      <span class="testimonial-title">U.S. Marine Corps Veteran, Software Engineer at Microsoft</span>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="testimonial-item">
                      <p class="testimonial-content">In the Army, I had that sense of pride and mission every day, that
                        I'm doing something that is making a difference. That part hasn't changed. I know that I'm going
                        to work in a very inclusive environment; I love my team and everyone has each other's back, and
                        I'm doing the kind of work that is impacting a lot of people's lives.</p>
                      <span class="testimonial-name">Chetana A.</span>
                      <span class="testimonial-title">U.S. Army Veteran, Software Engineer at Microsoft</span>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="testimonial-item">
                      <p class="testimonial-content">During the fellowship I had a great leadership team and a very
                        supportive mentor who taught me how to map out our value streams and look at our operations from
                        a business perspective. My career aside, those lessons alone were worth participating in the
                        fellowship at Amazon. Amazon was an incredibly natural transition...</p>
                      <span class="testimonial-name">Anthony K.</span>
                      <span class="testimonial-title">Operations Manager Engineer Officer - US Army</span>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="testimonial-item">
                      <p class="testimonial-content">SkillBridge gave me the opportunity to join a company without the
                        stress of trying to fight for an interview. By coming in as an intern, a focus on training in
                        project management was necessary; it was a moment for me to demonstrate what couldn't be
                        reflected in my resume. [Without SkillBridge] Semper Tek would have never had the chance to see
                        the who I was not just on paper, but in real life...</p>
                      <span class="testimonial-name">Andrew B.</span>
                      <span class="testimonial-title">US Air Force veteran, Pre-Construction Specialist at Semper
                        Tek</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-2 d-none d-lg-block"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from "@/components/MainBanner.vue";

export default {
  name: "HomeView",
  components: {
    MainBanner
  },
  mounted() {
    const homejs = document.createElement("script");
    homejs.setAttribute(
      "src",
      "/static/home.js"
    );
    homejs.async = false;
    document.head.appendChild(homejs);
  }
};
</script>
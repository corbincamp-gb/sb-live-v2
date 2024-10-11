<template>
   <div id="content-container">
      <div class="row">
         <div class="col">
            <div id="main-image-banner" class="banner-overview">
               <div class="container">
                  <div class="row">
                     <div class="col">
                        <div id="main-image-banner-text">
                           <p>Connecting returning service members to career job training opportunities.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="banner-h1-container">
               <div class="container">
                  <div class="row">
                     <div class="col">
                        <h1>Program Overview</h1>
                     </div>
                  </div>
               </div>
            </div>
            <div class="container py-4">
               <div class="row">
                  <div class="col pt-5">
                     <h2>What is SkillBridge?</h2>
                     <div class="row d-flex">
                        <div class="col-lg-8 order-2 order-lg-1" id="inner-content-container">
                           <p>The DOD SkillBridge program is an opportunity for service members to gain valuable
                              civilian work experience through specific industry training, apprenticeships, or
                              internships during the last 180 days of service. DOD SkillBridge connects transitioning
                              service members with industry partners in real-world job experiences.</p>
                           <p>For service members, DOD SkillBridge provides an invaluable chance to work and learn in
                              civilian career areas. For industry partners, DOD SkillBridge is an opportunity to access
                              and leverage the world's most highly trained and motivated workforce at no cost. Service
                              members participating in DOD SkillBridge programs continue receiving their military
                              compensation and benefits, while industry partners provide the civilian training and work
                              experience.</p>
                           <p>Installation and unit commanders who have members about to transition from active duty,
                              bridge the gap between their service members' end of service and the beginning of their
                              civilian careers with the DOD SkillBridge participation. Commanders ease this
                              military-to-civilian transition period for their members when they permit SkillBridge
                              participation with trusted employers.</p>
                           <p>Service members can be granted up to 180 days of permissive duty to focus solely on
                              training full-time with approved industry partners after their chain of command, field
                              grade commander, provides written authorization and approval. These industry partners
                              offer real-world training and in-demand work experience while having the opportunity to
                              evaluate the service member's suitability for future employment.</p>
                        </div>
                        <div class="col-lg-4 order-1 order-lg-2 mb-4">
                           <div id="side-info-container">
                              <div class="row">
                                 <div class="col-12 col-sm-7 col-md-8 col-lg-12 col-xl-7 order-lg-2 order-xl-1 order-1">
                                    <img id="military-responsive-img" :src="require('../assets/images/program-brochure.png')"
                                       alt="SkillBridge Program Brochure" />
                                    <h3>Plan your future. Leverage your benefits.</h3>
                                    <p>There are program partners in all career fields, including employers like Amazon,
                                       John Deere, Lockheed Martin, UnitedHealth Group, and the U.S. Veterans
                                       Administration—and hundreds more!</p>
                                    <p>Learn more about this exciting opportunity!</p>
                                    <a href="docs/SkillBridge-Program-Brochure.pdf"
                                       title="Download the SkillBridge Program Brochure" target="_blank">
                                       <div class="row">
                                          <div class="col-2 col-md-1 col-lg-2">
                                             <span class="download-icon"></span>
                                          </div>
                                          <div class="col-10 col-md-11 col-lg-10">
                                             Download the SkillBridge Program Brochure
                                          </div>
                                       </div>
                                    </a>
                                 </div>
                                 <div id="military-right-img-col"
                                    class="col-12 col-sm-5 col-md-4 col-lg-12 col-xl-5 order-lg-1 order-xl-2 order-2">
                                    <img :src="require('../assets/images/program-brochure.png')" alt="SkillBridge Program Brochure"
                                       class="img-center" />
                                    <br />
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
   </div>
</template>
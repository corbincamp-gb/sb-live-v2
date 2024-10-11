<template>
   <!-- Main Content Container -->
   <div id="content-container">
      <div class="row">
         <div class="col">
            <div id="main-image-banner" class="banner-military">
               <div class="container">
                  <div class="row">
                     <div class="col">
                        <div id="main-image-banner-text">
                           <p>Help service members find meaningful and gainful employment.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="banner-h1-container">
               <div class="container">
                  <div class="row">
                     <div class="col">
                        <h1>Commanders and Counselors</h1>
                     </div>
                  </div>
               </div>
            </div>
            <div class="container py-4">
               <div class="row">
                  <div class="col pt-5">
                     <div class="d-flex justify-content-center">
                        <ul id="page-tabs" class="nav">
                           <li class="nav-item"><button data-target="#information-tab" data-toggle="tab"
                                 class="nav-link active">Information</button></li>
                           <li class="nav-item"><button data-target="#tools-tab" data-toggle="tab"
                                 class="nav-link">Tools</button></li>
                        </ul>
                     </div>
                     <br />
                     <div id="tabsContent" class="tab-content">
                        <div id="information-tab" class="tab-pane fade active show">
                           <h2>Information</h2>
                           <div class="list-group">
                              <div class="row d-flex">
                                 <div class="col">
                                    <div id="accordion">
                                       <div class="border-bottom mb-2">
                                          <div id="overview-item">
                                             <h3><button class="accordian-item-btn collapsed" data-toggle="collapse"
                                                   onclick="toggleIcon(this)" data-target="#collapseOne"
                                                   aria-expanded="true" aria-controls="collapseOne"><i
                                                      class="expandIcon fa-solid fa-plus"></i>Overview</button></h3>
                                          </div>
                                          <div id="collapseOne" class="collapse" aria-labelledby="overview-item">
                                             <p>Do you have a service member in your command who is preparing for their
                                                release from active duty? Want to support their next steps? SkillBridge
                                                provides active duty service members the opportunity to participate in
                                                industry sponsored work and gain experience and training for up to 180
                                                days prior to their date of release or discharge from active duty.</p>
                                             <p>Unit Commanders must evaluate the mission impact before approving
                                                requests to participate, and they can recall a member from the
                                                SkillBridge program if necessary. Often SkillBridge programs do not last
                                                180 days. Most programs are less than four months, which allows members
                                                not only to receive their industry-related training and set themselves
                                                up for immediate entry into a new career (typically with the industry
                                                partner), but also to have time to use terminal leave, so long as it
                                                does not total more than 180 days combined.</p>
                                             <p>To learn more about existing opportunities, go to the <a
                                                   href="locations.htm" title="SkillBridge Locations Map">SkillBridge
                                                   Locations Map</a> to review programs currently in place.</p>
                                          </div>
                                       </div>
                                       <div class="border-bottom">
                                          <div id="provide-support-item">
                                             <h3><button class="accordian-item-btn collapsed" data-toggle="collapse"
                                                   onclick="toggleIcon(this)" data-target="#collapseTwo"
                                                   aria-expanded="false" aria-controls="collapseTwo"><i
                                                      class="expandIcon fa-solid fa-plus"></i>Provide Support</button>
                                             </h3>
                                          </div>
                                          <div id="collapseTwo" class="collapse" aria-labelledby="provide-support-item">
                                             <p>You can offer support to the service members under your command by
                                                authorizing this time away during their last 180 days of service.
                                                Benefits to the member include:</p>
                                             <ul>
                                                <li>Easing the stress around returning to civilian life.</li>
                                                <li>Gaining critical work experience and training opportunities that are
                                                   directly connected to a post-service career.</li>
                                                <li>Often direct hiring from SkillBridge participation, with no period
                                                   of unemployment.</li>
                                                <li>Discovering whether the company is a good fit for them.</li>
                                             </ul>
                                             <p class="italic">Note: As published in the <a
                                                   href="https://dodsoco.ogc.osd.mil/"
                                                   title="External Link to: Joint Ethics Regulations"
                                                   target="_blank">joint ethics regulations</a> of the Department of
                                                Defense and as outlined in the U.S. Department of Labor's <a
                                                   href="https://www.dol.gov/sites/dolgov/files/WHD/legacy/files/whdfs71.pdf"
                                                   title="External Link to: Fact Sheet #71" target="_blank">Fact Sheet
                                                   #71</a> of January 2018, service members participating in a
                                                SkillBridge program are participating in a capstone training experience
                                                at the end of the military career. The Department of Defense will
                                                continue to cover the salaries and benefits of the participating
                                                members, thus they are NOT eligible for wages or other benefits from
                                                industry partners. </p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="tools-tab" class="tab-pane fade">
                           <h2>Tools</h2>
                           <div class="row">
                              <div class="col-lg-4 mb-5">
                                 <div class="row">
                                    <div class="col-3 col-md-2 col-lg-3 col-xl-2 pb-5 mb-5">
                                       <img :src="require('../assets/images/icon-progdetails.png')"
                                          alt="Program Details Icon" />
                                    </div>
                                    <div class="col-9 col-md-10 col-lg-9 col-xl-10 tools-list">
                                       <h3>Program Details</h3>
                                       <ul>
                                          <li><a href="locations.htm">Current SkillBridge Programs</a></li>
                                          <li><a href="locations.htm">SkillBridge Locations Map</a></li>
                                       </ul>
                                    </div>
                                 </div>

                              </div>
                              <div class="col-lg-4 mb-5">
                                 <div class="row">
                                    <div class="col-3 col-md-2 col-lg-3 col-xl-2 pb-5 mb-5">
                                       <img :src="require('../assets/images/icon-guidance.png')"
                                          alt="Guidance and Handbooks Icon" />
                                    </div>
                                    <div class="col-9 col-md-10 col-lg-9 col-xl-10 tools-list">
                                       <h3>Guidance and Handbooks</h3>
                                       <ul>
                                          <li><a href="docs/SkillBridge-Training-Plan-Required-Elements.pdf">Training
                                                Plan Required Elements</a></li>
                                          <li><a
                                                href="docs/DoD-SkillBridge-Industry-Partner-questionnaire-2023March.pdf">Application
                                                Preview</a></li>
                                          <li><a href="industry-employers.htm?section=3">How to Participate</a></li>
                                       </ul>
                                    </div>
                                 </div>

                              </div>
                              <div class="col-lg-4">

                                 <div class="row">
                                    <div class="col-3 col-md-2 col-lg-3 col-xl-2 pb-5 mb-5">
                                       <img :src="require('../assets/images/icon-resources.png')"
                                          alt="Resources Icon" />
                                    </div>
                                    <div class="col-9 col-md-10 col-lg-9 col-xl-10 tools-list">
                                       <h3>Useful Resources</h3>
                                       <ul>
                                          <li><a
                                                href="docs/toolkit/04_DoD_SkillBridge_Job%20Description_Template_20-Jan-21.docx">Job
                                                Description Template</a></li>
                                          <li><a href="docs/toolkit/01_DoD_SkillBridge_OARPi.xlsx">OARPi</a></li>
                                          <li><a
                                                href="docs/toolkit/DoD_SkillBridge_Training_Plan_2022_Sept-OPTIONAL-RESOURCE.xlsx">Training
                                                Plan</a></li>
                                          <li><a href="docs/toolkit/03_DoD_SkillBridge_Competency_Matrix.xlsx">Competency
                                                Matrix</a></li>
                                          <li><a href="https://www.apprenticeship.gov/partner-finder">Apprenticeship Job
                                                Finder</a></li>
                                       </ul>
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
   </div>
</template>
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
                                    <p>Looking for your next step after your military service? You're in the right
                                        place.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="banner-h1-container">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h1>Military Members</h1>
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
                                            <div class="col-lg-8 order-2 order-lg-1" id="inner-content-container">
                                                <div id="accordion">
                                                    <div class="border-bottom mb-2">
                                                        <div id="overview-item">
                                                            <h3><button class="accordian-item-btn collapsed"
                                                                    data-toggle="collapse" onclick="toggleIcon(this)"
                                                                    data-target="#collapseOne" aria-expanded="true"
                                                                    aria-controls="collapseOne"><i
                                                                        class="expandIcon fa-solid fa-plus"></i>Overview</button>
                                                            </h3>
                                                        </div>
                                                        <div id="collapseOne" class="collapse"
                                                            aria-labelledby="overview-item">
                                                            <p>SkillBridge is an excellent opportunity as you plan for
                                                                your life after the military. SkillBridge matches
                                                                civilian opportunities to your job training and work
                                                                experience at the end of your military duty. In addition
                                                                to taking advantage of resources like Tuition Assistance
                                                                and the GI Bill program, you can enhance your
                                                                marketability and career prospects by participating in a
                                                                SkillBridge opportunity.</p>
                                                            <p>Any rank, enlisted or officer, may apply for SkillBridge.
                                                                SkillBridge permits you to use up to the last 180 days
                                                                of service to train and learn with an industry partner.
                                                                During SkillBridge participation you continue to receive
                                                                military compensation and you are covered by your
                                                                military benefits. Release for SkillBridge is always
                                                                mission-dependent, however, and your unit commander must
                                                                authorize participation prior to entering into any
                                                                agreement with interested industry employment partners.
                                                            </p>
                                                            <p>There are many industry partners with opportunities in a
                                                                variety of fields, such as energy, information
                                                                technology, manufacturing, retail, transportation, civil
                                                                service and more, who have developed SkillBridge
                                                                programs for service members because they value your
                                                                expertise, dedication, and service.</p>
                                                            <p><router-link :to="{ name: 'locations' }"
                                                                    title="SkillBridge Locations">Go
                                                                    to the SkillBridge Locations Map</router-link> to
                                                                learn about
                                                                existing opportunities.</p>
                                                        </div>
                                                    </div>
                                                    <div class="border-bottom mb-2">
                                                        <div id="determine-eligibility-item">
                                                            <h3><button class="accordian-item-btn collapsed"
                                                                    onclick="toggleIcon(this)" data-toggle="collapse"
                                                                    data-target="#collapseTwo" aria-expanded="false"
                                                                    aria-controls="collapseTwo"><i
                                                                        class="expandIcon fa-solid fa-plus"></i>Determine
                                                                    Eligibility</button>
                                                            </h3>
                                                        </div>
                                                        <div id="collapseTwo" class="collapse"
                                                            aria-labelledby="determine-eligibility-item">
                                                            <p>You may be eligible to participate in SkillBridge if you:
                                                            </p>
                                                            <ul>
                                                                <li>Have 180 days of service or fewer remaining prior to
                                                                    your date of discharge and you have at least 180
                                                                    continuous days of active service.</li>
                                                                <li>Obtain approval from your unit commander.</li>
                                                                <li>Agree that participation in SkillBridge can be
                                                                    terminated at any time by the service if mission
                                                                    requirements dictate.</li>
                                                            </ul>
                                                            <p><router-link :to="{ name: 'locations' }"
                                                                    title="SkillBridge Locations">Go
                                                                    to the SkillBridge Locations Map</router-link> to
                                                                learn about
                                                                existing opportunities.</p>

                                                            <p class="italic">Note: As published in the <a
                                                                    href="https://dodsoco.ogc.osd.mil/"
                                                                    title="External Link to: Joint Ethics Regulations"
                                                                    target="_blank">joint ethics regulations</a> of the
                                                                Department of Defense and as outlined in the <a
                                                                    href="https://www.dol.gov/sites/dolgov/files/WHD/legacy/files/whdfs71.pdf"
                                                                    title="External Link to: Fact Sheet #71"
                                                                    target="_blank">Fact Sheet #71</a>, Service members
                                                                participating in a SkillBridge program are participating
                                                                in a Capstone training experience at the end of the
                                                                military career and are NOT eligible for wages or other
                                                                benefits from industry partners since the program is
                                                                supported by the Department of Defense which will
                                                                continue to cover the salaries and benefits of the
                                                                participating members.</p>
                                                        </div>
                                                    </div>
                                                    <div class="border-bottom mb-2">
                                                        <div id="truck-driving-item">
                                                            <h3><button class="accordian-item-btn collapsed"
                                                                    onclick="toggleIcon(this)" data-toggle="collapse"
                                                                    data-target="#collapseThree" aria-expanded="false"
                                                                    aria-controls="collapseThree"><i
                                                                        class="expandIcon fa-solid fa-plus"></i>Commercial
                                                                    Truck Driving Opportunities</button></h3>
                                                        </div>
                                                        <div id="collapseThree" class="collapse"
                                                            aria-labelledby="truck-driving-item">
                                                            <p class="bold">NOTICE FOR ALL MILITARY MEMBERS INTERESTED
                                                                IN COMMERCIAL DRIVING OPPORTUNITIES:</p>
                                                            <p>Historic challenges in the country's supply chain system
                                                                and commercial truck driver shortages are creating many
                                                                opportunities for meaningful and gainful employment.</p>
                                                            <p>The U.S. Department of Transportation (DOT) and the
                                                                Federal Motor Carrier Safety Administration (FMCSA) have
                                                                extensive opportunities for military members completing
                                                                their service to earn their <a
                                                                    href="https://www.transportation.gov/careers/veterans/commericial-motor-vehicle-driver"
                                                                    title="External Link to: Commercial Driver's License"
                                                                    target="_blank">Commercial Driver's License</a>,
                                                                including unique opportunities for <a
                                                                    href="https://www.fmcsa.dot.gov/under21militaryjobs"
                                                                    title="External Link to: Under 21 Military CDL Pilot Program"
                                                                    target="_blank">veterans under 21 years of age</a>.
                                                                The talents and experiences attained during their time
                                                                in military service make veterans ideal candidates for
                                                                these roles.</p>
                                                            <p>By typing key terms in the "Keyword Search" block of the
                                                                SkillBridge Locations page (e.g., "Trucking," "CDL," or
                                                                "Driver") you can find SkillBridge partners that can
                                                                assist you in becoming a commercial truck driver.</p>
                                                            <p>Military members can also get assistance earning a CDL
                                                                while still on active duty by visiting their service's
                                                                Credentialing Opportunities On-Line (COOL) page, linked
                                                                here on the <a href="https://www.cool.osd.mil/"
                                                                    title="External Link to: DOD COOL"
                                                                    target="_blank">DOD COOL</a> page.</p>
                                                            <p>To learn more about federal resources that can help
                                                                service members and veterans pursue a career in the
                                                                trucking industry, view this <a
                                                                    href="https://www.dol.gov/sites/dolgov/files/VETS/files/Veteran-Truckers-fact-sheet4.pdf"
                                                                    title="External Link to: Veteran Truckers Fact Sheet"
                                                                    target="_blank">Fact Sheet</a> from the Department
                                                                of Labor (DOL).</p>
                                                        </div>
                                                    </div>
                                                    <div class="border-bottom">
                                                        <div id="health-care-item">
                                                            <h3><button class="accordian-item-btn collapsed"
                                                                    onclick="toggleIcon(this)" data-toggle="collapse"
                                                                    data-target="#collapseFour" aria-expanded="false"
                                                                    aria-controls="collapseFour"><i
                                                                        class="expandIcon fa-solid fa-plus"></i>Health
                                                                    Care Profession Opportunities</button></h3>
                                                        </div>
                                                        <div id="collapseFour" class="collapse"
                                                            aria-labelledby="health-care-item">
                                                            <p class="bold">NOTICE FOR ALL MILITARY MEMBERS IN HEALTH
                                                                CARE OCCUPATIONS:</p>
                                                            <p>In these unprecedented times, experienced military health
                                                                care providers are essential to ensuring public health.
                                                            </p>
                                                            <p>The "<a
                                                                    href="https://www.congress.gov/117/plaws/publ67/PLAW-117publ67.pdf"
                                                                    title="External Link to: Hire Veterans Health Heroes Act of 2021"
                                                                    target="_blank">Hire Veterans Health Heroes Act of
                                                                    2021</a>" was signed November 2021, with the goal of
                                                                identifying and referring former military health care
                                                                professionals from the Armed Services for employment in
                                                                open positions with the Department of Veterans Affairs
                                                                (VA).</p>
                                                            <p>While they are not specifically listed on the SkillBridge
                                                                site, there are a wide array of VA health professions
                                                                opportunities across the country that can put your
                                                                professional training and skills to work immediately
                                                                helping your fellow veterans and surrounding
                                                                communities. Learn more at <a
                                                                    href="https://www.vacareers.va.gov/Careers/TransitioningMilitary"
                                                                    title="External Link to: VA Careers"
                                                                    target="_blank">the VA careers page</a>.</p>
                                                            <p>By typing "Medical provider" in the "Search" block of the
                                                                SkillBridge Location Page, you can find potential
                                                                SkillBridge partners that can assist you in using your
                                                                skills as a health care provider in the civilian sector.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 order-1 order-lg-2 mb-4">
                                                <div id="side-info-container">
                                                    <div class="row">
                                                        <div
                                                            class="col-12 col-sm-7 col-md-8 col-lg-12 col-xl-7 order-lg-2 order-xl-1 order-1">
                                                            <img id="military-responsive-img"
                                                                :src="require('../assets/images/program-brochure.png')"
                                                                alt="SkillBridge Program Brochure" />
                                                            <h3>Plan your future. Leverage your benefits.</h3>
                                                            <p>Program partners include employers in all career fields
                                                                such as Amazon, John Deere, Lockheed Martin,
                                                                UnitedHealth Group, and the U.S. Veterans
                                                                Administration—and hundreds more!</p>
                                                            <p>Learn more about this exciting opportunity!</p>
                                                            <a href="docs/SkillBridge-Program-Brochure.pdf"
                                                                title="Download the SkillBridge Program Brochure"
                                                                target="_blank">
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
                                                            <img :src="require('../assets/images/program-brochure.png')"
                                                                alt="SkillBridge Program Brochure" class="img-center" />
                                                            <br />
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
                                                    <img :src="require('../assets/images/icon-toolkit.png')"
                                                        alt="Webinar" />
                                                </div>
                                                <div class="col-9 col-md-10 col-lg-9 col-xl-10 tools-list">
                                                    <h3>Get Started Toolkit</h3>
                                                    <ul>
                                                        <li><a
                                                                href="docs/SkillBridge-Training-Plan-Required-Elements.pdf">Training
                                                                Plan Required Elements</a></li>
                                                        <li><a
                                                                href="docs/DoD-SkillBridge-Industry-Partner-questionnaire-2023March.pdf">Application
                                                                Preview</a></li>
                                                        <li><a href="/resources#military-members">How to Participate</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-4 mb-5">
                                            <div class="row">
                                                <div class="col-3 col-md-2 col-lg-3 col-xl-2 pb-5 mb-5">
                                                    <img :src="require('../assets/images/icon-progdetails.png')"
                                                        alt="Webinar" />
                                                </div>
                                                <div class="col-9 col-md-10 col-lg-9 col-xl-10 tools-list">
                                                    <h3>Program Details</h3>
                                                    <ul>
                                                        <li>
                                                            <router-link :to="{ name: 'locations' }">Current SkillBridge
                                                                Programs</router-link>>
                                                        </li>
                                                        <li>
                                                            <router-link :to="{ name: 'locations' }">SkillBridge Locations
                                                                Map</router-link>>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-4">

                                            <div class="row">
                                                <div class="col-3 col-md-2 col-lg-3 col-xl-2 pb-5 mb-5">
                                                    <img :src="require('../assets/images/icon-resources.png')"
                                                        alt="Webinar" />
                                                </div>
                                                <div class="col-9 col-md-10 col-lg-9 col-xl-10 tools-list">
                                                    <h3>Useful Resources</h3>
                                                    <ul>
                                                        <li><a
                                                                href="docs/toolkit/04_DoD_SkillBridge_Job%20Description_Template_20-Jan-21.docx">Job
                                                                Description Template</a></li>
                                                        <li><a
                                                                href="docs/toolkit/01_DoD_SkillBridge_OARPi.xlsx">OARPi</a>
                                                        </li>
                                                        <li><a
                                                                href="docs/toolkit/DoD_SkillBridge_Training_Plan_2022_Sept-OPTIONAL-RESOURCE.xlsx">Training
                                                                Plan</a></li>
                                                        <li><a
                                                                href="docs/toolkit/03_DoD_SkillBridge_Competency_Matrix.xlsx">Competency
                                                                Matrix</a></li>
                                                        <li><a href="https://www.apprenticeship.gov/partner-finder">Apprenticeship
                                                                Job Finder</a></li>
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
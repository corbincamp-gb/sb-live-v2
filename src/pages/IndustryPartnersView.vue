<template>
    <div id="content-container">
        <div class="row">
            <div class="col">
                <div id="main-image-banner" class="banner-industry">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div id="main-image-banner-text">
                                    <p>Tap into the unmatched work ethos service members bring to the workforce.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="banner-h1-container">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h1>Industry Partners</h1>
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
                                                            <h3>
                                                                <button class="accordian-item-btn collapsed" onclick="toggleIcon(this)"
                                                                    data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                                                    aria-controls="collapseOne">
                                                                    <i class="expandIcon fa-solid fa-plus"></i>Overview</button>
                                                            </h3>
                                                        </div>
                                                        <div id="collapseOne" class="collapse"
                                                            aria-labelledby="overview-item">
                                                            <p>Each year approximately 200,000 members of the U.S. Armed
                                                                Forces,
                                                                stationed in over 140 military installations in the U.S.
                                                                and
                                                                overseas, will leave active duty and re-enter the
                                                                civilian work force
                                                                or pursue higher education.</p>
                                                            <p>Through the SkillBridge program industry partners benefit
                                                                from
                                                                gaining early access to the extensive experience,
                                                                skills, and
                                                                unmatched work ethos Service members bring to the
                                                                workforce.
                                                                Employers craft SkillBridge programs to meet their
                                                                specific workforce
                                                                needs, matching those needs to the skills and abilities
                                                                of highly
                                                                motivated Service members, all at no cost.</p>
                                                            <h4>How is this possible?</h4>
                                                            <p>The U.S. Department of Defense continues to pay the
                                                                service member's salary and
                                                                benefits while they participate in SkillBridge. This
                                                                opportunity may last up to the final 180 days of
                                                                service. Military
                                                                installation Commanders can make on-base facilities
                                                                available to
                                                                industry partners for use in their SkillBridge programs,
                                                                or members
                                                                may be authorized to train at the industry partner's
                                                                location off
                                                                installation at minimal to no cost.</p>
                                                            <h4>Reach Talent Anywhere</h4>
                                                            <p>Don't let location limit your access to this talented,
                                                                skilled, and
                                                                dedicated workforce. With SkillBridge, your organization
                                                                can support
                                                                service members on active duty while avoiding some of
                                                                the logistics
                                                                of on-site support. SkillBridge partners across the
                                                                nation may take
                                                                advantage of virtual, online, or distance learning and
                                                                training
                                                                options.</p>
                                                            <h4>What's the catch?</h4>
                                                            <p>It may seem too good to be true, but there is no catch
                                                                except the opportunity to catch the best talent entering
                                                                the civilian labor force each year. This unique
                                                                opportunity is provided to service members by the
                                                                Department of Defense (DOD). The DOD benefits when
                                                                service members return to civilian life with meaningful
                                                                and gainful employment. The DOD wants the best possible
                                                                outcomes for our members--not just short-term jobs, but
                                                                careers with good pay and opportunities for advancement
                                                                just as they had during their military service.</p>
                                                            <p>
                                                                <router-link :to=" { name:'locations'}"  title="Link to: SkillBridge Programs">Review current
                                                                    SkillBridge Programs.</router-link>
                                                                </p>
                                                        </div>
                                                    </div>
                                                    <div class="border-bottom mb-2">
                                                        <div id="get-started-item">
                                                            <h3><button class="accordian-item-btn collapsed" onclick="toggleIcon(this)"
                                                                    data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                                                    aria-controls="collapseTwo"><i
                                                                        class="expandIcon fa-solid fa-plus"></i>Get
                                                                    Started</button>
                                                            </h3>
                                                        </div>
                                                        <div id="collapseTwo" class="collapse"
                                                            aria-labelledby="get-started-item">
                                                            <p>To be a successful SkillBridge industry partner, be sure
                                                                that your
                                                                organization:</p>
                                                            <ul>
                                                                <!--Language Updated to remove the term "Separation" and/or "Transition" -->
                                                                <li>Has clearly defined job training and career
                                                                    development programs
                                                                    designed to enhance opportunities for returning
                                                                    service members.
                                                                    These programs should enable service members to gain
                                                                    the necessary
                                                                    employment skills, knowledge, and abilities to hit
                                                                    the ground
                                                                    running as they look for civilian employment.</li>
                                                                <li>Can ensure a high probability of a job being
                                                                    available to the
                                                                    participating service members at the end of your
                                                                    organization's
                                                                    SkillBridge program.</li>
                                                                <li>Has evidence that your industry is in demand and has
                                                                    opportunities for professional advancement beyond
                                                                    initial
                                                                    employment.</li>
                                                            </ul>
                                                            <h4>Get Started Toolkit</h4>
                                                            <p>Use the information and links below to learn what to
                                                                prepare for as
                                                                your organization readies for the DOD SkillBridge
                                                                Program. Go through
                                                                the information before submitting an Inquiry Form—being
                                                                familiar with
                                                                this information will make the rest of the process
                                                                smoother. When
                                                                you're ready, submit an Inquiry Form (click the "How to
                                                                Participate"
                                                                tab above) to receive the information for completing the
                                                                application.</p>
                                                            <ul>
                                                                <li>
                                                                    <a href="/static/docs/SkillBridge-Training-Plan-Required-Elements.pdf"
                                                                        title="Training Plan Required Elements"
                                                                        target="_blank">Training Plan Required
                                                                        Elements</a><br />
                                                                    Use this document to check that the training plan
                                                                    you create for your organization contains the
                                                                    information needed.
                                                                </li>
                                                                <li>
                                                                    <a href="/static/docs/DoD-SkillBridge-Industry-Partner-questionnaire-2023March.pdf"
                                                                        title="Click to Open the Application Preview PDF"
                                                                        target="_blank">Application Preview</a><br />
                                                                    This application document contains all the questions
                                                                    that will be asked about your SkillBridge program to
                                                                    allow you to prepare your responses.
                                                                </li>
                                                                <li>
                                                                    Blank MOU<br />
                                                                    Not For Official Use. Information Purpose Only
                                                                </li>
                                                            </ul>
                                                            <h4>Other Useful Resources</h4>
                                                            <ul>
                                                                <li>
                                                                    <a href="/static/docs/toolkit/04_DoD_SkillBridge_Job Description_Template_20-Jan-21.docx"
                                                                        title="Click to Download the Job Description Template Word Document"
                                                                        target="_blank">Job Description
                                                                        Template</a><br />
                                                                    This Job Description Template helps you create a job
                                                                    description
                                                                    and profile for the jobs service members can pursue
                                                                    when they
                                                                    complete your SkillBridge program. Use this template
                                                                    in alignment
                                                                    with the Competency Matrix and the Education Plan to
                                                                    help ensure
                                                                    the success of your DOD SkillBridge program.
                                                                </li>
                                                                <li>
                                                                    <a href="/static/docs/toolkit/01_DoD_SkillBridge_OARPi.xlsx"
                                                                        title="Click to Download the OARPi - Stakeholder Table Excel Workbook"
                                                                        target="_blank">OARPi - Stakeholder
                                                                        Table</a><br />
                                                                    This OARPi Tool helps your organization and other
                                                                    key parties identify, document, and provide contact
                                                                    information for all personnel who are important for
                                                                    your DOD SkillBridge Program development,
                                                                    management, and reporting. We recommend that at the
                                                                    start of your program your critical stakeholders ask
                                                                    each other how often they would like to be notified
                                                                    of program status.
                                                                </li>
                                                                <li>
                                                                    <a href="industry-employers.htm?section=3"
                                                                        title="How to Participate">How to
                                                                        Participate</a><br />
                                                                    To participate in the DOD SkillBridge Program,
                                                                    complete the
                                                                    Inquiry Form located under the How to Participate
                                                                    section.
                                                                </li>
                                                                <li>
                                                                    <a href="/static/docs/toolkit/DoD_SkillBridge_Training_Plan_2022_Sept-OPTIONAL-RESOURCE.xlsx"
                                                                        title="Click to Download the Training Plan Excel Workbook"
                                                                        target="_blank">Training Plan</a><br />
                                                                    This Training Plan Matrix helps your organization
                                                                    create a plan
                                                                    and schedule for your SkillBridge program
                                                                    educational activities
                                                                    such as classroom training, online training, guest
                                                                    lecturers, and
                                                                    assessments.
                                                                </li>
                                                                <li>
                                                                    <a href="/static/docs/toolkit/03_DoD_SkillBridge_Competency_Matrix.xlsx"
                                                                        title="Click to Download the Competency Matrix Excel Workbook"
                                                                        target="_blank">Competency Matrix</a><br />
                                                                    This Competency Matrix Template helps your
                                                                    organization catalog
                                                                    and define the competencies that are important for
                                                                    your program,
                                                                    participants, and employers. These competencies
                                                                    align to the job
                                                                    role requirements and expectations for which you are
                                                                    training your
                                                                    participants so they can graduate and gain
                                                                    employment. Your
                                                                    program will better meet your employment goals if
                                                                    you align the
                                                                    defined competencies to the learning objectives from
                                                                    each
                                                                    educational asset during its delivery or execution.
                                                                </li>
                                                                <li>
                                                                    <a href="https://www.apprenticeship.gov/partner-finder"
                                                                        title="External Link to: DOL Open Apprenticeships"
                                                                        target="_blank">Apprenticeships Job
                                                                        Finder</a><br />
                                                                    Does your organization offer a DOL Registered
                                                                    Apprenticeship? If
                                                                    so, have your organization's certificate or letter
                                                                    from the DOL or
                                                                    other state or federal authority ready, and send it
                                                                    when
                                                                    requested. It is an advantage if your organization
                                                                    appears in the
                                                                    DOL Apprenticeship Finder, because that is the first
                                                                    place many people
                                                                    check for this information.
                                                                </li>
                                                            </ul>
                                                            <p>Note: As published in the <a
                                                                    href="https://dodsoco.ogc.osd.mil/"
                                                                    title="External Link to: joint ethics regulations"
                                                                    target="_blank">joint ethics regulations</a> of the
                                                                DOD, and as outlined in the U.S. Department of Labor <a
                                                                    href="/resources"
                                                                    title="Resources page">guidance</a>, service
                                                                members participating in a SkillBridge program are
                                                                participating in a
                                                                Capstone training experience at the end of their
                                                                military career. The Department of Defense will continue
                                                                to cover the salaries and benefits of the participating
                                                                members, thus they are NOT eligible for wages or other
                                                                benefits from industry partners. </p>
                                                            <!--<p>Review <a href="locations.htm" title="Programs already in place">current SkillBridge Programs</a>.</p>
                                                      <p>Learn more about <a href="separation-map.htm" title="Separation Map">how many service members are expected to separate from the military</a>. This map shows military installations across the country and the numbers of military personnel that separated from each installation in 2018. You can use this information to gauge how many potential participants your program might be able to draw from.</p>
                                                      <p class="italic">Note: As published in the <a href="https://dodsoco.ogc.osd.mil/" title="joint ethics regulations" target="_blank">joint ethics regulations</a> of the Department of Defense and as outlined in the U.S. Department of Labor <a href="resources.htm">guidance</a>, service members participating in a SkillBridge program are participating in a Capstone training experience at the end of the military career and are NOT eligible for wages or other benefits from industry partners since the program is supported by the Department of Defense which will continue to cover the salaries and benefits of the participating members.</p>-->
                                                        </div>
                                                    </div>
                                                    <div class="border-bottom">
                                                        <div id="how-to-participate-item">
                                                            <h3>
                                                                <button class="accordian-item-btn collapsed" onclick="toggleIcon(this)"
                                                                    data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                                                    aria-controls="collapseThree"><i
                                                                        class="expandIcon fa-solid fa-plus"></i>How to
                                                                    Participate</button>
                                                                </h3>
                                                        </div>
                                                        <div id="collapseThree" class="collapse"
                                                            aria-labelledby="how-to-participate-item">
                                                            <p>To get started, please complete the Inquiry Form for
                                                                interested Industry Partners on the <a
                                                                    href="/contacts" title="Contact Us">Contact Us
                                                                    page</a>, and check the "I want to apply for the
                                                                SkillBridge Program now" checkbox if you are ready to
                                                                begin the application process.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 order-1 order-lg-2 mb-4">
                                                <div id="side-info-container">
                                                    <div class="row">
                                                        <div class="col-3 col-sm-2 col-lg-3 col-xl-2">
                                                            <img :src="require('../assets/images/icon-webinar.png')" alt="Webinar" />
                                                        </div>
                                                        <div class="col-9 col-sm-10 col-lg-9 col-xl-10">
                                                            <h3>New Partner Application Process Information Session</h3>
                                                            <span id="webinar-date">September 18, 2024<br />
                                                                2 p.m. - 3 p.m. EST
                                                            </span>
                                                            <!--<strong>Registration opens on September 13, 2024</strong><br /><br/> -->

                                                            <a href="https://events.teams.microsoft.com/event/420f35c0-0e84-46c4-b533-3817711a4c7c@ed0b4496-7d2c-4b10-8f86-ad2d54177278"
                                                                target="_blank"
                                                                title="Register for the Webinar Here"><span
                                                                    class="register-icon"></span><strong> Register
                                                                    Here</strong><span class="arrow"></span></a><br />
                                                            <br />
                                                            <h3>Next Session:</h3>
                                                            <span id="webinar-date">October 2, 2024<br />
                                                                2 p.m. - 3 p.m. EST
                                                            </span>
                                                            <a href="/webinar"><strong>View a previous information
                                                                    session</strong><span class="arrow"></span></a>
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
                                                    <img :src="require('../assets/images/icon-toolkit.png')" alt="Get Started Toolkit Icon" />
                                                </div>
                                                <div class="col-9 col-md-10 col-lg-9 col-xl-10 tools-list">
                                                    <h3>Get Started Toolkit</h3>
                                                    <ul>
                                                        <li><a href="/static/docs/SkillBridge-Training-Plan-Required-Elements.pdf"
                                                                title="Click to Open the Training Plan Required Elements PDF">Training
                                                                Plan Required Elements</a></li>
                                                        <li><a href="/static/docs/DoD-SkillBridge-Industry-Partner-questionnaire-2023March.pdf"
                                                                title="Click to Open the Application Preview PDF">Application
                                                                Preview</a></li>
                                                        <li>Blank MOU (Not For Official Use. Information Purpose Only)
                                                        </li>
                                                        <li><router-link :to="{ name: 'industrypartners', query: {section: 3}}"
                                                                title="Click to Open the How to Participate PDF">How to Participate</router-link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 mb-5">
                                            <div class="row">
                                                <div class="col-3 col-md-2 col-lg-3 col-xl-2 pb-5 mb-5">
                                                    <img :src="require('../assets/images/icon-progdetails.png')" alt="Program Details Icon" />
                                                </div>
                                                <div class="col-9 col-md-10 col-lg-9 col-xl-10 tools-list">
                                                    <h3>Program Details</h3>
                                                    <ul>
                                                        <li>
                                                            <router-link :to="{name: 'locations'}">Current SkillBridge Programs</router-link>
                                                        </li>
                                                        <li>
                                                            <router-link :to="{name: 'locations'}">SkillBridge Locations Map</router-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-4">

                                            <div class="row">
                                                <div class="col-3 col-md-2 col-lg-3 col-xl-2 pb-5 mb-5">
                                                    <img :src="require('../assets/images/icon-resources.png')" alt="Resources Icon" />
                                                </div>
                                                <div class="col-9 col-md-10 col-lg-9 col-xl-10 tools-list">
                                                    <h3>Useful Resources</h3>
                                                    <ul>
                                                        <li><a
                                                                href="/static/docs/toolkit/04_DoD_SkillBridge_Job%20Description_Template_20-Jan-21.docx">Job
                                                                Description Template</a></li>
                                                        <li><a
                                                                href="/static/docs/toolkit/01_DoD_SkillBridge_OARPi.xlsx">OARPi</a>
                                                        </li>
                                                        <li><a
                                                                href="/static/docs/toolkit/DoD_SkillBridge_Training_Plan_2022_Sept-OPTIONAL-RESOURCE.xlsx">Training
                                                                Plan</a></li>
                                                        <li><a
                                                                href="/static/docs/toolkit/03_DoD_SkillBridge_Competency_Matrix.xlsx">Competency
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

<script>

export default {
    created () {
      document.title = `${process.env.VUE_APP_TITLE_PREFIX} - Industry Partners`;
  }
};
</script>
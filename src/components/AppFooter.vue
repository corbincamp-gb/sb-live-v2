<template>
    <!-- Footer -->
    <footer id="footer">
        <div id="footer-container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2">
                        <a href="https://www.defense.gov/" class="footer-image-link"
                            title="External Link to: defense.gov" target="_blank"><img
                                :src="require('../assets/images/footer-seal.png')" alt="DOD Seal" /></a>
                        <a href="https://www.veteranscrisisline.net/" class="footer-image-link"
                            title="External Link to: veteranscrisisline.net" target="_blank">
                            <img :src="require('../assets/images/crisis-line.png')" alt="Veteran's Crisis Hotline" />
                        </a>
                    </div>
                    <div class="col-lg-10">
                        <div id="footer-links-container">
                            <div class="row">
                                <div class="col-lg-3">
                                    <span class="footer-section-label">Support</span>
                                    <ul>
                                        <li>
                                            <a href="https://skillbridge.org" title="Partner CMS Login" target="_blank">Partner
                                                CMS Login</a>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'contacts' }" title="Contact Us">Contact Us</router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'sitemap' }"  title="Site Map">Site Map</router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'diversitynotice' }"  title="Diversity, Equity and Inclusion, and Anti-Extremism">Diversity,
                                                Equity and Inclusion, and Anti-Extremism</router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-3">
                                    <span class="footer-section-label">Program Overview</span>
                                    <ul>
                                        <li>
                                            <router-link :to="{ name: 'programoverview' }"
                                                title="What is SkillBridge?">What is SkillBridge?</router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'locations'}" title="Find a SkillBridge Opportunity">Find a
                                                SkillBridge Opportunity</router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'organizations'}" title="DOD Authorized Organizations">DOD
                                                Authorized Organizations</router-link>
                                        </li>
                                        <li>
                                            <router-link :to="{ name: 'faq'}" title="Frequently Asked Questions">Frequently Asked Questions</router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-3">
                                    <span class="footer-section-label">Members and Partners</span>
                                    <ul>
                                        <li>
                                            <router-link :to=" { name: 'industrypartners'}" title="Industry Partners">Industry Partners</router-link>
                                        </li>
                                        <li>
                                            <router-link :to=" { name: 'militarymembers'}" title="Military Members">Military Members</router-link>
                                        </li>
                                        <li>
                                            <router-link :to=" { name: 'commanderseducationoffice'}" title="Commanders and Counselors">Commanders and Counselors</router-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-3">
                                    <span class="footer-section-label">Resources</span>
                                    <ul>
                                        <li>
                                            <a href="/resources#military-members" title="Military Members Guidance">Military Members Guidance</a>
                                        </li>
                                        <li>
                                            <a href="/resourcesindustry-partners" title="Industry Partners Guidance">Industry Partners Guidance</a>
                                        </li>
                                        <li>
                                            <a href="/resources#general-guidance" title="General Guidance">General Guidance</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col-lg-7 order-lg-1 order-2">
                        <div id="copyright">
                            &copy; 2023 Official Department of Defense website.<br />
                            <router-link :to=" { name: 'privacyandsecurity'}" title="Legal & Administrative">Legal &amp; Administrative</router-link>
                         </div>
                    </div>
                    <div class="col-lg-5 order-lg-2 order-1">
                        <div id="footer-logo-container">
                            <img :src="require('../assets/images/footer-logo.png')" alt="DOD SkillBridge Program"
                                id="footer-logo" />
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<template>
    <!-- Header -->
    <header id="header">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-3">
                    <div class="row">
                        <div class="col-6 col-lg-12">
                            <a href="/" id="logo-link" title="DOD SkillBridge Program">
                                <img :src="require('../assets/images/logo.png')" alt="DOD SkillBridge Program" /></a>
                        </div>
                        <div class="col-6 d-flex d-lg-none justify-content-end">
                            <button id="mobile-nav-toggle" class="collapsed" data-toggle="collapse"
                                data-target="#mobile-nav-content-container" aria-expanded="false"
                                aria-controls="mobile-nav-content-container" aria-label="Toggle Navigation"></button>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-lg-9">
                    <!-- Desktop Navigation -->
                    <div id="desktop-nav-container">
                        <div id="nav-flex-container">
                            <div id="top-nav-container">
                                <ul id="top-nav">
                                    <li>
                                        <a href="https://skillbridge.org" id="top-nav-partner-link"
                                            title="Partner CMS Login" target="_blank"><span class="icon"></span>Partner
                                            CMS Login</a>
                                    </li>
                                    <li>
                                        <a href="locations" id="top-nav-locations-link"
                                            title="SkillBridge Locations"><span class="icon"></span>SkillBridge
                                            Locations</a>
                                    </li>
                                    <li>
                                        <div class="input-group">
                                            <input type="text" id="site-search" class="form-control"
                                                placeholder="Search" aria-label="Search" />
                                            <div class="input-group-append">
                                                <button class="btn" id="search-btn" type="button"
                                                    aria-label="Search"><img :src="require('../assets/images/icon-search.png')"
                                                        alt="Search" /></button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div id="main-nav-container">
                                <nav>
                                    <ul id="main-nav">
                                        <li>
                                            <div>Program Overview<span class="arrow"></span></div>
                                            <ul class="submenu">
                                                <li class="subitem"><a href="/programoverview"
                                                        title="What is SkillBridge?">What is SkillBridge?</a></li>
                                                <li class="subitem"><a href="locations.htm"
                                                        title="Find a SkillBridge Opportunity">Find a SkillBridge
                                                        Opportunity</a>
                                                </li>
                                                <li class="subitem"><a href="organizations.htm"
                                                        title="DOD Authorized Organizations">DOD Authorized
                                                        Organizations</a></li>
                                                <li class="subitem"><a href="faq.htm" title="FAQs">FAQs</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div>Members and Partners<span class="arrow"></span></div>
                                            <ul class="submenu">
                                                <li class="subitem"><a href="industry-employers.htm"
                                                        title="Industry Partners">Industry Partners</a></li>
                                                <li class="subitem"><a href="military-members.htm"
                                                        title="Military Members">Military Members</a></li>
                                                <li class="subitem"><a href="commanders-education-office.htm"
                                                        title="Commanders and Counselors">Commanders and Counselors</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div>Resources<span class="arrow"></span></div>
                                            <ul class="submenu">
                                                <li class="subitem"><a href="resources.htm#military-members"
                                                        title="Military Members Guidance">Military Members Guidance</a>
                                                </li>
                                                <li class="subitem"><a href="resources.htm#industry-partners"
                                                        title="Industry Partners Guidance">Industry Partners
                                                        Guidance</a></li>
                                                <li class="subitem"><a href="resources.htm#general-guidance"
                                                        title="General Guidance">General Guidance</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contacts.htm" title="Contact Us">Contact Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#content-container" class="sr-only">Skip to main content</a>
            </div>
            <!-- Mobile Navigation -->
            <div id="mobile-nav-content-container" class="row collapse">
                <div class="col">
                    <div id="mobile-top-nav-container">
                        <div class="row">
                            <div class="col d-flex justify-content-between">
                                <a href="https://skillbridge.org" id="mobile-cms-login-link" title="Partner CMS Login"
                                    target="_blank"><span class="icon"></span>Partner CMS Login</a>
                                <a href="locations.htm" id="mobile-locations-link" title="SkillBridge Locations"><span
                                        class="icon"></span>SkillBridge Locations</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="input-group">
                                    <input type="text" id="mobile-site-search" class="form-control" placeholder="Search"
                                        aria-label="Search" />
                                    <div class="input-group-append">
                                        <button class="btn" id="mobile-search-btn" type="button"
                                            aria-label="Search"><img src="../assets/images/icon-search.png"
                                                alt="Search" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="mobile-main-nav-container">
                        <div class="row">
                            <div class="col">
                                <nav>
                                    <ul id="mobile-main-nav">
                                        <li>
                                            <div class="collapsed" data-toggle="collapse"
                                                data-target="#mobile-program-overview-nav" aria-expanded="false"
                                                aria-controls="mobile-program-overview-nav">Program Overview<span
                                                    class="arrow"></span></div>
                                            <ul class="submenu collapse" id="mobile-program-overview-nav">
                                                <li class="subitem"><a href="program-overview.htm"
                                                        title="What is SkillBridge?">What is SkillBridge?</a></li>
                                                <li class="subitem"><a href="locations.htm"
                                                        title="Find a SkillBridge Opportunity">Find a SkillBridge
                                                        Opportunity</a>
                                                </li>
                                                <li class="subitem"><a href="organizations.htm"
                                                        title="DOD Authorized Organizations">DOD Authorized
                                                        Organizations</a></li>
                                                <li class="subitem"><a href="faq.htm" title="FAQs">FAQs</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div class="collapsed" data-toggle="collapse"
                                                data-target="#mobile-members-nav" aria-expanded="false"
                                                aria-controls="mobile-members-nav">Members and Partners<span
                                                    class="arrow"></span></div>
                                            <ul class="submenu collapse" id="mobile-members-nav">
                                                <li class="subitem"><a href="industry-employers.htm"
                                                        title="Industry Partners">Industry Partners</a></li>
                                                <li class="subitem"><a href="military-members.htm"
                                                        title="Military Members">Military Members</a></li>
                                                <li class="subitem"><a href="commanders-education-office.htm"
                                                        title="Commanders and Counselors">Commanders and Counselors</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div class="collapsed" data-toggle="collapse"
                                                data-target="#mobile-resources-nav" aria-expanded="false"
                                                aria-controls="mobile-resources-nav">Resources<span
                                                    class="arrow"></span></div>
                                            <ul class="submenu collapse" id="mobile-resources-nav">
                                                <li class="subitem"><a href="resources.htm#military-members"
                                                        title="Military Members Guidance">Military Members Guidance</a>
                                                </li>
                                                <li class="subitem"><a href="resources.htm#industry-partners"
                                                        title="Industry Partners Guidance">Industry Partners
                                                        Guidance</a></li>
                                                <li class="subitem"><a href="resources.htm#general-guidance"
                                                        title="General Guidance">General Guidance</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col">
                                <div class="row">
                                    <div id="mobile-nav-bottom-links" class="col d-flex justify-content-between">
                                        <a href="contacts.htm" title="Contact Us">Contact Us<span
                                                class="arrow"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
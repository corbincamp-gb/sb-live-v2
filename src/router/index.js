/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/pages/NotFoundView.vue";
import HomeView from "@/pages/HomeView.vue";
import ContactsView from "@/pages/ContactsView.vue";
import DiversityNoticeView from "@/pages/DiversityNoticeView.vue";
import CommandersEducationOfficeView from "@/pages/CommandersEducationOfficeView.vue";
import FaqView from "@/pages/FaqView.vue";
import IndustryPartnersView from "@/pages/IndustryPartnersView.vue";
import LocationsView from "@/pages/LocationsView.vue";
import MilitaryMembersView from "@/pages/MilitaryMembersView.vue";
import OrganizationsView from "@/pages/OrganizationsView.vue";
import PrivacyAndSecurityView from "@/pages/PrivacyAndSecurityView.vue";
import ProgramOverviewView from "@/pages/ProgramOverviewView.vue";
import ResourcesView from "@/pages/ResourcesView.vue";
import SitemapView from "@/pages/SitemapView.vue";
let routes = [
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: "/",
    name: "home",
    meta: {title: "DOD SkillBridge"},
    component: HomeView
  }
];

let routeMap = new Map([
  [{title:"Contact Us", component: ContactsView}, "Contacts"],
  [{title: "Diversity Notice", component: DiversityNoticeView}, "DiversityNotice"],
  [{title: "Commanders Education Office", group: 2, gindex: 2, component:  CommandersEducationOfficeView}, "CommandersEducationOffice"],
  [{title: "Frequently Asked Questions", group:1, gindex:3, component: FaqView}, "FAQ"],
  [{title: "Industry Partners", group:2, gindex: 0, component: IndustryPartnersView}, "IndustryPartners"],
  [{title: "Find a SkillBridge Opportunity", group:1, gindex:1, component: LocationsView},"Locations"],
  [{title: "Military Members", group: 2, gindex: 1, component: MilitaryMembersView},"MilitaryMembers"],
  [{title: "DOD Approved Organizations", group:1, gindex: 2, component: OrganizationsView},"Organizations"],
  [{title: "Privacy and Security", component: PrivacyAndSecurityView}, "PrivacyAndSecurity"],
  [{title: "Resources", component: ResourcesView}, "Resources"],
  [{title: "What is SkillBridge?", group:1, gindex:0, component: ProgramOverviewView}, "ProgramOverview"],
  [{title: "Sitemap",component: SitemapView}, "Sitemap"],
]);

routeMap.forEach((k, v) => {
    let rt = {
      to: `${k}`,
      title: `${v.title}`,
      grp: v.group,
      grpi: v.gindex,
      comp: v.component
    };
    routes.push({
      path: `/${rt.to.toLowerCase()}`,
      name: rt.to.toLowerCase(),
      meta: {title: rt.title, group: rt.grp, gindex: rt.grpi},
      component: rt.comp
    })
  }
);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
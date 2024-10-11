/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";

let routes = [{
  path: "/",
  name: "home",
  component: HomeView
}];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
const pages = `Contacts,DiversityNotice,CommandersEducationOffice,Faq,IndustryEmployers,Locations,MilitaryMembers,Organizations,ProgramOverview,Sitemap`;

pages.split(",").forEach((p) =>
  router.addRoute({ 
    path: `/${p.toLowerCase()}`,
    name: `${p.toLowerCase()}`,
    component: () => import(`../pages/${p}View.vue`)
  })
);

export default router;
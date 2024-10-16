<template>
  <div class="home">
    <!-- Main Content Container -->
    <div id="content-container" class="no-banner">
      <div class="row">
        <div class="col">
          <div class="container py-4">
            <div class="row">
              <div class="col">
                <h1>Authorized SkillBridge Organizations</h1>
                <p>The following list indicates organizations that have been authorized by the Office of the Deputy
                  Assistant Secretary of Defense through official Memorandum of Understanding to work with each of the
                  applicable branches of the military Services and respective installation commanders to develop
                  SkillBridge training programs for their personnel. You can find more details about specific locations,
                  program descriptions, and training duration for these organizations in the <a href="locations.htm"
                    title="SkillBridge Locations">"SkillBridge Locations" table</a>. If there is no information
                  currently showing on the program in the SkillBridge locations table, the organization has been cleared
                  by the Department of Defense, but is either finalizing details with the military Services and
                  installation commanders or is currently in a dormant phase for training and placement programs.</p>
                <p>
                  <span class="bold">Note:</span> The appearance of external hyperlinks does not constitute endorsement
                  by the United States Department of Defense of the linked websites, or the information, products or
                  services contained therein.
                </p>
                <p>
                  SkillBridge Partners/Program POCs with questions, or who wish to make changes to the information
                  displayed here, may <router-link :to="{ name: 'contacts' }" title="Contact the SkillBridge Team">contact
                    the SkillBridge Team</router-link>.
                </p>
                <div class="alert alert-warning">
                  <p class="bold">DOD SkillBridge Memorandum of Understanding (MOU) Renewal Notification [Renewal]</p>
                  <p class="bold" style="margin-bottom:0;">The Office of the Undersecretary of Defense (USD) is granting
                    your organization an MOU extension through to <span class="underline">30 June 2025</span>.</p>
                </div>
                <POGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import POGrid from "@/components/ProgramOrgsGrid.vue";

export default {
  name: "OrganizationsView",
  components: {
    POGrid
  }
};
</script>
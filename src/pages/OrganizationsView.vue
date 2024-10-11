<template>
  <div class="home">
     <POGrid />
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
<template>
    <div id="content-container" class="no-banner">
        <div class="row">
            <div class="col">
                <div class="container py-4">
                    <div class="row">
                        <div class="col">
                            <div class="row">
                                <div class="col">
                                    <h1 style="margin-bottom:0;">Find a SkillBridge Opportunity</h1>
                                </div>
                            </div>
                            <div class="row d-flex">
                                <div class="col-lg-8 mb-5">
                                    <h2 class="locations-h2">Locate DOD SkillBridge Industry Partners participating in
                                        the United States.</h2>
                                    <p class="locations-p">Looking for opportunities in trending career paths such as
                                        medical, truck driving, and information technology?</p>
                                    <p class="locations-p">Enter terms like "healthcare," "transportation," or "data
                                        processing" to find a DOD SkillBridge industry partner in your career field of
                                        interest.</p>
                                </div>
                                <div class="col-lg-4 mb-4">
                                    <img class="locations-map-example"
                                        :src="require('../assets/images/locations-map.png')"
                                        alt="SkillBridge Locations" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div id="filter-container">
                                        <form id="search-form" @submit.prevent="handleSubmit">
                                            <div id="loc-form-top-container">
                                                <div class="form-row">
                                                    <div class="col-md-4">
                                                        <label for="keywords" style="display: none">Keywords</label>
                                                        <input id="keywords" class="mb-2 mb-md-0" type="text"
                                                            placeholder="Keywords"
                                                            v-model="formData.keywords"
                                                            style="width: 100%; max-width: 100%; border-style: solid; border-radius: 4px; border-width: 1px; height: 32px"
                                                            title='Search by Keyword, such as Credentials like "CDL", Organizations or their URLs like "VA.gov", Job or Duty titles like "Programmer"' />
                                                    </div>
                                                    <div class="col-md-1">
                                                        <div class="mb-2 mb-md-0" id="OR">OR</div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <label for="location" style="display: none">Location (State or
                                                            Zip Code)</label>
                                                        <input id="location" class="mb-2 mb-md-0" type="text"
                                                            v-model="formData.location"
                                                            placeholder="Location (State or Zip Code)"
                                                            style="width: 100%; max-width: 100%; border-style: solid; border-radius: 4px; border-width: 1px; height: 32px"
                                                            title="Search by State or Zip Code. For example: CA, California, or 90210" />
                                                    </div>
                                                    <div class="col-md-3">
                                                        <button id="loc-search-btn" class="btn btn-primary"
                                                            title="Click to Search Opportunities">Search</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="loc-form-bot-container">
                                                <div id="filter-by-text">FILTER BY:</div>
                                                <div id="filter-form-row" class="form-row">
                                                    <div class="col">
                                                        <div class="mb-2 mr-2 select2-container-div">
                                                            <label for="provider-dropdown" style="display: none">Partner
                                                                Filter</label>
                                                            <select class="form-control select2-dropdown"
                                                                id="provider-dropdown">
                                                                <option value="-1">Partner</option>
                                                                <option>Partner 1</option>
                                                                <option>Partner 2</option>
                                                                <option>Partner 3</option>
                                                            </select>
                                                        </div>
                                                        <div class="mb-2 mr-2 select2-container-div">
                                                            <label for="service-dropdown" style="display: none">Service
                                                                Filter</label>
                                                            <select class="form-control select2-dropdown"
                                                                id="service-dropdown">
                                                                <option value="-1">All Services</option>
                                                            </select>
                                                        </div>
                                                        <div class="mb-2 mr-2 select2-container-div">
                                                            <label for="duration-of-training-dropdown"
                                                                style="display: none">Duration of Training
                                                                Filter</label>
                                                            <select class="form-control select2-dropdown"
                                                                id="duration-of-training-dropdown">
                                                                <option value="-1">Duration of Training</option>
                                                                <option>1-30 days</option>
                                                            </select>
                                                        </div>
                                                        <div class="mb-2 mr-2 select2-container-div">
                                                            <label for="delivery-method-dropdown"
                                                                style="display: none">Delivery Method Filter</label>
                                                            <select class="form-control select2-dropdown"
                                                                id="delivery-method-dropdown">
                                                                <option value="-1">Delivery Method</option>
                                                                <option>In-person</option>
                                                                <option>Online</option>
                                                                <option>Hybrid (Online and In-person)</option>
                                                            </select>
                                                        </div>
                                                        <div class="mb-2 mr-2 select2-container-div">
                                                            <label for="location-of-prospective-jobs-dropdown"
                                                                style="display: none">Location of Prospective Jobs
                                                                Filter</label>
                                                            <select class="form-control select2-dropdown"
                                                                id="location-of-prospective-jobs-dropdown">
                                                                <option value="-1">Location of Prospective Jobs</option>
                                                            </select>
                                                        </div>
                                                        <div class="mb-2 mr-2 select2-container-div">
                                                            <label for="job-family-dropdown" style="display: none">Job
                                                                Family Filter</label>
                                                            <select class="form-control select2-dropdown"
                                                                id="job-family-dropdown">
                                                                <option value="-1">Job Families</option>
                                                            </select>
                                                        </div>
                                                        <!--<span class="mb-2 mr-2" style="display:inline-block;">
                                                              <label for="company-dropdown" style="display:none;">Company Filter</label>
                                                              <select class="form-control select2-dropdown" id="company-dropdown">
                                                                  <option value="-1">Company</option>
                                                              </select>
                                                          </span>-->
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div id="util-btn-container">
                                        <button id="reset-btn" @click="resetForm">Reset All</button>
                                        <div id="icon-key-container">
                                            <div id="icon-key">
                                                <div id="icon-key-inner-container">
                                                    <span id="icon-key-icon"></span>Icon Key
                                                </div>
                                            </div>
                                            <div id="icon-key-dropdown">
                                                <ul>
                                                    <li><img :src="require('../assets/images/icon-nationwide.png')"
                                                            alt="Program located in multiple states and regions or offered online" /><span>Program
                                                            located in multiple states and regions or offered
                                                            online</span></li>
                                                    <li><img :src="require('../assets/images/icon-row-expand.png')"
                                                            alt="Expand for more information" /><span>Expand for more
                                                            information</span></li>
                                                    <li><img :src="require('../assets/images/icon-map-location.png')"
                                                            alt="View this Opportunity on the Map" /><span>View this
                                                            Opportunity on the Map</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="results-container" style="visibility: hidden; height: 0">
                                        <span id="table-scroll-target"></span>
                                        <table id="location-table" class="display responsive"
                                            style="width: 100% !important">
                                            <thead>
                                                <tr>
                                                    <!--<th>APPLY</th>
                                <th>MAP</th>-->
                                                    <th>Actions</th>
                                                    <th>Organization</th>
                                                    <th>Partner/Program/Agency</th>
                                                    <th>Service</th>
                                                    <th>City</th>
                                                    <th>State</th>
                                                    <th>Zip</th>
                                                    <th>Duration of Training</th>
                                                    <th>Employer POC</th>
                                                    <th>POC Email</th>
                                                    <th>Cost</th>
                                                    <th class="none">Closest Installation</th>

                                                    <th class="none">Opportunity Locations by State</th>
                                                    <th>Delivery Method</th>
                                                    <th>Target MOCs</th>
                                                    <th class="none">Other Eligibility Factors</th>
                                                    <th>Other/Prerequisite</th>
                                                    <!--<th>MOUs</th>-->
                                                    <th class="none">Jobs Description</th>
                                                    <th class="none">Summary Description</th>
                                                    <th class="none">Job Family</th>
                                                    <th class="none">MOU Organization</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div id="locations-footer-notification">
                                Note: The appearance of external hyperlinks does not constitute an endorsement by the
                                United States Department of Defense of the linked websites or the information, products
                                or services contained therein.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { reactive } from "@vue/composition-api";
import { reactive } from "vue";

export default {
  setup() {
    const formData = reactive({
        keywords: "",
        location: ""
    });
    const handleSubmit = () => {
      console.log("Form submitted:", formData);
      // Perform your form submission logic here
    };

    return {
      formData,
      handleSubmit
    };
  },
  methods: {
    resetForm: function() {
        this.formData.keywords = "";
        this.formData.location = "";
    }
  }
};
</script>
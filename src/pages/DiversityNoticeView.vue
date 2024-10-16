<template>
    <div id="content-container">
        <div class="row">
            <div class="col">
                <div class="container py-4">
                    <div class="row">
                        <div class="col">
                            <div class="row">
                                <div class="col">
                                    <h1>Diversity, Equity and Inclusion, and Anti-Extremism</h1>
                                </div>
                            </div>
                            <div class="row d-flex">
                                <div class="col-lg-8 mb-5 order-2 order-lg-1" id="inner-content-container">
                                    <p>"The Department of Defense places the highest importance on treating all
                                        personnel with dignity and respect, in an inclusive environment, free from
                                        impermissible discrimination, harassment, and hate." — Office of the Secretary
                                        of Defense</p>
                                    <p>Reference: <a
                                            href="https://media.defense.gov/2021/Feb/26/2002589872/-1/-1/1/LEADERSHIP-STAND-DOWN-FRAMEWORK.PDF"
                                            title="External link to: Defense.gov website" target="_blank">Leadership
                                            Stand-Down to Address Extremism in the Force</a></p>
                                    <br />
                                    <h2>Diversity, Equity and Inclusion</h2>
                                    <p>"The changing face of the Nation demands that we change. As the demographic
                                        make-up of the American population continues to evolve, it is imperative that
                                        the Department of Defense focus its efforts on emerging talent to ensure that we
                                        successfully attract, recruit, develop and retain a highly-skilled Total-Force
                                        capability of meeting current and future mission requirements." - Office for
                                        Diversity, Equity, and Inclusion</p>
                                    <p>Reference: <a href="https://diversity.defense.gov/"
                                            title="External link to: Office for Diversity, Equity and Inclusion"
                                            target="_blank">Office for Diversity, Equity and Inclusion</a></p>
                                    <br />
                                    <h2>Anti-Extremism</h2>
                                    <p>"The DOD has a compelling interest in preventing the advent and spread of
                                    hate groups and activities within the Department; in guarding against illegal
                                    discrimination; in fostering a military that is politically-neutral and disciplined;
                                    and in recruiting and sustaining an all-volunteer force of sufficient strength and
                                    quality to provide for the Nation's security and to sustain that security over
                                    time." - Office of the Secretary of Defense</p>
                                    <p>Reference: <a
                                            href="https://media.defense.gov/2021/Feb/26/2002589872/-1/-1/1/LEADERSHIP-STAND-DOWN-FRAMEWORK.PDF"
                                            title="External link to: Defense.gov website" target="_blank">Leadership
                                            Stand-Down to Address Extremism in the Force</a></p>
                                </div>
                                <div class="col-lg-4 mb-4 order-1 order-lg-2">
                                    <img :src="require('../assets/images/diversity.png')"
                                        alt="Diversity, Equity and Inclusion, and Anti-Extremism" class="img-center" />
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
      document.title = `${process.env.VUE_APP_TITLE_PREFIX} - Diveristy Notice`;
  }
};
</script>
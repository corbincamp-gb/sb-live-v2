<template>
    <div class="alert alert-success" role="alert">
        <button class="notice-toggle-btn bold" data-toggle="collapse" href="#notice-collapse-2" role="button" aria-expanded="false" aria-controls="notice-collapse-2">
            Attention Prospective SkillBridge Industry Partners!
        </button>
        <div class="collapse show" id="notice-collapse-2">
            <div v-if="banner" v-html="banner.html"></div>
            <div v-else>Loading...</div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    const banner = ref(null);
    fetch(`${process.env.VUE_APP_API_BASE_URL}/HtmlText?alias=MainBanner`)
                    .then(response => response.json())
                    .then(data => banner.value = data);
</script>
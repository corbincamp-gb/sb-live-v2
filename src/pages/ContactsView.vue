<template>
    <p>Contact</p>
</template>

<script>
export default {
  created () {
      document.title = `${process.env.VUE_APP_TITLE_PREFIX} - Contact`;
  }
};
</script>
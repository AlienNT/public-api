<script setup>
import VEntriesPage from "./entries/VEntriesPage.vue";
</script>

<template>
  <div class="row content scroll-container">
    <VEntriesPage/>
  </div>
</template>

<style scoped lang="scss">
.content {
  height: 100%;
  flex-direction: column;
}
</style>
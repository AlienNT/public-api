<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";

</script>

<template>
  <TheHeader/>
  <TheMain/>
</template>

<style lang="scss">
#app {
  width: 100%;
  display: flex;
  height: 100vh;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

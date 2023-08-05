<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";

function setAppHeight(height = window.innerHeight) {
  console.log('set')
  document.documentElement.style.setProperty('--app-height', `${height}px`)
}

function debounce(callback, timeout) {
  let timer;

  return () => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => callback(), timeout);
  };

}

setAppHeight()

const timeout = debounce(() => setAppHeight(), 50)

window.onresize = () => {
  timeout()
}
</script>

<template>
  <TheHeader/>
  <TheMain/>
</template>

<style lang="scss">
#app {
  width: 100%;
  display: flex;
  height: $appHeight;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>

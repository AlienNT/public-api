<script setup>

import TheContent from "./TheContent.vue";
import TheSidebar from "./TheSidebar.vue";
import {onMounted} from "vue";
import {useEntries} from "../compositions/useEntries.js";
import {useEvents} from "../compositions/useEvents.js";

const {entries, fetchEntries} = useEntries()
const {isNavActive} = useEvents()

onMounted(() => {
  document.querySelector('html').classList.add('light')
  fetchEntries()
})
</script>

<template>
  <main class="main scroll-container">
    <div class="container">
      <div class="row">
        <div
            class="col-2 sidebar-col"
            :class="isNavActive && 'active'"
        >
          <TheSidebar/>
        </div>
        <div class="col-10">
          <TheContent/>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  height: calc(100% - #{$headerHeight});
}

.container {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  .row {
    height: 100%;
  }
}

.sidebar-col {
  min-width: 240px;
  overflow-y: auto;
  transition: .4s ease;

  @media #{$mediaMobile} {
    position: fixed;
    width: 100%;
    z-index: 2;
    backdrop-filter: blur(4px);
    &:not(.active) {
      left: 0;
      top: $headerHeight;
      transform: translateX(-100%);

    }
  }
  @media #{$mediaSmallMobile} {
    padding: 0;
  }
}

</style>
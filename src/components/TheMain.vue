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
  <main
      class="main scroll-container"
      :class="isNavActive && 'active'"
  >
    <div class="container">
      <div class="row">
        <div
            class="col-2 sidebar-col"

        >
          <TheSidebar/>
        </div>
        <div
            class="col-10 content-col"
            :class="isNavActive && 'touch-actions-blocked'"
        >
          <TheContent/>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main {
  width: 100vw;
  height: calc(100% - #{$headerHeight});
  overflow-x: hidden;

  &:not(.active) {
    top: $headerHeight;
    //transform: translateX(-50%);

  }
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
  overscroll-behavior: none;
  min-width: 240px;
  overflow-y: auto;
  transition: .4s ease;

  @media #{$mediaMobile} {
    position: fixed;
    width: 100%;
    z-index: 2;
    backdrop-filter: blur(4px);

    &:not(.active &) {
      transform: translateX(-100%);
    }


  }
  @media #{$mediaSmallMobile} {
    padding: 0;
  }
}

@media #{$mediaMobile} {

}

.touch-actions-blocked {
  * {
    touch-action: none;
  }
}
</style>
<script setup>
import VBurger from "./VBurger.vue";
import {useEvents} from "../compositions/useEvents.js";
import VLogo from "./entries/VLogo.vue";

const {isNavActive, setIsNavActive, scrollContentContainer, scrollToTop} = useEvents()

function onScroll() {
  scrollToTop(scrollContentContainer.value)
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="row header-row">
        <div class="col logo">
          <VLogo
              @on-click="onScroll"
          />
        </div>
        <div class="col burger-col">
          <VBurger
              :is-active="isNavActive"
              @on-click="setIsNavActive"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background: $headerBGColor;
  min-height: $headerHeight;
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
}

.header-row {
  justify-content: space-between;
}

.burger-col {
  display: none;
  flex: none;
  align-items: center;
  justify-content: center;
  @media #{$mediaMobile} {
    display: flex;
  }
}
</style>
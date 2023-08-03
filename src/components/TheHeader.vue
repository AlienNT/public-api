<script setup>
import VBurger from "./VBurger.vue";
import {useEvents} from "../compositions/useEvents.js";
import VLogo from "./entries/VLogo.vue";
import {useApiHealth} from "../compositions/useApiHealth.js";
import {onMounted} from "vue";
import LiveAPIStatus from "./LiveAPIStatus.vue";

const {isNavActive, setIsNavActive, scrollContentContainer, scrollToTop} = useEvents()
const {isAlive, fetchApiHealth} = useApiHealth()

onMounted(() => {
  /*setInterval(async () => {
    await fetchApiHealth()
  }, 10000)*/
})

function onScroll() {
  scrollToTop(scrollContentContainer.value)
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="row header-row">
        <div class="col logo-col">
          <VLogo
              @on-click="onScroll"
          />
        </div>
        <div v-if="false" class="col alive-col">
          <LiveAPIStatus
              :is-alive="isAlive"
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

.logo-col {
  @media #{$mediaSmallMobile} {
    max-width: 130px;
  }
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
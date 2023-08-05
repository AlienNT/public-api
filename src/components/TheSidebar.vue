<script setup>

import VCategoriesList from "./categories/VCategoriesList.vue";
import {ref} from "vue";
import {useEvents} from "../compositions/useEvents.js";
import VSearch from "./VSearch.vue";

const {setIsNavActive} = useEvents()

const filter = ref('')

function onReset() {
  filter.value = ''
}

function onInput(e) {
  filter.value = e
}
</script>

<template>
  <div
      class="sidebar scroll-container"
      @click.self="setIsNavActive(false)"
  >
    <div class="wrapper">
      <VSearch
          :field-value="filter"
          @on-input="onInput"
          @on-reset="onReset"
      />
      <div class="list">
        <VCategoriesList
            :search-filter="filter"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/css/variables/mixins";

$lightColor: rgba(100, 149, 237, 0.54);
.sidebar {
  width: 100%;
  padding: 15px 0;
  height: calc($appHeight - $headerHeight);
  @media #{$mediaSmallMobile} {
    padding: 0;
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  max-width: 320px;
  background: $sidebarBGColor;
  transition: .2s ease;
  overflow: hidden;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.6);
  cursor: pointer;
  border-radius: 5px;
  height: 100%;
  @media #{$mediaSmallMobile} {
    max-width: 100%;
    width: 100%;
    overflow-x: hidden;
    border-radius: 0;
  }
}

.list {
  overflow-y: scroll;
  scrollbar-gutter: both-edges;
  padding: 5px 15px;
  @include useScrollBar(15px)
}
</style>
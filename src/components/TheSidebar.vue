<script setup>

import VCategoriesList from "./categories/VCategoriesList.vue";
import {ref} from "vue";
import {useEvents} from "../compositions/useEvents.js";

const {setIsNavActive} = useEvents()

const filter = ref('')

function onReset() {
  filter.value = ''
}
</script>

<template>
  <div
      class="sidebar scroll-container"
      @click.self="setIsNavActive(false)"
  >
    <div class="wrapper">
      <form
          class="search"
          @reset="onReset"
      >
        <label
            :class="filter.length && 'not-empty'"
        >
          <input
              type="search"
              v-model="filter"
              placeholder="Search"
          >
          <button
              type="reset"
              aria-label="reset search field button"
              class="reset"
          />
        </label>
      </form>
      <div class="list">
        <VCategoriesList
            :search-filter="filter"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$lightColor: rgba(100, 149, 237, 0.54);
.sidebar {
  width: 100%;
  padding: 15px 0;
  height: calc(100vh - #{$headerHeight});
}

.wrapper {
  display: flex;
  flex-direction: column;
  max-width: 320px;
  background: $sidebarBGColor;
  transition: .2s ease;
  overflow-y: scroll;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.6);
  cursor: pointer;
  padding: 0 15px 15px;
  border-radius: 5px;
  height: 100%;
  @media #{$mediaSmallMobile} {
    max-width: 100%;
    width: 100%;
  }
}

.not-empty {
  &:hover {
    .reset {
      z-index: 1;
      opacity: 1;
    }
  }
}

.search {
  position: sticky;
  top: 0;
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: 15px;
  padding: 15px;
  background: $sidebarBGColor;
  box-shadow: 0 0 8px $sidebarItemBGColor;

  input {
    border-radius: 5px;
    border: 0;
    padding: 5px 15px;
    box-shadow: 0 0 4px inset $sidebarItemBGColor;
    transition: .2s ease;
    width: 100%;

    &:focus {
      &::placeholder {
        opacity: 0;
      }
    }

    &::placeholder {
      transition: .2s ease;
      color: $sidebarItemBGColor;
    }
  }
}

label {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.reset {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: transparent;
  transition: .2s;
  opacity: 0;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  bottom: 0;
  cursor: pointer;
  z-index: -1;

  &:hover {
    transform: translateY(-50%) scale(1.1);

    &:before, &:after {
      background: $sidebarItemBGColor;
    }
  }

  &:before, &:after {
    transition: .2s ease;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 5px;
    background: lighten($sidebarItemBGColor, 15%);
    position: absolute;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
}
</style>
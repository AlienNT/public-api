<script setup>
import VEntriesList from "./VEntriesList.vue";
import {useEntries} from "../../compositions/useEntries.js";
import {onMounted, ref, watch} from "vue";
import {useEvents} from "../../compositions/useEvents.js";
import TheFooter from "../TheFooter.vue";
import VEntriesFilter from "./VEntriesFilter.vue";

const {
  entries,
  filteredEntries,
  fetchEntries,
  setShowCount,
  showCount,
  entriesFilters,
  setEntriesFilters
} = useEntries()
const {setScrollContentContainer} = useEvents()

const entriesRef = ref(null)
const isLoad = ref(true)

watch(entries, async (value) => {
  if (!value.length) {
    isLoad.value = false
    await fetchEntries().finally(() => {
      isLoad.value = true
    })
  }

}, {
  immediate: true
})

const isScrolled = ref(false)


onMounted(() => {
  const target = entriesRef.value

  if (target) {
    setScrollContentContainer(target)

    target.onscroll = (e) => {
      isScrolled.value = getIsScrolled(e)
    }
  }
})

watch(isScrolled, (value) => {
  if (value) {
    setShowCount(showCount.value + 5)
  }
})

function getIsScrolled(e) {
  return e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop - 60 < 1
}

function getEntriesFilterValue(filter) {

  switch (entriesFilters.value?.[filter]) {
    case true:
      return false;
    case false:
      return null;
    case null:
    case undefined:
      return true
  }
}

function onFilter(e) {
  setEntriesFilters(e, getEntriesFilterValue(e))
}
</script>

<template>
  <div class="entries-page">
    <div class="entries-filters-wrapper">
      <VEntriesFilter
          :filters="entriesFilters"
          @on-click="onFilter"
      />
    </div>
    <div class="entries-list-wrapper" ref="entriesRef">
      <transition appear name="fade" mode="out-in">
        <VEntriesList
            v-if="filteredEntries?.length"
            :entries-list="filteredEntries"
        />
        <div
            class="loading"
            v-else-if="!isLoad"
        >
          loading...
        </div>
        <div
            v-else
            class="empty-list"
        >
          <div class="title">
            no entries
          </div>
        </div>
      </transition>
      <TheFooter/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.entries-page {
  word-break: break-all;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
}
.entries-filters-wrapper {

}
.entries-list-wrapper {
  height: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
.empty-list, .loading {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-list {
  overflow-y: auto;
  .title {
    font-size: 24px;
    &:first-letter {
      text-transform: uppercase;
    }
  }
}

.loading {
  font-size: 24px;
}
</style>
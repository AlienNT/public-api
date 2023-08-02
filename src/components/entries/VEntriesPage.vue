<script setup>
import VEntriesList from "./VEntriesList.vue";
import {useEntries} from "../../compositions/useEntries.js";
import {onMounted, ref, watch} from "vue";
import {useEvents} from "../../compositions/useEvents.js";
import TheFooter from "../TheFooter.vue";

const {entries, fetchEntries, setShowCount, showCount} = useEntries()
const {setScrollContentContainer} = useEvents()

const entriesRef = ref(null)
const isLoad = ref(false)

watch(entries, async (value) => {
  if (!value.length) {
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

</script>

<template>
  <div class="entries-page" ref="entriesRef">
   <transition appear name="fade" mode="out-in">
     <VEntriesList
         v-if="entries.length"
         :entries-list="entries"
     />
     <div
         v-else-if="isLoad"
         class="empty-list"
     >
       Empty List
     </div>
     <div class="loading" v-else>
       loading
     </div>
   </transition>
    <TheFooter/>
  </div>
</template>

<style scoped>
.entries-page {
  word-break: break-all;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.empty-list, .loading {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.empty-list {

}
.loading {

}
</style>
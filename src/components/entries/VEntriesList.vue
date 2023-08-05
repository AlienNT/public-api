<script setup>
import VEntriesListItem from "./VEntriesListItem.vue";

defineProps({
  entriesList: {
    type: Array
  }
})
</script>

<template>
  <ul class="entries-list">
    <li
        class="entries-li"
        v-for="(entry, key) in entriesList"
        :key="key"
    >
      <VEntriesListItem
          :entry="entry"
      />
    </li>
  </ul>
</template>

<style scoped>
.entries-list {
  //display: flex;
  flex-wrap: wrap;
}

.entries-li {
  flex: 1 1 100%;
}
</style>
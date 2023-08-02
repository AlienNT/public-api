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
    <transition-group name="fade" appear>
      <li
          class="entries-li"
          v-for="(entry, key) in entriesList"
          :key="key"
      >
        <VEntriesListItem
            :entry="entry"
        />
      </li>
    </transition-group>
  </ul>
</template>

<style scoped>
.entries-list {
  display: flex;
  flex-wrap: wrap;
}

.entries-li {
  flex: 1 1 50%;
}
</style>
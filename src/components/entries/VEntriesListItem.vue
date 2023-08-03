<script setup>

import VEntryCard from "./VEntryCard.vue";
import {ref} from "vue";

defineProps({
  entry: {
    type: Object
  }
})

const entriesItem = ref(null)

</script>

<template>
  <div class="entries-list-item" ref="entriesItem">
    <VEntryCard
        :entry="entry"
    />
  </div>
</template>

<style scoped>
.entries-list-item {
  padding: 10px 15px;
  height: 100%;

}
</style>
<script setup>
import {computed} from "vue";
import {useEntries} from "../../compositions/useEntries.js";
import EntryField from "./entryFields/EntryField.vue";

const props = defineProps({
  entry: {
    type: Object
  }
})

const {setFilter, filter, setShowCount} = useEntries()

function objectToArray(obj) {
  return Object.keys(obj).map(key => {
    return {
      type: key,
      value: obj[key]
    }
  })
}

const fields = computed(() => objectToArray(props.entry))

function onFilter(e) {
  setFilter(filter.value === e ? null : e)
  setShowCount(12)
}
</script>

<template>
  <div class="entry-card">
    <template
        v-for="(field, key) in fields"
        :key="key"
    >
      <EntryField
          :value="field?.value"
          :type="field?.type"
          @on-filter="onFilter"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
$entryCardShadow: rgba(0, 0, 0, 0.55);
.entry-card {
  border-radius: 5px;
  box-shadow: 4px 4px 8px $entryCardShadow;
  padding: 15px;
  height: 100%;
  background: $entryBGColor;
  min-width: 280px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
</style>
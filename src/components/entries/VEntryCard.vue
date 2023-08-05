<script setup>
import {computed, onMounted, ref} from "vue";
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
const isMounted = ref(false)

onMounted(() => {
  setTimeout(() => {
    isMounted.value = true
  }, 800)
})

function onFilter(e) {
  setFilter(filter.value === e ? null : e)
  setShowCount(12)
}
</script>

<template>
  <div class="entry-card" :class="isMounted && 'show'">
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
  transition: .2s ease;
  //opacity: 0;
  //transform: translateX(100%);
}
.show {
  //opacity: 1;
  //transform: translateX(0);
}
</style>
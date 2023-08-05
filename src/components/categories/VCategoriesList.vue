<script setup>
import {useState} from "../../compositions/useState.js";
import {computed, watch} from "vue";
import VCategoriesListItem from "./VCategoriesListItem.vue";
import {useEntries} from "../../compositions/useEntries.js";
import {useEvents} from "../../compositions/useEvents.js";

const {fetchCategories, categories} = useState()
const {setFilter, filter, setShowCount} = useEntries()

const props = defineProps({
  searchFilter: {
    type: String,
    default: ''
  }
})

const filteredCategories = computed(() => {
  return categories.value.filter(category =>
      props.searchFilter.trim().length ?
          searchSubstr(category, props.searchFilter) :
          category
  )
})

function searchSubstr(str, substr) {
  if (!str || !substr) return str;

  return str.toLowerCase().includes(substr.toLowerCase())
}

watch(categories.value, (value) => {
  if (!value.length) {
    fetchCategories()
  }
}, {
  immediate: true
})

const {setIsNavActive} = useEvents()

function onClick(e) {
  setFilter(filter.value === e ? null : e)
  setShowCount(12)
  setIsNavActive(false)
}
</script>

<template>
  <transition name="fade" appear>
    <ul
        class="categories"
        v-if="filteredCategories.length"
    >
      <template
          v-for="(category, key) in filteredCategories"
          :key="key"
      >
        <VCategoriesListItem
            :category="category"
            @on-click="onClick"
        />
      </template>
    </ul>
  </transition>
</template>

<style scoped>
</style>
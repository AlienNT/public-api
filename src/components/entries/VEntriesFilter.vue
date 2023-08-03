<script setup>


import {reactive} from "vue";

const props = defineProps({
  filters: {
    type: Object,
  }
})

const emit = defineEmits([
  'onClick'
])
const filters = reactive([
  'Cors', 'HTTPS'
])

function filterStatus(filter) {
  return props.filters[filter]
}

function filterClass(filter) {
  switch (filterStatus(filter)) {
    case null:
    case undefined:
      return 'unset';
    case true:
      return 'active';
    case false:
      return 'disable'
  }
}
</script>

<template>
  <ul class="col entry-filter-list">
    <li
        class="entry-filter-item"
        v-for="(filter, key) in filters"
        :key="key"
    >
      <div
          class="filter-button"
          :class="filterClass(filter)"
          @click="emit('onClick', filter)"
      >
        {{ filter }}
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import "../../assets/css/variables/mixins";

.entry-filter-list {
  position: sticky;
  top: 0;
  display: flex;
  flex: none;
  flex-wrap: wrap;
  gap: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  background: $semiMediumColor;
  z-index: 1;
  box-shadow: 0 0 8px $semiMediumColor;
}

.filter-button {
  @include bgDarken($secondaryColor);
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  color: $lightColor;
  text-transform: uppercase;
  font-size: 12px;
}

.active {
  @include bgDarken($correctColor)
}

.disable {
  @include bgDarken($incorrectColor)
}

.unset {

}
</style>
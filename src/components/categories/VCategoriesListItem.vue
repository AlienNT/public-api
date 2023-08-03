<script setup>
import {useEntries} from "../../compositions/useEntries.js";
import {computed} from "vue";

const props = defineProps({
  category: {
    type: String
  }
})
const emit = defineEmits(['onClick'])

const {filter} = useEntries()

const isActive = computed(() => {
  return filter.value === props.category
})
</script>

<template>
  <div
      class="categories-list-item"
      :class="isActive && 'active'"
      @click.stop="emit('onClick', category)"
  >
    {{ category }}
  </div>
</template>

<style scoped lang="scss">
$itemActiveColor: #ffffff;
.categories-list-item {
  padding: 5px;
  margin-bottom: 5px;
  color: $sidebarItemBGColor;
  font-weight: 600;
  transition: .2s ease;
  border-radius: 0;
  border: none;
  border-bottom: 2px dotted $sidebarItemBGColor;

  &:hover {
    &:not(.active) {
      color: lighten($sidebarItemBGColor, 15%);
      border-bottom-style: solid;
    }
  }
}

.active {
  position: sticky;
  top: 60px;
  bottom: -10px;
  border-radius: 5px;
  color: $itemActiveColor;
  background: darken($sidebarItemBGColor, 10%);
}
</style>
<script setup>
import {computed} from "vue";
import {useEntries} from "../../../compositions/useEntries.js";
const {filter} = useEntries()

const props = defineProps({
  type: {
    type: String,
    default: null
  },
  value: {
    type: String,
    default: null
  }
})
const emit = defineEmits([
  'onClick'
])

const isActive = computed(() => {
  return filter.value === props.value
})
</script>

<template>
  <button
      class="category"
      :class="isActive && 'active'"
      type="button"
      aria-label="category button"
      :title="value"
      @click.stop="emit('onClick', value)"
  >
    {{ value }}
  </button>
</template>

<style scoped lang="scss">
@import "../../../assets/css/variables/mixins";

$categoryShadow: rgba(77, 98, 136, 0.63);
$categoryColor: #ffffff;
.category {
  @include bgDarken(transparentize($categoriesBGColor, .2));
  @include textOverflow(110px);
  border-radius: 15px;
  padding: 5px 15px;
  color: $categoryColor;
  width: max-content;
  box-shadow: 2px 2px 2px $categoryShadow;
  text-shadow: 2px 2px 2px $categoryShadow;
  transition: .2s ease;
  cursor: pointer;
  margin-bottom: 0;
  font-size: 12px;
}
.active {
  background: darken($categoriesBGColor, 10%);
}
</style>
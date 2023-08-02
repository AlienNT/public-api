<script setup>
import {computed} from "vue";

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

const domTitle = computed(() => {
  return `description: ${props.value}`
})
</script>

<template>
  <div
      class="description"
      :title="domTitle"
      :aria-label="domTitle"
  >
    {{ value }}
  </div>
</template>

<style scoped lang="scss">
.description {
  color: $secondaryColor;
  font-family: sans-serif;
  font-size: 16px;
}
</style>
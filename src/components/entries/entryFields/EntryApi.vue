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
  return `API name: ${props.value}`
})
</script>

<template>
  <div
      class="api"
      :title="domTitle"
      :aria-label="domTitle"
  >
    {{ value }}
  </div>
</template>

<style scoped lang="scss">
.api {
  word-wrap: break-word;
  word-break: break-all;
  font-weight: bolder;
  color: darken($secondaryColor, 15%);
  font-size: 24px;

  @media #{$mediaMobile} {
    font-size: 18px;
  }
}
</style>
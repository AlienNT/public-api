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
  },
})
const emit = defineEmits([
  'onClick'
])

const domTitle = computed(() => {
  return `Authentication: ${auth.value}`
})

const auth = computed(() => {
  return props.value || 'unknown'
})

</script>

<template>
  <div
      class="auth-field"
      :title="domTitle"
      :aria-label="domTitle"
  >
    <div class="icon-wrapper">
      <div class="icon"></div>
    </div>
    <span class="title">
      {{ type }}:
    </span>
    <span class="value">
      {{auth}}
    </span>
  </div>
</template>


<style scoped lang="scss">
@import "../../../assets/css/variables/mixins";
.auth-field {
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.icon-wrapper {
  width: 20px;
  height: 20px;
  display: flex;
}
.icon {
  flex: 1 1 auto;
  background: $semiMediumColor;
  @include maskImage(url('../../../assets/images/dialog-password-svgrepo-com.svg'))
}
</style>
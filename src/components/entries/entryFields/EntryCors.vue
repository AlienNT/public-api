<script setup>
import {computed} from "vue";

const props = defineProps({
  type: {
    type: String,
    default: null
  },
  value: {
    type: Boolean,
    default: null
  },
})
const emit = defineEmits([
  'onClick'
])

const isCors = computed(() => {
  return props.value
})

const domTitle = computed(() => {
  return `CORS: ${props.value}`
})

</script>

<template>
  <div
      class="cors-field"
      :class="isCors ? 'cors': 'no-cors'"
      :title="domTitle"
      :aria-label="domTitle"
  >
    <span class="title">
      {{ type }}
    </span>
  </div>
</template>

<style scoped lang="scss">
$transparentBG: .9;
$corsTitleColor: #fff;
.cors-field {
  border-radius: 5px;
  width: fit-content;
  display: flex;

  .title, .value {
    display: flex;
    align-items: center;
  }

  .title {
    text-transform: uppercase;
    padding: 5px;
    border-radius: 5px;
    color: $corsTitleColor;
    font-size: 12px;
  }

  .value {
    padding: 5px 10px;
    font-size: 12px;
  }
}

.cors {
  background: transparentize($correctColor, $transparentBG);

  .title {
    background: $correctColor;
  }

  .value {
    color: darken($correctColor, 15%);
  }
}

.no-cors {
  background: transparentize($incorrectColor, $transparentBG);

  .title {
    background: $incorrectColor;
  }

  .value {
    color: darken($incorrectColor, 15%);
  }
}

</style>
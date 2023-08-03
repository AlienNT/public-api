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
  }
})
const emit = defineEmits([
  'onClick'
])

const domTitle = computed(() => {
  return `${props.type}: ${props.value}`
})
</script>

<template>
  <div
      class="https-field"
      :class="value ? 'https' : 'http'"
      :aria-label="domTitle"
      :title="domTitle"
  >
    <div class="icon-wrapper">
      <span class="icon"/>
    </div>
    <span class="title">
      <span v-if="value">HTTPS</span>
      <span v-else>HTTP<span class="hide-symbol">S</span></span>
    </span>
  </div>
</template>

<style scoped lang="scss">
@import "../../../assets/css/variables/mixins";

$transparentBG: .92;
.https-field {
  display: flex;
  align-items: center;
  border-radius: 5px;
  width: fit-content;

  .icon {
    display: block;
    width: 15px;
    height: 15px;
    background: #ffffff;
  }

  .icon-wrapper {
    border-radius: 5px 0 0 5px;
    padding: 5px;
  }

  .title {
    padding: 5px 5px;
    font-size: 12px;
    white-space: nowrap;
  }
}

.https {
  background: transparentize($correctColor, $transparentBG);

  .icon-wrapper {
    background: $correctColor;
  }

  .icon {
    @include maskImage(url("../../../assets/images/lock-svgrepo-com.svg"))
  }

  .title {
    color: darken($correctColor, 15%);
  }
}

.http {
  background: transparentize($incorrectColor, $transparentBG);

  .icon-wrapper {
    background: $incorrectColor;
  }

  .icon {
    @include maskImage(url("../../../assets/images/unlock-svgrepo-com.svg"))
  }

  .title {
    color: darken($incorrectColor, 15%);
  }
}
.hide-symbol {
  opacity: .2;
}
</style>
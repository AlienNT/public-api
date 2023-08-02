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
  return `${props.type}: ${props.value}`
})
</script>

<template>
  <div class="link-field">
    <a
        class="link"
        :href="value"
        :title="value"
        :aria-label="domTitle"
        target="_blank"
    >
      <div class="icon-wrapper">
        <div class="icon"/>
      </div>
    </a>
  </div>
</template>

<style scoped lang="scss">
@import "../../../assets/css/variables/mixins";

.link-field {
  display: flex;
}

.icon-wrapper {
  @include bgLighten($entryLinkBGColor);
  border-radius: 5px;
  padding: 5px;
  width: 30px;
  height: 30px;
  display: flex;

  .icon {
    @include maskImage(url("../../../assets/images/link-external-02-svgrepo-com.svg"));
    background: #ffffff;
    flex: 1 1 auto;
  }
}

.link-field {
  width: fit-content;
  align-items: center;
  gap: 5px;
}
</style>
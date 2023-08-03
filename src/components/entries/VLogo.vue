<script setup>
import {computed} from "vue";

const currentLocation = computed(() => {
  return window.location || '/'
})

const emit = defineEmits([
  'onClick'
])
</script>

<template>
  <a
      class="logo"
      :href="currentLocation"
      @click.prevent="emit('onClick')"
  />
</template>

<style scoped lang="scss">
@import "../../assets/css/variables/mixins";

.logo {
  @include maskImage(url("../../assets/images/logo_code_3.svg"));
  height: 40px;
  display: block;
  max-width: 120px;
  width: 100%;
  background-color: $logoColor;
}
</style>
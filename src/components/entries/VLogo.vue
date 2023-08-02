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
  width: 120px;
  background-color: $logoColor;
}
</style>
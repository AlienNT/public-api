<script setup>
defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits([
  'onClick'
])
</script>

<template>
  <button
      class="burger"
      :class="isActive && 'active'"
      aria-label="show menu button"
      @click="emit('onClick', !isActive)"
  />
</template>

<style scoped lang="scss">
$burgerLineColor: #fff;
.burger {
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
  position: relative;
  cursor: pointer;
  transition: .2s ease;
  background: transparent;

  &:before, &:after {
    transition: .2s ease;
    content: '';
    display: block;
    height: 4px;
    border-radius: 5px;
    background: $burgerLineColor;
  }
  &:before {
    width: 100%;
  }

  &:after {
    width: 50%;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
}

.active {
  justify-content: center;
  align-items: center;

  &:before, &:after {
    position: absolute;
    width: 100%;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
}
</style>
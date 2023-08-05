<script setup>
defineEmits([
  'onReset',
  'onInput'
])
defineProps({
  fieldValue: {
    type: String,
    default: null
  }
})
</script>

<template>
  <form
      class="search"
      @reset="$emit('onReset')"
  >
    <label
        :class="fieldValue.length && 'not-empty'"
    >
      <input
          type="search"
          class="search-input"
          :value="fieldValue"
          placeholder="Search"
          @input="e => $emit('onInput', e.target.value)"
      >
      <button
          type="reset"
          aria-label="reset search field button"
          class="reset"
      />
    </label>
  </form>
</template>

<style scoped lang="scss">

.not-empty {
  &:hover {
    .reset {
      z-index: 1;
      opacity: 1;
    }
  }
}

.search {
  display: flex;
  padding: 15px;
  background: $sidebarBGColor;
  box-shadow: 0 0 8px $sidebarItemBGColor;
}
.search-input {
  padding: 5px 15px;
  transition: .2s ease;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 2px 0 $sidebarItemBGColor;
  border-radius: 5px;
  &:focus {
    box-shadow: 0 2px 2px 0 rgba(100, 149, 237, 0.63);
    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    transition: .2s ease;
    color: $sidebarItemBGColor;
  }
}

label {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.reset {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: transparent;
  transition: .2s;
  opacity: 0;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  bottom: 0;
  cursor: pointer;
  z-index: -1;

  &:hover {
    transform: translateY(-50%) scale(1.1);

    &:before, &:after {
      background: $sidebarItemBGColor;
    }
  }

  &:before, &:after {
    transition: .2s ease;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 5px;
    background: lighten($sidebarItemBGColor, 15%);
    position: absolute;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
}
</style>
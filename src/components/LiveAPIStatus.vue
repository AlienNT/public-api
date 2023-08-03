<script setup>
defineProps({
  isAlive: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="live-api" :class="isAlive && 'alive'">
    <div class="title">
      API {{isAlive ? 'Online' : 'Offline'}}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/css/variables/mixins";
.live-api {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: fit-content;
  margin-left: auto;
  color: $lightColor;
  font-size: 12px;
  gap: 5px;

  &:before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #868686;
  }
}
.title {
  @include textOverflow(75px);
}

.alive {
  &:before {
    animation: statusAnimation 5s ease infinite;

  }
}

@keyframes statusAnimation {
  0%, 25%, 75%, 100% {
    background: rgb(127, 174, 252);
    box-shadow: 0 0 2px 0 rgba(162, 195, 253, 0.8);
  }
  50% {
    background: rgb(175, 201, 246);
    box-shadow: 0 0 6px 0 rgb(180, 206, 252);
  }
}
</style>
<script setup>
import {computed} from "vue";
import EntryApi from "./EntryApi.vue";
import EntryDescription from "./EntryDescription.vue";
import EntryCategory from "./EntryCategory.vue";
import EntryHttps from "./EntryHttps.vue";
import EntryCors from "./EntryCors.vue";
import EntryLink from "./EntryLink.vue";

const props = defineProps({
  type: {
    type: String,
    default: null
  },
  value: {
    type: [String, Boolean],
    default: null
  }
})

const emit = defineEmits([
  'onClick',
  'onFilter'
])

const defineComponent = computed(() => {
  switch (props.type?.toLowerCase()) {
    case 'api':
      return {
        component: EntryApi,
        order: 1
      };
    case 'description':
      return {
        component: EntryDescription,
        order: 3
      };
    case 'category':
      return {
        component: EntryCategory,
        order: 2
      };
    case 'https':
      return {
        component: EntryHttps,
        order: 4
      };
    case 'cors':
      return {
        component: EntryCors,
        order: 5
      };
    case 'link':
      return {
        component: EntryLink,
        order: 6
      };
    default:
      return null
  }
})
const orderClass = computed(() => {
  return `order-${defineComponent.value?.order}`
})
const component = computed(() => {
  return defineComponent.value?.component
})

function onClick(e) {
  if (props.type === 'Category') {
    emit('onFilter', e)
  }
}
</script>

<template>
  <div
      v-if="component"
      class="entry-field"
      :class="orderClass"
  >
    <component
        :is="component"
        :value="value"
        :type="type"
        @on-click="onClick"
    />
  </div>
</template>
<style scoped lang="scss">
.entry-field {
  flex: 100%;
}

.order-1 {
  flex: 1 1 50%;
}

.order-2 {
  flex: 0 1 min-content;
}

.order-4, .order-5 {
  flex: none;
  display: flex;
  height: 30px;
}

.order-6 {
  flex: 1 1 fit-content;
  justify-content: flex-end;
  display: flex;
}

</style>
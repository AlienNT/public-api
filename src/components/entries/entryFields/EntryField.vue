<script setup>
import {computed} from "vue";
import EntryApi from "./EntryApi.vue";
import EntryDescription from "./EntryDescription.vue";
import EntryCategory from "./EntryCategory.vue";
import EntryHttps from "./EntryHttps.vue";
import EntryCors from "./EntryCors.vue";
import EntryLink from "./EntryLink.vue";
import EntryAuth from "./EntryAuth.vue";

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
    case 'auth':
      return {
        component: EntryAuth,
        order: 4
      };
    case 'https':
      return {
        component: EntryHttps,
        order: 5
      };
    case 'cors':
      return {
        component: EntryCors,
        order: 6
      };
    case 'link':
      return {
        component: EntryLink,
        order: 7
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

const fieldClass = computed(() => {
  return `entry-field__${props.type?.toLowerCase()}`
})
</script>

<template>
  <div
      v-if="component"
      class="entry-field"
      :class="fieldClass"
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

  &[class$="__api"] {
    order: 1;
    flex: 1 1 auto;

  }

  &[class$="__description"] {
    order: 3;
    margin-bottom: 30px;
  }

  &[class$="__auth"],
  &[class$="__https"],
  &[class$="__cors"],
  &[class$="__link"] {
    order: 3;
    flex: none;
    justify-self: flex-end;
    align-self: center;
  }
  &[class$="__auth"] {
    flex: 0 0 110px;
    @media #{$mediaSmallMobile} {
      flex: 1 1 100%;
    }
  }

  &[class$="__https"] {
    order: 3;
    //margin-left: auto;
  }

  &[class$="__cors"] {
    order: 3;
  }

  &[class$="__link"] {
    order: 3;
    margin-left: auto;
    //flex: 1 1 25%;
  }

  &[class$="__category"] {
    order: 2;
    flex: none;
  }
}

</style>
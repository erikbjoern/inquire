<script setup lang="ts">
import { IconName } from '../../assets/svg/types'
import SvgIcon from '../base/SvgIcon.vue'
const props = defineProps<{ label?: string; placeholder?: string; icon?: IconName }>()
</script>

<template>
  <label class="flex flex-col">
    <p v-if="props.label" class="pb-1">{{ props.label }}</p>
    <div class="relative h-full w-full border border-gray-700">
      <input class="h-10 w-full bg-white" :placeholder="props.placeholder" />
      <button
        v-if="props.icon"
        class="absolute inset-0 flex items-center justify-center border-l border-gray-700 bg-gray-200"
        style="left: calc(100% - 3rem)"
      >
        <SvgIcon :icon="props.icon" />
      </button>
    </div>
  </label>
</template>

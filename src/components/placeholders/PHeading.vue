<script setup lang="ts">
import { computed } from '@vue/reactivity'

const props = defineProps<{ level?: number }>()
const level = computed(() => ((props.level ?? 1) <= 6 ? props.level ?? 1 : 6))
const size = computed(() => (level.value == 1 ? 5 : 4 - level.value * 0.4))
</script>

<template>
  <component
    :is="`h${level}`"
    class="leading-none"
    :class="level == 1 ? 'font-bold' : level <= 3 ? 'font-medium' : 'font-normal'"
    :style="{ fontSize: `${size}vmin`, paddingBottom: `${size * 0.4}vmin` }"
  >
    <slot />
  </component>
</template>

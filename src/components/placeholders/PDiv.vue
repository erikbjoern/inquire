<script setup lang="ts">
type WidthProp = 'flex-1' | 'w-fit' | 'w-32' | 'w-64' | 'w-96'

const props = withDefaults(
  defineProps<{
    border?: boolean
    padding?: boolean
    shadow?: boolean
    width?: WidthProp
  }>(),
  {
    border: true,
    padding: true,
    shadow: false,
    width: 'flex-1',
  }
)
</script>

<template>
  <div
    class="border-gray-500 bg-gray-500 bg-opacity-10"
    :class="[
      props.border && 'border',
      props.padding && 'p-4',
      props.shadow && 'shadow-lg',
      props.width,
    ]"
  >
    <slot />
  </div>
</template>

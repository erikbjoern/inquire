<script setup lang="ts">
import { ref, watch } from 'vue'
import { IconName } from '../../assets/svg/types'

const props = defineProps<{ icon?: IconName }>()

const importIconUrl = async (icon?: string) => {
  if (!icon) return Promise.resolve('')

  const module = await import(`../../assets/svg/${icon}.svg`)
  return module.default.replace(/^\/@fs/, '')
}

const iconUrl = ref(null)

watch(
  () => props.icon,
  async () => (iconUrl.value = await importIconUrl(props.icon)),
  { immediate: true }
)
</script>

<template>
  <div class="h-[1.75rem] w-[1.75rem]">
    <img
      :class="[iconUrl ? 'opacity-100' : 'opacity-0']"
      :src="iconUrl ?? ''"
      class="h-full w-full transition-opacity duration-200"
      :alt="`${['icon', props.icon].filter(v => !!v).join('-')}`"
    />
  </div>
</template>

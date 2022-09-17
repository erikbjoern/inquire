<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { getColor, Color } from '../../helpers/getStyle'
import { IconName } from '../../assets/svg/types'
import SvgIcon from '../base/SvgIcon.vue'

const props = withDefaults(
  defineProps<{ bgColor?: Color; textColor?: 'black' | 'white'; icon?: IconName }>(),
  {
    bgColor: 'green',
    textColor: 'white',
  }
)

const backgroundColor = computed(() => getColor(props.bgColor))
const slots = useSlots()
const hasSlot = computed(() => Object.values(slots).some(v => !!v))
</script>

<template>
  <button :class="'border-2 p-[2px]'" :style="{ borderColor: backgroundColor }">
    <div
      class="flex h-full items-center justify-evenly whitespace-nowrap border-2 border-transparent py-px px-1 font-semibold"
      :style="{ color: props.textColor, backgroundColor }"
    >
      <div v-if="false && icon && hasSlot" class="w-8 flex-shrink" />
      <div v-if="hasSlot" class="flex flex-1 items-center justify-center px-2">
        <slot />
      </div>
      <SvgIcon
        v-if="icon"
        :icon="icon"
        :class="hasSlot && 'ml-auto'"
        class="h-6 w-6 opacity-90"
        :style="{ filter: props.textColor == 'white' ? 'brightness(0) invert(1)' : '' }"
      />
    </div>
  </button>
</template>

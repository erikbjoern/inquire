<script setup lang="ts">
import { range, random, draw } from 'radash'
import { StyleValue, ref, watch } from 'vue'

const animate = ref(true)

function drawAndRemove<T>(array: T[]) {
  const item = draw(array)
  array.splice(array.indexOf(item), 1)
  return item
}

const screenMax = 100
const numberOfSquares = Math.floor(
  Math.max(visualViewport?.height ?? 1000, visualViewport?.width ?? 1000) / 10
)
const minSize = 2
const maxSize = 14
const rangeStart = screenMax - 80
const rangeEnd = screenMax - rangeStart * 1.2
const colorClasses = [
  'bg-cyan-200',
  'bg-cyan-300',
  'bg-cyan-400',
  'bg-cyan-600',
  'bg-emerald-200',
  'bg-emerald-700',
  'bg-green-200',
  'bg-green-300',
  'bg-green-400',
  'bg-green-600',
  'bg-orange-300',
  'bg-orange-500',
  'bg-yellow-200',
  'bg-yellow-600',
]

let squares: { style: StyleValue; class: string }[] = []

function generateSquares() {
  squares = []

  const distancesX = [
    rangeStart * 0.6,
    rangeStart * 0.8,
    screenMax - rangeStart * 0.8,
    screenMax - rangeStart * 0.6,
  ]
  const distancesY: number[] = []
  const rangeValue = rangeEnd - rangeStart
  for (const v of range(rangeStart, rangeEnd, rangeValue / numberOfSquares)) {
    distancesX.push(v)
    distancesY.push(v)
  }
  for (const v of range(0.6, 1, 0.08)) {
    // add a few extra outsider squares
    distancesX.push(rangeStart * v, screenMax - rangeStart * v)
    distancesY.push(screenMax - rangeStart * v)
  }

  const distanceXAverage = (Math.min(...distancesX) + Math.max(...distancesX)) / 2
  const distanceYAverage = (Math.min(...distancesY) + Math.max(...distancesY)) / 2

  let n = numberOfSquares
  while (n--) {
    const offsetY = drawAndRemove(distancesY)
    const offsetX = drawAndRemove(distancesX)
    const size = Math.min(random(minSize, maxSize), random(minSize, maxSize))
    const distanceModifiedSize =
      (size * 100) / (100 + 4 * Math.abs(distanceXAverage - offsetX))

    squares.push({
      style: {
        height: `${distanceModifiedSize}vmin`,
        width: `${distanceModifiedSize}vmin`,
        position: 'absolute',
        left: `${offsetX}vw`,
        top: `${offsetY}vh`,
        transformOrigin: `${distanceXAverage - offsetX}vw ${
          (distanceYAverage - offsetY) / 100
        }vh`,
        animationDuration: `${n / 4 + 50}s`,
        animationDelay: `${n / 2}s`,
      },
      class: `mix-blend-saturate ${draw(colorClasses)}`,
    })
  }
}

watch(
  () => animate.value,
  () => generateSquares(),
  { immediate: true }
)
</script>

<template>
  <div
    class="pt-18 absolute top-[35vh] bottom-[35vh] left-[50vw] z-10 flex w-fit -translate-x-1/2 flex-col items-stretch justify-center overflow-hidden bg-cyan-500 px-10"
  >
    <div class="font-[Oswald] text-8xl uppercase text-[#447788]">VITE</div>
    <div
      class="flex justify-between px-1 font-[Oswald] text-4xl uppercase text-[#447788]"
    >
      <span v-for="(char, i) in 'project'" :key="i">{{ char }}</span>
    </div>
    <div class="flex justify-between px-1 font-sans text-lg text-[#447788]">
      <span v-for="(char, i) in 'template'" :key="i">{{ char }}</span>
    </div>
  </div>
  <div
    v-for="(square, i) in squares"
    :key="i"
    :style="square.style"
    :class="[
      square.class,
      animate ? 'animate opacity-0' : '-translate-y-10 opacity-[0.3]',
    ]"
  />
  <label
    class="absolute bottom-2 left-1/2 flex -translate-x-1/2 select-none items-center gap-2 text-lg opacity-50"
  >
    <input v-model="animate" type="checkbox" />
    Animate
  </label>
</template>

<style>
@keyframes rotation {
  from {
    opacity: 0;
    transform: rotate(0deg);
  }

  5% {
    opacity: 0.3;
  }

  10% {
    opacity: 0;
  }

  15% {
    opacity: 0.1;
  }

  20% {
    opacity: 0;
  }

  25% {
    opacity: 0.2;
  }

  30% {
    opacity: 0;
  }

  35% {
    opacity: 0.1;
  }

  40% {
    opacity: 0;
  }

  45% {
    opacity: 0.2;
  }

  50% {
    opacity: 0;
  }

  55% {
    opacity: 0.3;
  }

  60% {
    opacity: 0;
  }

  65% {
    opacity: 0.1;
  }

  70% {
    opacity: 0;
  }

  75% {
    opacity: 0.2;
  }

  80% {
    opacity: 0;
  }

  85% {
    opacity: 0.1;
  }

  90% {
    opacity: 0;
  }

  95% {
    opacity: 0.3;
  }

  to {
    transform: rotate(360deg);
  }
}

.animate {
  animation: rotation linear infinite;
}

body * {
  mix-blend-mode: multiply;
}
</style>
